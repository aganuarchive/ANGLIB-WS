import { Component, OnInit, ChangeDetectorRef, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'lib-process-form-submit',
  templateUrl: './process-form-submit.component.html',
  styleUrls: ['./process-form-submit.component.css']
})
export class ProcessFormSubmitComponent implements OnInit, AfterViewChecked {

  @Input() result:any ;
  errmsgs:any ;
  statusmsg:any ;
  dataready:boolean=false ;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    if (typeof (this.result) != 'undefined') {
      console.log("After View Checked resultstr (lib) = " + this) ;
    this.errmsgs = this.result.resultstr[0].Result[1].msg ;
    this.statusmsg = this.result.resultstr[0].Result[0].status ;

        console.log("errmsgs (lib) = " + this.errmsgs) ;
        this.dataready=true ;
    }
    this.cd.detectChanges() ;
  }

}
