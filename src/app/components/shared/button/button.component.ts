import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() buttonText: string = "Default";
  @Input() buttonType: "primary" | "destructive" | "secondary" = "primary";
  @Input() clickHandler: () => void = () => null;
  @Input() disabled = false;

  get buttonClass(): string {
    switch (this.buttonType) {
      case "primary":
        return "bg-moderate-blue text-white hover:bg-light-grayish-blue disabled:bg-light-grayish-blue disabled:cursor-not-allowed";
      case "destructive":
        return "bg-soft-red text-white hover:bg-pale-red";
      case "secondary":
        return "bg-grayish-blue text-white hover:opacity-75";
      default:
        return "";
    }
  }
}
