import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AiService } from './ai/ai.service';
import { Task } from './tasks/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // O arquivo será criado na raiz do projeto
      entities: [Task],
      synchronize: true, // Cria as tabelas automaticamente (use apenas em dev)
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AiService],
})
export class AppModule {}
