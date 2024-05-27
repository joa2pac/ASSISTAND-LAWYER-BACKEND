import { Module } from '@nestjs/common';
import { LawyerAssistantService } from './lawyer-assistant.service';
import { LawyerAssistantController } from './lawyer-assistant.controller';

@Module({
  controllers: [LawyerAssistantController],
  providers: [LawyerAssistantService],
})
export class LawyerAssistantModule {}
