import { Component, OnInit } from '@angular/core';
import data  from '../../data/data.json';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent{

    albums: [];
    img: any[];
    title: any[];
    author: any[];
    
    constructor() { 
      this.albums = data;
      let image = this.albums.map(({img}) => img);
      this.img = image;
      let titles = this.albums.map ( ({name}) => name );
      this.title = titles;
      let authors = this.albums.map ( ({author}) => author );
      this.author = authors;
    };
};
