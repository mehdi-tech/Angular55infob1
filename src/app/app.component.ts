import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myFirstProjects';
  first: number = 0;
  tab: Array<string> = ['Angular', 'React', 'Node'];
  constructor() { }
  ngOnInit() {
    this.first = this.first + 1;
    console.log(this.first);
    for (let i in this.tab) {
      if (this.tab[i] === 'Node'){console.log('Nodepour le Backend'); }
      else if (this.tab[i] === 'React'){console.log('React pour le front'); }
      else {(console.log('Angular pour le front')); }
    }
}}
