import { Component, OnInit } from '@angular/core';

interface Color {
  name: string;
  textColor: string;
}


@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
  colors: Color[]= [
    {name: "blue", textColor: "white"},
    {name: "red", textColor: "white"},
    {name: "pink", textColor: "black"},
    {name: "black", textColor: "white"},
    {name: "orange", textColor: "white"},
    {name: "green", textColor: "white"},
    {name: "brown", textColor: "white"},
    {name: "cyan", textColor: "black"},
    {name: "violet", textColor: "white"},
    {name: "yellow", textColor: "black"},
    {name: "tomato", textColor: "white"},
    {name: "purple", textColor: "white"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
