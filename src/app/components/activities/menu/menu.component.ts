import {Component, inject} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Avatar} from "primeng/avatar";
import {NgClass} from "@angular/common";
import {Badge} from "primeng/badge";
import {Router} from "@angular/router";
import {UserRoutes} from "../../../routes/user-routes";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Menubar, Avatar, NgClass, Badge],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  // items!: any[];
  router: Router = inject(Router);
  //
  // ngOnInit() {
  //   this.items = [
  //     {
  //       label: 'Home',
  //       icon: 'pi pi-home',
  //     },
  //     {
  //       label: 'Projects',
  //       icon: 'pi pi-search',
  //       badge: '3',
  //       items: [
  //         {
  //           label: 'Core',
  //           icon: 'pi pi-bolt',
  //           shortcut: '⌘+S',
  //         },
  //         {
  //           label: 'Blocks',
  //           icon: 'pi pi-server',
  //           shortcut: '⌘+B',
  //         },
  //         {
  //           separator: true,
  //         },
  //         {
  //           label: 'UI Kit',
  //           icon: 'pi pi-pencil',
  //           shortcut: '⌘+U',
  //         },
  //       ],
  //     },
  //   ];
  // }

  returnHome(): void {
    this.router.navigate([`${UserRoutes.Home}`])
  }

  createActivity(): void {
    this.router.navigate([`${UserRoutes.CreateActivity}`])
  }

  seeProfile(): void {
    this.router.navigate([`${UserRoutes.Profile}`])
  }
}
