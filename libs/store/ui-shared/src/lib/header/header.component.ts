import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bg-hoard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';


  constructor() { }

  ngOnInit(): void {
  }

}
