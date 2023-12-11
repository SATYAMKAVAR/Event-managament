import { Component } from '@angular/core';
import { ApiClientEventsService } from '../api-client-events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-event-details',
  templateUrl: './client-event-details.component.html',
  styleUrl: './client-event-details.component.css',
})
export class ClientEventDetailsComponent {
  constructor(
    private _api: ApiClientEventsService,
    private _activatedRoute: ActivatedRoute
  ) {}
  event = {
    id: '',
    title: '',
    description: '',
    date: '',
    typeOfEvent: '',
    maxMembers: 0,
    imageURL: '',
  };
  id: number = 0;
  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];

    this._api.getById(this.id).subscribe((res: any) => {
      this.event = res;
      console.log(this.event);
    });
  }
}
