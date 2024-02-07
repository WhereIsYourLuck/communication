interface Event {
  id: number;
  title: string;
  description?: string;
  location?: string;
  beginning: string;
  end: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export default Event;
