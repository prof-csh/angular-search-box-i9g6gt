import { Component , OnInit } from '@angular/core';

export class course {
  id: number;
  name: string;
}  

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})



export class AppComponent implements OnInit  {

  searchText : string;
  course : any;
  ngOnInit(){
    this.course = [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'JAVASCRIPT' },
      { id: 4, name: 'ANGULAR' },
      { id: 5, name: 'REACT' },
      { id: 6, name: 'NODEJS' },
      { id: 7, name: 'PHP' },
      { id: 8, name: 'MYSQL' }
    ]
  }

   /*Search() {
    this.course = this.course.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase)
    })
  }*/


  
}
