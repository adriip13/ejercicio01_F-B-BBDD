import { Component, OnInit } from '@angular/core';
import { Donation } from '../models/donation';
import { DonationService } from '../services/donation-service.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css'],
  providers: [DonationService]

})
export class DonationListComponent implements OnInit {

  public donations: Donation[];
  public title: String;
  public errorMessage: String;
  public loading: boolean;

  constructor(private _donationService: DonationService) {
    this.title = 'Listado de donaciones';
    this.loading = true;
  }

  ngOnInit() {
    this._donationService.getDonations()
    .subscribe(data => {
      console.log(data['data']);
  });

    this._donationService.getDonations().subscribe(
      result => {
        console.log('OK list:' + result);
        this.donations = result['data'];
        if (!this.donations) {
          alert('error en el servidor');
        }
        this.loading = false;
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la peticion');
        }
      }
    );

  }

  getDonations(){
    this._donationService.getDonations().subscribe(
      result => {
        this.donations = result['data'];
      },
      error => {
        alert("Error en la petición");
      }
    )
  }

  deleteDonation(id:String){
    this._donationService.deleteDonation(id).subscribe(
      result =>{
        this.getDonations();
      },
      error=>{
        alert('Error al intentar borrar la donación')
      }
    )
  }

}
