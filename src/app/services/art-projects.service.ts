import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ArtProjectsService {

  

  constructor(private httpClient: HttpClient) {

    

    
   }

 
   key = "fAu_du_3z--NEk8Gtg5gAH7ZHbCT1WGyk3sge0OvY9o";
   page = 1;
   per_page = 21;
   getImage() {
     return this.httpClient.get(
       `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.key}`
     );
   }

}


