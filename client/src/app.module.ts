import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebClinetModule } from './web-clinet/web-clinet.module';

@Module({
  imports: [WebClinetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
