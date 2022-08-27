import { Component, OnInit, SecurityContext } from '@angular/core';
import  ytdata from './youtubeurls/ytdata.json';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface YoutubeData {  
  id: Number;  
  url: String;  
}

@Component({
  selector: 'app-yt-card',
  templateUrl: './yt-card.component.html',
  styleUrls: ['./yt-card.component.css']
})

export class YtCardComponent implements OnInit {

  youtubedatas: YoutubeData[] = ytdata;  
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() { 
    
  }

  gridColumns = 3;
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
