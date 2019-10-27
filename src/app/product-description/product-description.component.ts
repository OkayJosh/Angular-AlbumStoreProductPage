import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  constructor(private _poductService: ProductService) { }

  ngOnInit() {
    this._poductService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
