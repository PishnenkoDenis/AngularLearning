import { Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { DynamicComponent } from './components/dynamic/dynamic.component';
import { IData } from './models/idata';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'AngularDynamicLoadingComponent';

  isComponentInjected: boolean = false;

  $data: Subject<IData[]> = new Subject<IData[]>() ;

  fetchSub!: Subscription;

  @ViewChild('dynamic', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicComponent>;

  constructor(public fetchService: FetchService) {}

  ngOnDestroy(): void {
    this.fetchSub.unsubscribe();
  }

  showDynamicComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicComponent);
    this.fetchSub = this.fetchService.fetchData()
    .subscribe(
      (data) => this.$data.next(data)
    );
    this.isComponentInjected = true;
    console.log(this.$data);
  }

  removeDynamicComponent() {
    this.viewRef.clear();
    this.isComponentInjected = false;
  }
}


