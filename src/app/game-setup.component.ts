import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TopicInfo } from './topic-info';
import { Player } from './player';
import { SAMPLE_TOPICS } from './mocks';
import { SiblingCommService } from './sibling-comm.service';

@Component({
    'selector': 'game-setup',
    'templateUrl': 'app/game-setup.component.html'
})
export class GameSetupComponent implements OnInit {
    players:Player[];
    chosenTopicInfo: TopicInfo;
    candidateTopicInfo: TopicInfo;
    sampleTopics: TopicInfo[] = SAMPLE_TOPICS;
    showModal: boolean = false;

    @Output() changeScreen = new EventEmitter<number>();

    constructor(private siblingCommService: SiblingCommService) {}

    deletePlayer(player) {
        // TODO: handle it not being there (and dups).  Do by ID not name.
        let ix = this.players.findIndex(p => p.name === player.name)
        this.players.splice(ix, 1);
    }

    addPlayer() {
        this.players.push({"name": "Steve", isImpostor: false, shown: false});
    }

    allReady() {
        return this.chosenTopicInfo && this.players.length > 3;
    }

    setOneImpostorRandomly() {
        this.players.forEach(p => p.isImpostor = false);
        let pickedPlayer:Player = <Player>this.sample(this.players);
        pickedPlayer.isImpostor = true;
    }

    goToDistributeRoles() {
        this.setOneImpostorRandomly();
        this.siblingCommService.setData(this.players, this.chosenTopicInfo);
        this.changeScreen.emit(2);
    }

    ngOnInit():any {
        console.log("ngOnInit() in game-setup comp");
        this.players = this.siblingCommService.getPlayers();
        this.chosenTopicInfo = this.siblingCommService.getTopicInfo();
    }

    sample(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }

    chooseRandomTopic() {
        this.chosenTopicInfo = <TopicInfo>this.sample(this.sampleTopics);
    }

    setTopic() {
        this.candidateTopicInfo = { topic: "", category: "", difficulty: 0};
        this.showModal = true;
    }

    confirmSetTopic() {
        this.chosenTopicInfo = this.candidateTopicInfo;
        this.showModal = false;
    }

    cancelSetTopic() {
        this.candidateTopicInfo = null;
        this.showModal = false;
    }
}
