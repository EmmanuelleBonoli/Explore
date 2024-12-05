import {Component} from '@angular/core';
import {GlobalFilterComponent} from "../../activities/global-filter/global-filter.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    GlobalFilterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
