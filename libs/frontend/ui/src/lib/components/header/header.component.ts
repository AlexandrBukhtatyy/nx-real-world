import {Component, Input, OnInit} from '@angular/core';

export interface HeaderItem {
  text: string;
  href?: string;
  children?: HeaderItem[];
}

@Component({
  selector: 'rwa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() items: HeaderItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
