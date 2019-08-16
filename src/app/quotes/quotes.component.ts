import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes :Quote[]=[
    {id:1,name:'Charles',title:'Human spirit',quote:'The human spirit must prevail over technology.',author:'Albert Einstein'},
    {id:2,name:'Wendy',title:'Technology…',quote:'Technology… the knack of so arranging the world that we don’t have to experience it.',author:'Max Frisch'},
    {id:3,name:'Charles',title:'The great myth',quote:'The great myth of our times is that technology is communication.',author:'Libby Larsen'},
    {id:3,name:'Charles',title:'Communications tools',quote:'Communications tools don’t get socially interesting until they get technologically boring.',author:'Clay Shirky'},
    {id:3,name:'Charles',title:'Programs and people',quote:'Programs must be written for people to read, and only incidentally for machines to execute.',author:'Harold Abelson'},
    {id:3,name:'Charles',title:'Technology and life',quote:'For a list of all the ways technology has failed to improve the quality of life, please press three.',author:'Alice Kahn'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
