import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
public recipe : Receipe[] = [
  new Receipe('A Test Recipe','This is simply a test',
  'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg'),
  new Receipe('A Test Recipe','This is simply a test',
  'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/firecracker-chicken-1.jpg')
]
  constructor() { }

  ngOnInit(): void {
  }

}
