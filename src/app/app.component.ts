import {Component, inject} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ToastModule} from "primeng/toast";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastModule, RouterModule],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explore';
  primeConfig = (inject(PrimeNGConfig).ripple = true);

}
