import { Component } from "@angular/core";
import { CommentsComponent } from "../../components/comments/comments.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: "./home.component.html",
})
export class HomePage {

}
