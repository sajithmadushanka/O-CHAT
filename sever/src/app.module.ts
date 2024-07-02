import { Module } from '@nestjs/common';
import { GeteWayModule } from './geteway/geteway.module';

@Module({
  imports: [GeteWayModule, ],
})
export class AppModule {}
