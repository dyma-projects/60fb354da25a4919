import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  template: `<br />
    <p *ngIf="statusP1">p1</p>
    <p *ngIf="statusP2">p2</p>
    <br />
    <button (click)="change('test')">button</button> `,
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  public statusP1 = true;
  public statusP2 = false;

  public change(test) {
    this.statusP1 = !this.statusP1;
    this.statusP2 = !this.statusP2;
  }
  constructor() {}

  ngOnInit(): void {}
}
