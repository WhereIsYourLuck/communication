import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$: WebSocketSubject<any>; // WebSocket subject

  constructor() {
    // Replace 'ws://localhost:8080/socket' with your actual WebSocket server URL
    this.socket$ = webSocket('ws://localhost:8080/socket');
  }

  // Connect to the WebSocket server
  public connect(): void {
    this.socket$.subscribe(
      (message) => {
        // Handle incoming messages from the server
        console.log('Received message:', message);
      },
      (error) => {
        console.error('WebSocket error:', error);
      },
    );
  }

  // Send a message to the server
  public sendMessage(msg: any): void {
    this.socket$.next(msg);
  }

  // Close the WebSocket connection
  public close(): void {
    this.socket$.complete();
  }

  // Get an observable to listen for incoming messages
  public getMessages(): Subject<any> {
    return this.socket$;
  }
}
