import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userFormGroup: FormGroup;
  profileData: User[] = [];
  userId: any
  constructor(private fb: FormBuilder) { 
    this.userFormGroup = this.fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }

  ngOnInit(): void {
  }

  

}
