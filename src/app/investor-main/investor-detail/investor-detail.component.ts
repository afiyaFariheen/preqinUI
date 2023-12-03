import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { investorService } from '../../../services/invertor.service';
import { first } from 'rxjs';
import * as assestsjson from '../assests.json';

@Component({
  selector: 'app-investor-detail',
  templateUrl: './investor-detail.component.html',
  styleUrls: ['./investor-detail.component.scss']
})
export class InvestorDetailComponent {
  firmId: any;
  commitments: any = (assestsjson as any).default;
  assetClasses = [
    { item_id: 'Private Equity', item_text: 'PE' },
    { item_id: 'Private Debt', item_text: 'PD' },
    { item_id: 'Real Estate', item_text: 'RE' },
    { item_id: 'Infrastructure', item_text: 'INF' },
    { item_id: 'Natural Resources', item_text: 'NR' }
  ];
  //dropdownSettings: IDropdownSettings = {};
  selectedItems = [];
  investors: any;
  

  constructor(private route: ActivatedRoute, private investorSerive: investorService) {
    this.route.queryParams.subscribe(params => {
      this.firmId = params['id'];
    });
  }

  ngOnInit(): void {
    

    let data = {
      firmId: this.firmId
    }
    this.investorSerive.getFilteredList(data).pipe(first()).subscribe(investor => {
      this.investors = investor.data
    });
  }

 

  selectionChange(item: any) {
item.commitments = this.commitments;

    //api is throwing not found
    // this.investorSerive.getCommitment(item.selectedAsset + '/' + item.firmID).pipe(first()).subscribe(investor => {
    //   item.commitment = investor.data
    // });
    
  }

  onSelectAll(items: any) {
    console.log(items);
  }





}
