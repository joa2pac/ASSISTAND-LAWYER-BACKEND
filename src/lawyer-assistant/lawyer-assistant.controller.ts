/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { LawyerAssistantService } from './lawyer-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('lawyer-assistant')
export class LawyerAssistantController {
  constructor(
    private readonly lawyerAssistantService: LawyerAssistantService,
  ) {}

  @Post('create-thread')
  async createThread() {
    return await this.lawyerAssistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(@Body() questionDto: QuestionDto) {
    return await this.lawyerAssistantService.userQuestion(questionDto);
  }
}
