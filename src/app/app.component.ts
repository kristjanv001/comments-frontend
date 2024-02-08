import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HomePage } from "./pages/home/home.component";
import { initFlowbite } from "flowbite";
import { DialogComponent } from "./components/shared/dialog/dialog.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePage, DialogComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "Comments";

  ngOnInit(): void {
    initFlowbite();
  }
}
