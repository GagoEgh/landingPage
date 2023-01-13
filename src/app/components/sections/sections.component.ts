import { Component, Input, OnInit } from '@angular/core';
import { ICyberMonday } from 'src/app/models/cyber';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  @Input('cyberMonday')cyberMonday!:ICyberMonday
  constructor() { }

  ngOnInit(): void {}




}
