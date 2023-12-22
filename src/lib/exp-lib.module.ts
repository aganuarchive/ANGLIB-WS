import { NgModule } from '@angular/core';
import { ExpLibComponent } from './exp-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProcessFormSubmitComponent } from './components/process-form-submit/process-form-submit.component';



@NgModule({
  declarations: [
    ExpLibComponent,
    ProcessFormSubmitComponent
  ],
  imports: [BrowserModule
  ],
  exports: [
    ExpLibComponent,
    ProcessFormSubmitComponent
  ]
})
export class ExpLibModule { }
