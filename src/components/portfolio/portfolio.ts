

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  img: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})

export class Portfolio {
  enterImg = false;
  selectedPic = '';

  items: PortfolioItem[] = [
    { img: "/poert1.png" },
    { img: "/port2.png" },
    { img: "/port3.png" },
    { img: "/poert1.png"},
    { img: "/port2.png" },
    { img: "/port3.png" }
  ];

  imgClicked(item: PortfolioItem) {
    this.enterImg = true;
    this.selectedPic = item.img;
  }

  imgOut() {
    this.enterImg = false;
  }
}
