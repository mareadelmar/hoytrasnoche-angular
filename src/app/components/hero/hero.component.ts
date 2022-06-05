import { Component, OnInit } from '@angular/core';
import { AudiosService } from 'src/app/services/audios.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private audioData: AudiosService) {}

  ngOnInit(): void {
    this.audioData.getAudios();
  }
}
