import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/shared/footer/footer.component';
import {CommonModule} from '@angular/common';
import {PrimeNGConfig} from 'primeng/api';
import {HeaderComponent} from './components/shared/header/header.component';
import {ToastModule} from "primeng/toast"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, ToastModule],
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explore';
  primeConfig = (inject(PrimeNGConfig).ripple = true);

}
