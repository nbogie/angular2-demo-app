import { Component } from '@angular/core';

import { GameSetupComponent } from './game-setup.component';
import { DistributeRolesComponent } from './distribute-roles.component';
import { InPlayComponent } from './in-play.component';

import { SiblingCommService } from './sibling-comm.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [GameSetupComponent, DistributeRolesComponent, InPlayComponent],
  providers: [SiblingCommService]
})
export class AppComponent {
    stage: number = 1;
    title = 'Impostor (Angular 2)';

    constructor(private siblingCommService: SiblingCommService) {}

    // TODO: make into a ("fwd" | "back") nav request from a given stage.
    changeScreen(event) {
        this.stage = event;
    }

}
