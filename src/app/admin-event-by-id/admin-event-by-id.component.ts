import { Component } from '@angular/core';
import { ApiEventService } from '../api-event.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

class event {
  _id: string = '';
  title: String = '';
  description: String = '';
  date: String = '';
  typeOfEvent: String = '';
  maxMembers: Number = 0;
  imageURL: String = '';
}
@Component({
  selector: 'app-admin-event-by-id',
  templateUrl: './admin-event-by-id.component.html',
  styleUrl: './admin-event-by-id.component.css',
})
export class AdminEventByIdComponent {
  constructor(
    private _api: ApiEventService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  id = '';
  event:event = new event();

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    console.log(this.id)
    this._api.getById(this.id).subscribe((res: any) => {
      this.event = res;
      console.log(res)
      console.log(event)
    });
  }

  DeleteEvent() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.delete(this.id).subscribe((res: any) => {
      if (res.success) {
        this._router.navigate(['/admin']);
      } else {
        console.log('Error');
      }
    });
  }
}
