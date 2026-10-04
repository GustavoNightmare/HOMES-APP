import { Component, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import {Home} from './home/home';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}
