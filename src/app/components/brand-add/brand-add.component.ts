import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }
  add(){
    
  }

}
