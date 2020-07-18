import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      id:0,
      title: "Cover Page",
      url: "/home"
    },
    {
      id: 1,
      title: "Chapter 1 | The Beginning",
      url: "/chapter1",
    },
    {
      id: 2,
      title: "Chapter 2 | The Middle",
      url: "/chapter2"
    },
    {
      id: 3,
      title: "Chapter 3 | The Next Best Thing",
      url: "/chapter3"
    },
    {
      id:4,
      title: "Chapter 4 | Nearing the End",
      url: "/chapter4"
    },
    {
      id:5,
      title: "Chapter 5 | The End of the Book",
      url: "/chapter5"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
