import { Component } from '@angular/core';

@Component({
  selector: 'rwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-site';
  items = [
    { text: 'catalog', href: '/catalog'},
    { text: 'info', href: '/info'},
    { text: 'contacts', href: '/contacts'},
    { text: 'link 4', children: [
      { text: 'link 4.1', href: '/link-4.1'},
      { text: 'link 4.2', href: '/link-4.2'},
      { text: 'link 4.3', href: '/link-4.3'},
    ]},
  ]
}
