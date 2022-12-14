import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput = '';

  images = [
  ]

  constructor(
    private router: Router,
    private apiservice: ApiServiceService
  ) { }

  ngOnInit() {
    if (this.apiservice.urlData().length != 0) {
      this.images = this.apiservice.urlData();
      
    }
  }

  searchClicked(): void {
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
  }

  getData() {
   console.log("Image URL: ", this.apiservice.urlData());
  }
  
  goHome(): void {
    this.router.navigate(['/']);
  }

}
