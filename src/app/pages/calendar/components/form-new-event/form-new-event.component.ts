import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EventService } from '@core/services/event.service';

@Component({
  selector: 'app-form-new-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-new-event.component.html',
  styleUrl: './form-new-event.component.scss',
})
export class FormNewEventComponent {
  constructor(private eventService: EventService) {}
  onSubmit(form: NgForm) {
    this.eventService.createEvent(
      form.value.beginning,
      form.value.end,
      form.value.title,
      form.value.description,
    );
  }
}
