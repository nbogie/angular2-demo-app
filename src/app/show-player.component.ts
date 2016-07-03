import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TopicInfo } from './topic-info';
import { Player } from './player';

@Component({
    'selector': 'show-player',
    'templateUrl': 'app/show-player.component.html'
})
export class ShowPlayerComponent {
    @Input() topicInfo: TopicInfo;
    @Input() player: Player;
    @Output() dismiss = new EventEmitter<Player>();

    close() {
        this.dismiss.emit(this.player);
    }
}
