import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/audios.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private cardsData: DataService) {}

  ngOnInit(): void {
    this.cardsData.getData().subscribe((data) => {
      console.log('cards:', data);
      data.cards.content.map((item: any) => console.log(item));
    });
  }
}
