import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

import { Server } from "socket.io";

@WebSocketGateway({
    cors:{origin:['http://localhost:3000']}
})
export class MyGeteWay implements OnModuleInit{
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id);
            console.log('connected to Geteway');
        });
    }

    @WebSocketServer()
    server:Server

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body:any){
        console.log(body);
        this.server.emit('onMessage',{
            msg:'New Messsage',
            content:body
        });

    }   
   
}