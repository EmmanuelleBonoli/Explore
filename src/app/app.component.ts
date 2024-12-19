import {Component, inject} from '@angular/core';
import {PrimeNG} from 'primeng/config';
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

  primeng: PrimeNG = inject(PrimeNG);

  ngOnInit() {
    this.primeng.ripple.set(true);
  }


}
