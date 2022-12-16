import { Component, OnInit } from '@angular/core';
import { CoreService } from "../core/core.service";
// Service
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(public core: CoreService) {}

  ngOnInit() {
  }

}
