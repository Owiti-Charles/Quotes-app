import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quote[]=[
    new Quote (1,'Charles','Human spirit','The human spirit must prevail over technology.','Albert Einstein'),
    new Quote (2,'Wendy','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch'),
    new Quote (3,'Charles','The great myth','The great myth of our times is that technology is communication.','Libby Larsen'),
    new Quote (4,'Charles','Communications tools','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky'),
    new Quote (5,'Charles','Programs and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson'),
    new Quote (6,'Charles','Technology and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn'),
  ];
  // displayInfo(index){
  //   this.quotes[index].showInfo = !this.quotes[index].showInfo;
  // }
  toggle(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
