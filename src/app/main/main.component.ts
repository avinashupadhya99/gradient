import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath: string = "assets/images/gradient1.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
