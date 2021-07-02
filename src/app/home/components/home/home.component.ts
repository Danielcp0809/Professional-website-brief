import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  public innerWidth: number;
  public innerHeigth: number;
  public numberHexagonsColumn:number = 0;
  public hexagonsArrayColumn = [];
  public numberHexagonsRow:number = 0;
  public hexagonsArrayRow = [];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowsWidth()
  }

  constructor() { }

  ngOnInit(): void {
    this.initialNumberHexagonsColumn();
    this.initialNumberHexagonsRow();
  }

  public windowsWidth(){
    this.innerWidth = window.innerWidth;
    this.numberHexagonsColumn = parseInt((this.innerWidth/100).toFixed())+1;
  }

  public windowsHeigth(){
    this.innerHeigth = window.innerHeight;
    let home_container = document.getElementById("home_container");
    console.log(home_container.clientHeight)
    this.numberHexagonsRow = parseInt((home_container.clientHeight/110).toFixed())+3;
  }

  public initialNumberHexagonsColumn(){
    this.windowsWidth()
    for (let index = 0; index < this.numberHexagonsColumn; index++) {
      this.hexagonsArrayColumn.push(index)
    }
  }

  public initialNumberHexagonsRow(){
    // this.windowsHeigth()
    this.numberHexagonsRow = 20
    for (let index = 0; index < this.numberHexagonsRow; index++) {
      this.hexagonsArrayRow.push(index)
    }
  }

}
