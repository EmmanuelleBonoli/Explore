import {Component} from '@angular/core';
import {FooterComponent} from "../../components/shared/footer/footer.component";
import {HeaderComponent} from "../../components/shared/header/header.component";
import {RouterOutlet} from "@angular/router";
import {MenuComponent} from "../../components/activities/menu/menu.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    MenuComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
