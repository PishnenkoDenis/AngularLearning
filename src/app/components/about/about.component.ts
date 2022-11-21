import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  $users: Subject<any> = new Subject<any>();

  userSub!: Subscription;

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchService.fetchUsers()
    .subscribe(
      (users) => {
        this.$users.next(users);
      }
    )
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
