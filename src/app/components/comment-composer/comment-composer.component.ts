import { Component, Input } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { User } from '../../interfaces/user';
import { AvatarComponent } from '../shared/avatar/avatar.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-comment-composer',
  standalone: true,
  imports: [CardComponent, AvatarComponent, ButtonComponent],
  templateUrl: './comment-composer.component.html'
})
export class CommentComposerComponent {
  @Input() currentUser?: User;
  @Input() buttonText = "Send";
}
