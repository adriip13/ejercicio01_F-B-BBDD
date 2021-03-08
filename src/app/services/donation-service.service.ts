import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Donation } from '../models/donation';


@Injectable()
export class DonationService {
  public url: String;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:4000/api/';
  }

  getDonations() {
    return this._http.get(this.url + 'donations');
  }
  deleteDonation(id: String) {

    return this._http.delete(this.url + 'donation/' + id);
  }



  addDonation(donation: Donation) {
    const json = JSON.stringify(donation);
    const params = json;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'donation', params, { headers: headers });

  }


}

