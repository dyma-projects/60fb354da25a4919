import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public type = "date";
  public test = "je suis une interpolation de variable";
  public color = "red";

  public change(color: string): void {
    this.color = color;
  }

  constructor() {}

  ngOnInit(): void {}
}
