import {Component, Input, inject} from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {ImageModule} from 'primeng/image';
import {Activity} from '../../../models/activities/activity.class';
import {NgStyle} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {IconActivityComponent} from "../../shared/icon-activity/icon-activity.component";

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CardModule, ButtonModule, ImageModule, TagModule, NgStyle, IconActivityComponent],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss',
})
export class ActivityCardComponent {
  @Input() activity!: Activity;
  router: Router = inject(Router);

  seeDetails(): void {
    this.router.navigate([`activity/${this.activity.id}`]);
  }
}
