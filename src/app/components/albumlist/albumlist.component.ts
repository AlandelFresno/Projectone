import { Component } from '@angular/core';
import data from  '../../data/data.json';


@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})

export class AlbumlistComponent{

  albums: [];
  
  test1: any[];

  constructor() { 

    this.albums = data;
    let result = this.albums.map(({img}) => img);
    
    this.test1 = result;
    



    
    console.log(this.albums);
    console.log(this.test1);
    console.log(result);
  };

};
