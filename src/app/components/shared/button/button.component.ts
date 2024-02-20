import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() buttonText: string = "";
  @Input() buttonType: "primary" | "destructive" | "secondary" = "primary";
  @Input() clickHandler!: () => void;

  get buttonClass(): string {
    switch (this.buttonType) {
      case "primary":
        return "bg-moderate-blue text-white hover:bg-light-grayish-blue";
      case "destructive":
        return "bg-soft-red text-white hover:bg-pale-red";
      case "secondary":
        return "bg-grayish-blue text-white hover:opacity-75";
      default:
        return "";
    }
  }
}
