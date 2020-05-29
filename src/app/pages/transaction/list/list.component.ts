import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './../../../common/services/app-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl,FormBuilder,Validators  } from '@angular/forms';
import { constants} from './../../../common/constants'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public itemsPerPage:number=constants.limit;
  page: String = "1";
  search: String = "";
  sortKey: String = "createdAt";
  sortBy: Number = 1;
  isLoading = false;
  total: number = 0


public transactions:any=[]
  constructor(private fb: FormBuilder,private apiService: AppServiceService,private toastr: ToastrService,
    private modalService: BsModalService,
    public spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.getTrans()
  }
  getTrans = () => {
    this.spinner.show();
    this.isLoading = true;
    const query = {
      filterBy: [1, 2, 3],
      sortBy: this.sortBy,
      sortKey: this.sortKey,
      searchKey: this.search,
      page: this.page,
      limit: constants.limit
    }
    this.apiService.getQuery('/transaction', query).subscribe((response: any) => {
      if (response.statusCode === 200) {
        this.transactions = response.data.data;
        this.total = response.data.total;
        this.isLoading = false;
      }
      this.spinner.hide()
    },(err)=>{
      this.spinner.hide()
    });
  }

}


