import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss']
})
export class ColorItemComponent implements OnInit {
  @Input() color;
  constructor() { }

  ngOnInit(): void {
  }

}
