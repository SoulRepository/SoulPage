import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 public image = [];

  constructor(private http: HttpClient) { }

  //Getting the data from the response.

  getData(userData: string): any {

    if (userData) {
        //API connection
    const api_url = "https://polygon-mumbai.g.alchemy.com/v2/EF55leyYdCIW2lwTc0jE7OBtrIOIZhK4/getNFTs/?owner=" + userData;

    // Returning the response.
    return this.http.get(api_url, {
      observe: 'body'
    })
      .pipe(
        map((response) => {
          //Converting Object into array.
          let responseArray = [];

          Object.keys(response).map(function (key) {
            responseArray.push({ [key]: response[key] })
          })
          //console.log(responseArray);

          // Getting the image URL from the response Array.

          let imageUrl = [];

          for (let key = 0; key < responseArray[0].ownedNfts.length; key++) {
            // Verifying the Ape Contract.
            if (responseArray[0].ownedNfts[key].contract.address == "0x0ec8fc88510a30f3119b9ce9c15a1ce26b91039a") {
              imageUrl.push(responseArray[0].ownedNfts[key].tokenUri.gateway);
            }
          }

          console.log(imageUrl)
          return imageUrl;

        }),
        retry(3)

      );
      
    }
  

  }

  // Debugging the outcome.
  reciveData(link) {
    this.image = link;
    this.urlData();
    console.log(this.image);
  }

  urlData() {
    return this.image;
  }
}
