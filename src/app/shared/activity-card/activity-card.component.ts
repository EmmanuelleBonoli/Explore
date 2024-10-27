import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Activity } from '../../models/activity.class';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss',
})
export class ActivityCardComponent {
  @Input() activity!: Activity;
}
