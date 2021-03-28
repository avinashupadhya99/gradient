import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-item',
  templateUrl: './leaderboard-item.component.html',
  styleUrls: ['./leaderboard-item.component.scss']
})
export class LeaderboardItemComponent implements OnInit {
  @Input() imagePath: string;
  @Input() number: number;
  constructor() { }

  ngOnInit(): void {
  }

}
