import { Body, Controller, Post } from '@nestjs/common';
import { WebClinetService } from './web-clinet.service';

@Controller('web-clinet')
export class WebClinetController {
    constructor(private readonly websocketClientService:WebClinetService
        
    ) {}

@Post('send-message')
sendMessage(@Body('message') message: string) {
  this.websocketClientService.sendMessage(message);
  return { status: 'Message sent to WebSocket server', message };
}
}
