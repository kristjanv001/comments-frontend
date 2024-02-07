import { Component } from "@angular/core";
import { CommentComponent } from "../../components/comment/comment.component";
import { CommentService } from "../../services/comment.service";
import { CommentData } from "../../interfaces/comment";
@Component({
  selector: "app-comments",
  standalone: true,
  imports: [CommentComponent],
  templateUrl: "./comments.component.html",
})
export class CommentsComponent {
  commentData?: CommentData;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getComments().subscribe((data) => {
      console.log(data);

      this.commentData = data;
    });
  }
}
