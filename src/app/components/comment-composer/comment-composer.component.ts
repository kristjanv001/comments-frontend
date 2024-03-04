import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component, Input } from "@angular/core";
import { CardComponent } from "../shared/card/card.component";
import { User } from "../../interfaces/user";
import { AvatarComponent } from "../shared/avatar/avatar.component";
import { ButtonComponent } from "../shared/button/button.component";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-comment-composer",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, CardComponent, AvatarComponent, ButtonComponent],
  templateUrl: "./comment-composer.component.html",
})
export class CommentComposerComponent {
  @Input() currentUser?: User;
  @Input() isEdit = false;
  @Input() buttonText = "Send";
  @Input() commentContent = "";
  @Input() clickHandler!: (text: string) => void;

  placeholderText = "Add a comment...";
  commentForm = new FormGroup({ body: new FormControl("") });

  ngOnInit() {
    this.commentForm = new FormGroup({
      body: new FormControl(this.commentContent ?? "", [Validators.required, Validators.minLength(4)]),
    });
  }

  get body() {
    return this.commentForm.get('body');
  }

  handleSubmit() {
    this.commentForm.markAllAsTouched();
    this.commentForm.markAsDirty();

    if (this.commentForm.valid) {
      this.clickHandler(this.commentForm.value.body ?? "");

      this.commentForm.reset();
    }
  }
}
