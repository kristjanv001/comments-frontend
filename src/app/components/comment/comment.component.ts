import { Component, Input } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { User } from '../../interfaces/user';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() comment!: Comment;
  @Input() currentUser?: User;
}
