import { Controller, Post, Body } from '@nestjs/common';
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
}
