import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {

  fromcity = ""
  tocity = ""
  dod = ""
  combinedStr = ""
  flightResults : any[] = [];
  showCustomerPage = false;
  selectedFlight : any;
  showCustomerComponent = false;
  showFlightResults = false;

  flightDetails: any[] = [
    {"transitcode":"CHNCHI2023-09-11","fromcity":"CHN","tocity":"CHI","departure_date":"11-09-2023","airline":"Indigo","price":"1000"},
    {"transitcode":"DELSIN2023-09-10","fromcity":"DEL","tocity":"SIN","departure_date":"10-09-2023","airline":"SpiceJet","price":"500"},
    {"transitcode":"DELLON2023-09-05","fromcity":"DEL","tocity":"LON","departure_date":"05-09-2023","airline":"Indigo","price":"2000"},
    {"transitcode":"DELLON2023-09-05","fromcity":"DEL","tocity":"LON","departure_date":"05-09-2023","airline":"SpiceJet","price":"1750"},
    {"transitcode":"MUMMAL2023-09-07","fromcity":"MUM","tocity":"MAL","departure_date":"07-09-2023","airline":"AirIndia","price":"800"},
    {"transitcode":"KOLLON2023-09-10","fromcity":"KOL","tocity":"LON","departure_date":"10-09-2023","airline":"Indigo","price":"1723"},
    {"transitcode":"MUMLON2023-09-11","fromcity":"MUM","tocity":"LON","departure_date":"11-09-2023","airline":"SpiceJet","price":"2134"},
  ];

  getSelctedFlight(selectedOption : any) {
    console.log(selectedOption)
    this.selectedFlight = selectedOption;
    this.showCustomerComponent = true;
  }
  onSearchFlights(fromCity:string,toCity:string,dod:string) {
    let i = 0;
    this.combinedStr  = fromCity + toCity + dod
    console.log(this.combinedStr)
    let results = this.flightDetails.filter(res => res.transitcode === this.combinedStr);
    this.showFlightResults = true;
    if(results!=null|| results!=undefined) {
      i++;
      this.showCustomerPage = true
      for (i=0;i<results.length;i++) {
        this.flightResults.push(results[i])
      }
     
    }
  }

}
