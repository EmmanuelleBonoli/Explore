import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {PrimeNGConfig} from 'primeng/api';
import {HeaderComponent} from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explore';
  primeConfig = (inject(PrimeNGConfig).ripple = true);

}
