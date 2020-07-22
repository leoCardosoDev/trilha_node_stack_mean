import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppService } from './../services/app.service';

@Component({
  selector: 'app-postcreate',
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss']
})
export class PostcreateComponent {

  constructor(private appService: AppService, private formBuilder: FormBuilder) { }

  public form: FormGroup = this.formBuilder.group({
    title: ["", Validators.required],
    body: ["", Validators.required]
  })


  create(event){
    this.appService.save(this.form.value.title, this.form.value.body).subscribe(result => console.log(result))
  }

  get formCreate() {
    return this.form.controls;
  }

}
