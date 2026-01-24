import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './page/menu/menu-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('host-app');
}
