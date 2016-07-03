import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'in-play',
    templateUrl: 'app/in-play.component.html'
})
export class InPlayComponent {
    @Output() changeScreen = new EventEmitter<number>();

    reveal() {
        this.changeScreen.emit(1);
    }
}
