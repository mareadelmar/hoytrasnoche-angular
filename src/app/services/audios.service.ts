import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudiosService {
  constructor() {}

  getAudios() {
    console.log('SERVICE RUNNING: getting audio');
  }
}
