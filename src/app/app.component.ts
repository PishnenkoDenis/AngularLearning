import { Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DynamicComponent } from './components/dynamic/dynamic.component';
import { IData } from './models/idata';
import { BetterLoggerService } from './services/better-loger.service';
import { FetchService } from './services/fetch.service';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{provide: LoggerService, useClass: BetterLoggerService}]
})
export class AppComponent implements OnDestroy{
  title = 'AngularDynamicLoadingComponent';

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


