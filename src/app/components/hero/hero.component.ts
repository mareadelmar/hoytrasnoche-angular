import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/audios.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private heroData: DataService) {}

  ngOnInit(): void {
    this.heroData.getData().subscribe((data: any) => {
      console.log('hero:', data.hero);
    });
  }
}
