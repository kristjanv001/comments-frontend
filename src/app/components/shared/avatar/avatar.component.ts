import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  standalone: true,
  imports: [],
  templateUrl: "./avatar.component.html",
})
export class AvatarComponent {
  @Input() username?: string;
  @Input() height = 32;
  @Input() width = 32;

  get avatarSrc(): string {
    return `assets/images/avatars/image-${this.username}.png`;
  }
}
