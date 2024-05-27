/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LawyerAssistantModule } from './lawyer-assistant/lawyer-assistant.module';

@Module({
  imports: [ConfigModule.forRoot(), LawyerAssistantModule],
})
export class AppModule {}
