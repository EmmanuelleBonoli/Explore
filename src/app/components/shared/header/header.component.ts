import {Component} from '@angular/core';
import {GlobalFiltersComponent} from "../../activities/global-filters/global-filters.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GlobalFiltersComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
