import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'play-audio',
  styleUrls: ['./play-audio.component.scss'],
  templateUrl: './play-audio.component.html'
})

export class PlayAudioComponent implements OnInit {
  constructor(){

  }

  ngOnInit(){

  }


  onChange(event: any) {
    console.log('object', event)
  }
}