import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchInput = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchClicked(): void {
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
  }

}
