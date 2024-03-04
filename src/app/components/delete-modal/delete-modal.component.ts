import { Component, Input } from "@angular/core";
import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from "@spartan-ng/ui-alertdialog-brain";
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from "@spartan-ng/ui-alertdialog-helm";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: "app-delete-modal",
  standalone: true,
  imports: [
    BrnAlertDialogTriggerDirective,
    BrnAlertDialogContentDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogTitleDirective,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogContentComponent,
    HlmButtonDirective,
    ButtonComponent,
  ],
  templateUrl: "./delete-modal.component.html",
})
export class DeleteModalComponent {
  @Input() clickHandler!: () => void;

}
