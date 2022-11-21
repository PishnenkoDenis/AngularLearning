import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {

  users : any;
  userSub!: Subscription;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
   this.userSub = this.routes.data.subscribe(
    (response) =>{
      this.users = response['users'];
    }
   )
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
