import {Component, OnInit} from '@angular/core';
import {ImageapiService} from '../../services/imageapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gettyImageUri: string;
  gettyResult: any;
  gifyResult: any;
  gifyImageUri: string;

  constructor(private imageApi: ImageapiService) {}

  ngOnInit() {
    const randomIndex = Math.floor((Math.random() * 30));
    this.imageApi.getGettyImages().subscribe(
      data => {
        this.gettyResult = data;
        this.gettyImageUri = this.gettyResult.images[randomIndex].display_sizes[0].uri;
      }
    );

    this.imageApi.getGiffyImage().subscribe(
      data => {
        this.gifyResult = data;
        this.gifyImageUri = this.gifyResult.data.images.downsized.url;
        console.log(this.gifyImageUri);
      }
    );
  }

}

interface GifyResult {
  data: GifyData;
}

interface GifyData {
  embedUrl: string;
}

interface GettyResult {
  result_count: number;
  images: Image[];
}

interface Image {
  id: string;
  display_sizes: DisplaySize[];
}

interface DisplaySize {
  uri: string;
}

