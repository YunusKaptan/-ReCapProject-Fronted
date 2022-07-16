import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }
  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    
  }  

}
