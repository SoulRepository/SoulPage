import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchInput = '';

  images = [
     'https://nft-cdn.alchemy.com/eth-mainnet/9e6439d69430b67ea34e4e6e5dbe32ad',
    'https://nft-cdn.alchemy.com/eth-mainnet/afe87b1a6cff4e4ac16eed964f1cd472',
    'https://ipfs.io/ipfs/bafybeiaufszok2yv7ecqoua3v2f42tfwxia6wgyymwlhh5bulvtftsnosy/13919.png',
    'https://ipfs.io/ipfs/bafybeiaufszok2yv7ecqoua3v2f42tfwxia6wgyymwlhh5bulvtftsnosy/13920.png',
    'https://nft-cdn.alchemy.com/eth-mainnet/85d0ea5228cc7db43c0e712ff4a77aa3',
    'https://ipfs.io/ipfs/bafybeiaufszok2yv7ecqoua3v2f42tfwxia6wgyymwlhh5bulvtftsnosy/13922.png',
    'https://ipfs.io/ipfs/bafybeiaufszok2yv7ecqoua3v2f42tfwxia6wgyymwlhh5bulvtftsnosy/13923.png',
    'https://ipfs.io/ipfs/bafybeiaufszok2yv7ecqoua3v2f42tfwxia6wgyymwlhh5bulvtftsnosy/13924.png',
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchClicked(): void {
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
  }
  
  goHome(): void {
    this.router.navigate(['/']);
  }

}
