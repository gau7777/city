import { Component, OnInit } from '@angular/core';
import { Drop1Component } from 'src/app/drop1/drop1.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   record = [
    {
      "id": 1,
      "first_name": "Flossy",
      "last_name": "Weadick",
      "email": "fweadick0@latimes.com",
      "gender": "Female",
      "city": "Listvyanskiy"
    },
    {
      "id": 2,
      "first_name": "Kristos",
      "last_name": "Bilovus",
      "email": "kbilovus1@netvibes.com",
      "gender": "Male",
      "city": "Puerto Esperanza"
    },
    {
      "id": 3,
      "first_name": "Renaud",
      "last_name": "Cherrington",
      "email": "rcherrington2@scientificamerican.com",
      "gender": "Male",
      "city": "Pangai"
    },
    {
      "id": 4,
      "first_name": "Giacobo",
      "last_name": "Evreux",
      "email": "gevreux3@fotki.com",
      "gender": "Male",
      "city": "Makale"
    },
    {
      "id": 5,
      "first_name": "Donal",
      "last_name": "Cornuau",
      "email": "dcornuau4@about.me",
      "gender": "Male",
      "city": "Opatówek"
    },
    {
      "id": 6,
      "first_name": "Matthus",
      "last_name": "Brisset",
      "email": "mbrisset5@biglobe.ne.jp",
      "gender": "Male",
      "city": "Weitang"
    },
    {
      "id": 7,
      "first_name": "Sarena",
      "last_name": "Barrowcliffe",
      "email": "sbarrowcliffe6@nifty.com",
      "gender": "Female",
      "city": "Třešť"
    },
    {
      "id": 8,
      "first_name": "Floris",
      "last_name": "Mourton",
      "email": "fmourton7@moonfruit.com",
      "gender": "Female",
      "city": "Santa Lucía"
    },
    {
      "id": 9,
      "first_name": "Leyla",
      "last_name": "Edmead",
      "email": "ledmead8@homestead.com",
      "gender": "Female",
      "city": "Kutloanong"
    },
    {
      "id": 10,
      "first_name": "Finlay",
      "last_name": "Gonning",
      "email": "fgonning9@ucoz.ru",
      "gender": "Male",
      "city": "Lewin Kłodzki"
    },
    {
      "id": 11,
      "first_name": "Brook",
      "last_name": "Duchan",
      "email": "bduchana@parallels.com",
      "gender": "Female",
      "city": "Lewin Kłodzki"
    },
    {
      "id": 12,
      "first_name": "Beauregard",
      "last_name": "Cyster",
      "email": "bcysterb@salon.com",
      "gender": "Male",
      "city": "Kutloanong"
    },
    {
      "id": 13,
      "first_name": "Olivie",
      "last_name": "Ballam",
      "email": "oballamc@tinyurl.com",
      "gender": "Female",
      "city": "Santa Lucía"
    },
    {
      "id": 14,
      "first_name": "Corny",
      "last_name": "Ecclestone",
      "email": "cecclestoned@clickbank.net",
      "gender": "Male",
      "city": "Třešť"
    },
    {
      "id": 15,
      "first_name": "Berke",
      "last_name": "Rhead",
      "email": "brheade@vimeo.com",
      "gender": "Male",
      "city": "Weitang"
    },
    {
      "id": 16,
      "first_name": "Rafaelia",
      "last_name": "Duddan",
      "email": "rduddanf@so-net.ne.jp",
      "gender": "Female",
      "city": "Opatówek"
    },
    {
      "id": 17,
      "first_name": "Caro",
      "last_name": "Stonehewer",
      "email": "cstonehewerg@issuu.com",
      "gender": "Female",
      "city": "Makale"
    },
    {
      "id": 18,
      "first_name": "Else",
      "last_name": "Riccione",
      "email": "ericcioneh@virginia.edu",
      "gender": "Female",
      "city": "Pangai"
    },
    {
      "id": 19,
      "first_name": "Min",
      "last_name": "Kingsmill",
      "email": "mkingsmilli@ycombinator.com",
      "gender": "Female",
      "city": "Puerto Esperanza"
    },
    {
      "id": 20,
      "first_name": "Alexandra",
      "last_name": "Hamal",
      "email": "ahamalj@dyndns.org",
      "gender": "Female",
      "city": "Listvyanskiy"
    }
  ];
  table_data = [];
  hel = Drop1Component.prototype.selcity;
  constructor() {
    
   }

  ngOnInit() {
    this.table_data = this.record;
  }

  // Update(){
  //   this.table_data = this.record.filter((element)=>{
  //     if((this.hel === undefined || element.city === this.hel))
  //   })
  // }

}
