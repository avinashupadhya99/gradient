import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  images = [
    "assets/images/gradient1.jpg",
    "assets/images/gradient1.jpg",
    "assets/images/gradient1.jpg",
    "assets/images/gradient1.jpg",
    "assets/images/gradient1.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
