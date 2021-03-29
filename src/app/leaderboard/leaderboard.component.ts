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

const canvas1 = createCanvas(1200, 600)
const context1 = canvas1.getContext('2d');
const randomGradient1: RandomGradientInterface = RandomGradient();
const gradient1 = context1.createLinearGradient(0, 0, randomGradient1.x2, randomGradient1.y2);
gradient1.addColorStop(0, `rgb(${randomGradient1.r1},${randomGradient1.g1},${randomGradient1.b1})`);
gradient1.addColorStop(1, `rgb(${randomGradient1.r2},${randomGradient1.g2},${randomGradient1.b2})`);
context1.fillStyle = gradient1;
context1.fillRect(0, 0, 1200, 600);
const image1 = canvas1.toDataURL("image/png");

const canvas2 = createCanvas(1200, 600)
const context2 = canvas2.getContext('2d');
const randomGradient2: RandomGradientInterface = RandomGradient();
const gradient2 = context2.createLinearGradient(0, 0, randomGradient2.x2, randomGradient2.y2);
gradient2.addColorStop(0, `rgb(${randomGradient2.r1},${randomGradient2.g1},${randomGradient2.b1})`);
gradient2.addColorStop(1, `rgb(${randomGradient2.r2},${randomGradient2.g2},${randomGradient2.b2})`);
context2.fillStyle = gradient2;
context2.fillRect(0, 0, 1200, 600);
const image2 = canvas2.toDataURL("image/png");

const canvas3 = createCanvas(1200, 600)
const context3 = canvas3.getContext('2d');
const randomGradient3: RandomGradientInterface = RandomGradient();
const gradient3 = context3.createLinearGradient(0, 0, randomGradient3.x2, randomGradient3.y2);
gradient3.addColorStop(0, `rgb(${randomGradient3.r1},${randomGradient3.g1},${randomGradient3.b1})`);
gradient3.addColorStop(1, `rgb(${randomGradient3.r2},${randomGradient3.g2},${randomGradient3.b2})`);
context3.fillStyle = gradient3;
context3.fillRect(0, 0, 1200, 600);
const image3 = canvas3.toDataURL("image/png");

const canvas4 = createCanvas(1200, 600)
const context4 = canvas4.getContext('2d');
const randomGradient4: RandomGradientInterface = RandomGradient();
const gradient4 = context4.createLinearGradient(0, 0, randomGradient4.x2, randomGradient4.y2);
gradient4.addColorStop(0, `rgb(${randomGradient4.r1},${randomGradient4.g1},${randomGradient4.b1})`);
gradient4.addColorStop(1, `rgb(${randomGradient4.r2},${randomGradient4.g2},${randomGradient4.b2})`);
context4.fillStyle = gradient4;
context4.fillRect(0, 0, 1200, 600);
const image4 = canvas4.toDataURL("image/png");

const canvas5 = createCanvas(1200, 600)
const context5 = canvas5.getContext('2d');
const randomGradient5: RandomGradientInterface = RandomGradient();
const gradient5 = context5.createLinearGradient(0, 0, randomGradient5.x2, randomGradient5.y2);
gradient5.addColorStop(0, `rgb(${randomGradient5.r1},${randomGradient5.g1},${randomGradient5.b1})`);
gradient5.addColorStop(1, `rgb(${randomGradient5.r2},${randomGradient5.g2},${randomGradient5.b2})`);
context5.fillStyle = gradient5;
context5.fillRect(0, 0, 1200, 600);
const image5 = canvas5.toDataURL("image/png");

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
