import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as header from '../investor.json';
import { investorService } from '../../../services/invertor.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-investor-grid',
  templateUrl: './investor-grid.component.html',
  styleUrls: ['./investor-grid.component.scss']
})

export class InvestorGridComponent {
  headers: any = (header as any).default;
  investorApiResponse: any;
  investorlist = [];
  listPageData: any;
  totalRecords = 0;
  loading: boolean = true;
  searchFirmName:string='';
  constructor(private http: HttpClient, private investorSerive: investorService) { }

  ngOnInit(): void {
   this.getAllInvestorApi();
  }

  setMyPagination(ev: any) {
    this.loading = true;
    let pageSelected = ev.first / ev.rows;
    let pageInfo = {
      page: pageSelected + 1,
      size: ev.rows
    }
   this.getfilteredListApiCall(pageInfo);
  }

  getAllInvestorApi(){
    this.loading = true;
    this.investorSerive.getAll().pipe(first()).subscribe(investors => {
      this.loadGridData(investors);
    });
  }

  getfilteredListApiCall(filter:any){
    this.investorSerive.getFilteredList(filter).pipe(first()).subscribe(investors => {
      this.loadGridData(investors);
     });
  }

  loadGridData(response:any){
    this.loading = false;
    this.investorApiResponse = response;
    this.investorlist = this.investorApiResponse.data;
    this.listPageData = this.investorApiResponse.meta;
  }

  onfirmSearch(){
    this.loading = true;
    if(this.searchFirmName){
      let serach ={
        firmName : this.searchFirmName
      }
      this.getfilteredListApiCall(serach);
    }
  }

}
