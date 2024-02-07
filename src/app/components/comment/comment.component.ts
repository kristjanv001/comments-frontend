import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() isReply = false;
}
