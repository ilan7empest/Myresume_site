import { Component, OnInit } from '@angular/core';
import { PlainGalleryConfig, PlainGalleryStrategy, LineLayout, Image } from '@ks89/angular-modal-gallery';
import { leumiImages, leumijsImages } from '../../shared/leumi';
import { TemplateSelectorService } from '../../services/template-selector.service';


@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {

  ispro: boolean;
  imageIndex = 1;
  isPlaying = true;
  leumiImages: Image[];
  leumijsImages: Image[];

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '100%', height: '100%' }, { length: 1, wrap: true }, 'flex-start')
  };
  

  getleumiImages(): Image[] {
    return leumiImages;
    
  }
  getleumiJSImages(): Image[] {
    return leumijsImages;

  }
  constructor(private data: TemplateSelectorService) { }

  ngOnInit(): void {
    this.data.isPro.subscribe(ispro => this.ispro = ispro);
    this.leumiImages = this.getleumiImages();
    this.leumijsImages = this.getleumiJSImages();
  }

}
