import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AiService } from '../ai/ai.service';
import { Task } from './entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly aiService: AiService,
  ) {}

  @Post('generate')
  async generateTasks(@Body('prompt') prompt: string) {
    const suggestedTasks = await this.aiService.generateTasksFromPrompt(prompt);

    const savedTasks: Task[] = [];

    for (const t of suggestedTasks) {
      const newTask = await this.tasksService.create(t.title);
      savedTasks.push(newTask);
    }

    return savedTasks;
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('isCompleted') isCompleted: boolean) {
    return this.tasksService.update(+id, isCompleted);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
