import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppServiceService } from './../../../common/services/app-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  public tarnsForm: FormGroup;
  public currentUser: any = {}
  public userDetail: any = {}
 
  constructor(private fb: FormBuilder, private apiService: AppServiceService, private toastr: ToastrService,
    public spinner: NgxSpinnerService,public route:Router ) {
  
  }
  ngOnInit() {
    this.tarnsForm = this.fb.group({
      transType: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      desc: ['']
    }); 
  
  }


  get f() { return this.tarnsForm.controls; }


  add(formData) {
    this.spinner.show();
    this.apiService.postData('/transaction/', formData, this.currentUser['loginToken']).subscribe((response: any) => {
      if(response['statusCode']===200){
        this.route.navigate(["/transaction/list"]);
      this.toastr.success(response['message']);
      }
      this.spinner.hide();
    }),
    (error)=>{
      this.spinner.hide();
  }

  }
}
