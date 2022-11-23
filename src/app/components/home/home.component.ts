
import { Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DynamicComponent } from '../dynamic/dynamic.component';
import { IData } from '../../models/idata';
import { BetterLoggerService } from '../../services/better-loger.service';
import { FetchService } from '../../services/fetch.service';
import { LoggerService } from '../../services/logger.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: LoggerService, useClass: BetterLoggerService}],
  animations: [
    trigger('animationTrigger', [
     transition(':enter', [
      style({opacity: 0}),
      animate('1.3s', style({opacity: 1}))
     ]),
     transition(':leave', [
      animate('1.3s', style({opacity: 0})),
     ])
    ])
  ]
})
export class HomeComponent implements OnDestroy {

  isComponentInjected: boolean = false;

  $data: Subject<IData[]> = new Subject<IData[]>() ;

  fetchSub!: Subscription;

  @ViewChild('dynamic', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicComponent>;

  constructor(public fetchService: FetchService,
              private LoggerService: LoggerService,
    ) {}

  ngOnDestroy(): void {
    this.fetchSub.unsubscribe();
  }

  showDynamicComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponent);
    this.fetchSub = this.fetchService.fetchData()
    .subscribe(
      (data) => {
        this.$data.next(data);
        this.LoggerService.log('Loaded')
      }  
      
    );
    this.isComponentInjected = true;
  }

  removeDynamicComponent() {
    this.viewRef.clear();
    this.isComponentInjected = false;
  }

}
