export interface CalendarEvent {
  id: number;
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}
