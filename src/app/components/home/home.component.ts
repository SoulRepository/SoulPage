import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public walletConnected: boolean = false;
  public walletId: string = '';

  searchInput = '';
  constructor(
    private router: Router,
    private apiservice: ApiServiceService,
    private walletservice: WalletService
  ) { }

  ngOnInit(): void {
    this.checkWalletConnected();
  }

  async searchClicked(userInput: string) {

    if (userInput) {
      let outocomeUrl$ = await this.apiservice.getData(userInput);

      let link: [] = await lastValueFrom(outocomeUrl$);

       this.apiservice.reciveData(link);
  
      this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
      
    }
   
   
  }

  connectToWallet = () => {
    this.walletservice.connectWallet();
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletservice.checkWalletConnected();
    if (accounts.length > 0) {
      this.walletConnected = true;
      this.walletId = accounts[0];
      console.log(this.walletId);
    }
  }

}
