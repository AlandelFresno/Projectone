import { Component, HostListener, OnInit } from '@angular/core';
import data from  '../../data/data.json';


@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})

export class AlbumlistComponent implements OnInit{

  albums: [];
  img: any[];
  title: any[];
  author: any[];
  innerWidth: any;

  constructor() { 
    this.albums = data;
    let result = this.albums.map(({img}) => img);
    this.img = result;
    let titles = this.albums.map ( ({name}) => name );
    this.title = titles;
    let authors = this.albums.map ( ({author}) => author );
    this.author = authors;
  };
  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  };
  
  @HostListener('window:resize', ['$event'])
  onResize(){
    this.innerWidth = window.innerWidth
    console.log(this.innerWidth);
  };
};
