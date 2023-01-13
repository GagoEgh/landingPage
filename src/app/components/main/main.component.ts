import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  navigation=[
    {
      img:'assets/imges/main/time.png',
      text:'Time Tracking with Screenshots',
      router:'time'
    },
    {
      img:'assets/imges/main/monitoring.png',
      text:'Productivity Monitoring',
      router:'monitoring'
    },
    {
      img:'assets/imges/main/task.png',
      text:'Task Management',
      router:'task'
    },
    {
      img:'assets/imges/main/channels.png',
      text:'Communication Channels',
      router:'channels'
    },
    {
      img:'assets/imges/main/hr.png',
      text:'HR Tools',
      router:'hr'
    },
    {
      img:'assets/imges/main/online.png',
      text:'Online Reports',
      router:'online'
    }
  ]

  ngOnInit(): void {
  }

}
