import { Component, HostListener } from '@angular/core';
import { ICyberMonday } from './models/cyber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cyberMondays: ICyberMonday[] = [
    {
      name: 'Montly',
      sum: 2.49,
      beforeSum: 4.99,
      month: 'per user/month',
      discount: '50%',
      detalis: ['14-day Free Trial', 'Access to All Features', '24/7 Support']
    },
    {
      name: 'Yearly',
      sum: 2.05,
      beforeSum: 4.09,
      month: 'per user/month',
      discount: '18% + 50%',
      detalis: ['14-day Free Trial', 'Access to All Features', '24/7 Support']
    },

  ];

  @HostListener('window:resize', ['$event'])
  maxWidth() {
    const innerWidth = window.innerWidth-200;
    return innerWidth + 'px'
  }
}
