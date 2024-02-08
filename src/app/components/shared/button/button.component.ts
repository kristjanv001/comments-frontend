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

  get buttonClass(): string {
    switch (this.buttonType) {
      case "primary":
        return "bg-moderate-blue text-white";
      case "destructive":
        return "bg-red-500 text-white";
      case "secondary":
        return "bg-gray-300 text-black";
      default:
        return "";
    }
  }
}
