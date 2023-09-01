import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import  { jsPDF }  from "jspdf";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent  {
  @Input()
  selectedFlightDet : any;

  fperson:string="";
  sperson:string="";
  fchild:string="";
  aclass="";
  showConfirmationMsg=false
  showViewPage=false
  serviceCharge:number = 10
  insCharge:number =30
  total:number = 0
  currentDate = new Date()
  
  @ViewChild('content') content!: ElementRef;


  onSubmitCustomerDetails(firstperson:string,secperson:string,fchild:string,aclass:string) {
    this.fperson=firstperson
    this.sperson = secperson
    this.fchild = fchild
    this.aclass = aclass
    this.showConfirmationMsg = true;
    console.log(this.fperson)
  }

  viewTicketDetails() {
    this.showViewPage = true
    this.showConfirmationMsg = false
    this.total = this.serviceCharge + this.insCharge + Number(this.selectedFlightDet.price)
    console.log(this.selectedFlightDet.price)
  }
  downloadTicket() {
    let doc = new jsPDF("portrait", "pt", "a5");
    doc.setFontSize(10)
    doc.html(this.content.nativeElement,  {
      callback: (doc) => {
        doc.save("ticket.pdf");
      }
})
  }
  resetForm(){
    this.fperson=""
    this.sperson=""
    this.fchild=""
    this.aclass=""
  }
}
