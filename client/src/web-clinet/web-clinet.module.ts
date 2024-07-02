import { Module } from '@nestjs/common';
import { WebClinetService } from './web-clinet.service';
import { WebClinetController } from './web-clinet.controller';

@Module({
  providers: [WebClinetService],
  controllers: [WebClinetController]
})
export class WebClinetModule {}
