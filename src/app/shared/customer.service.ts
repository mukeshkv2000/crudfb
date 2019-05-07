import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  form = new FormGroup({
    $key : new FormControl(null),
    fullName: new FormControl('', Validators.required),
    mobile: new FormControl('' , [Validators.required , Validators.minLength(8)]),
    email: new FormControl('', Validators.email),
    location: new FormControl(''),

  });
}
