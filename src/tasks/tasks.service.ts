import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(title: string) {
    const task = this.taskRepository.create({ title });
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find({ order: { createdAt: 'DESC' } });
  }

  update(id: number, isCompleted: boolean) {
    return this.taskRepository.update(id, { isCompleted });
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
