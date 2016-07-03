import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TopicInfo } from './topic-info';
import { Player } from './player';
import { SiblingCommService } from './sibling-comm.service';
import { ShowPlayerComponent } from './show-player.component';

@Component ({
    selector: 'distribute-roles',
    directives: [ShowPlayerComponent],
    templateUrl: 'app/distribute-roles.component.html'
    })
export class DistributeRolesComponent implements OnInit {

    players: Player[];
    topicInfo: TopicInfo;
    chosenPlayer: Player;
    @Output() changeScreen = new EventEmitter<number>();
    showModal: boolean = false;

    constructor(private siblingCommService: SiblingCommService) {}

    playersRemainingToShow() {
        return this.players.filter(p => !p.shown);
    }

    ngOnInit(): any {
        console.log('ngOnInit() in distribute-roles.component');
        this.players = this.siblingCommService.getPlayers();
        this.topicInfo = this.siblingCommService.getTopicInfo();
        this.players.forEach(p => p.shown = false);
    }

    start() {
        this.changeScreen.emit(3);
    }

    edit() {
        this.changeScreen.emit(1);
    }

    showFor(player) {
        this.chosenPlayer = player;
        this.showModal = true;
        player.shown = true;
    }

    acceptInfo() {
        this.showModal = false;
    }
}
