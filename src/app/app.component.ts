import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePage } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePage],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Comments';
}
