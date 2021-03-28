import { Component, OnInit } from '@angular/core';
import { createCanvas } from 'canvas';
import { RandomGradient } from '../RandomGradient';
import { RandomGradientInterface } from '../RandomGradientInterface';

const canvas = createCanvas(1200, 600)
const context = canvas.getContext('2d');
const randomGradient: RandomGradientInterface = RandomGradient();
const gradient = context.createLinearGradient(0, 0, randomGradient.x2, randomGradient.y2);
gradient.addColorStop(0, `rgb(${randomGradient.r1},${randomGradient.g1},${randomGradient.b1})`);
gradient.addColorStop(1, `rgb(${randomGradient.r2},${randomGradient.g2},${randomGradient.b2})`);
context.fillStyle = gradient;
context.fillRect(0, 0, 1200, 600);
const image = canvas.toDataURL("image/png");

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  imagePath = image;

  constructor() { }

  ngOnInit(): void {
  }

}
