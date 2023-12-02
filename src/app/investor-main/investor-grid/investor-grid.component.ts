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
  constructor(private http: HttpClient, private investorSerive: investorService) { }

  ngOnInit(): void {
    this.investorSerive.getAll().pipe(first()).subscribe(investors => {
      this.loading = false;
      this.investorApiResponse = investors;
      this.investorlist = this.investorApiResponse.data;
      this.listPageData = this.investorApiResponse.meta;
    });
  }

  setMyPagination(ev: any) {
    this.loading = true;
    let pageSelected = ev.first / ev.rows;
    let data = {
      page: pageSelected + 1,
      size: ev.rows
    }
    this.investorSerive.getFilteredList(data).pipe(first()).subscribe(investors => {
      this.loading = false;
      this.investorApiResponse = investors;
      this.investorlist = this.investorApiResponse.data;
      this.listPageData = this.investorApiResponse.meta;
    });
  }


}
