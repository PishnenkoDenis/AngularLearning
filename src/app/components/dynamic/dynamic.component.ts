import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.loggerService.log('Dynamic Component Loaded');
  }

}
