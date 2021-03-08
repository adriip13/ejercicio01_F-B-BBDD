import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DonationService } from '../services/donation-service.service';
import { Donation } from '../models/donation';


@Component({
  selector: 'app-donation-add',
  templateUrl: './donation-add.component.html',
  styleUrls: ['./donation-add.component.css'],
  providers: [DonationService]
})
export class DonationAddComponent implements OnInit {

  public title: String;
  public errorMessage: String;
  public loading: boolean;
  public donation: Donation;

  constructor(private _donationService: DonationService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Crear nueva donación';

  }

  ngOnInit() {
    this.donation = new Donation('', '', '');
    console.log(this.donation);
  }
  public onSubmit() {
    console.log(this.donation);
    this._donationService.addDonation(this.donation).subscribe(
      response => {

        if (!response['donation']) {
          alert('Error en el servidor');
        } else {
          this.donation = response['donation'];
          this._router.navigate(['/donation', this.donation._id]);
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error en la petición');
        }
      }
    )
  }
}
