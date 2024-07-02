import { Injectable } from '@nestjs/common';
import { Socket , io} from 'socket.io-client';

@Injectable()
export class WebClinetService {
    private socket: Socket;

    onModuleInit() {
      this.connectToServer();
    }
  
    private connectToServer() {
      this.socket = io('http://localhost:3000'); // URL of the WebSocket server
  
      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server');
        this.socket.emit('newMessage', 'Hello from the client service!');
      });
  
      this.socket.on('onMessage', (message: any) => {
        console.log('Message from server:', message);
      });
  
      this.socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server');
      });
    }
  
    sendMessage(message: string) {
      this.socket.emit('newMessage', message);
    }
}
