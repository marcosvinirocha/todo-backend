import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { AiService } from 'src/ai/ai.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), ConfigModule],
  controllers: [TasksController],
  providers: [TasksService, AiService],
  exports: [TasksService],
})
export class TasksModule {}
