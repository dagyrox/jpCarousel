import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-cmp',
  templateUrl: './test-cmp.component.html',
  styleUrls: ['./test-cmp.component.css']
})
export class TestCmpComponent implements OnInit {
  @Input() title: string;
  @Input() num: number;

  constructor() { }

  ngOnInit() {
  }

}
