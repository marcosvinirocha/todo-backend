import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

@Injectable()
export class AiService {
  private readonly API_KEY: string;
  private readonly OPENROUTER_URL =
    'https://openrouter.ai/api/v1/chat/completions';
  constructor(private readonly configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('OPEN_ROUTER_API_KEY') ?? '';
  }

  async generateTasksFromPrompt(prompt: string): Promise<{ title: string }[]> {
    const response = await fetch(this.OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b:free',
        messages: [
          {
            role: 'system',
            content:
              'Você é um gerador de tarefas. Responda APENAS com um array JSON de títulos. Ex: [{"title": "Lavar louça"}]',
          },
          { role: 'user', content: prompt },
        ],
      }),
    });

    const data = (await response.json()) as OpenRouterResponse;
    const content = data.choices[0].message.content;

    const jsonStr = content.substring(
      content.indexOf('['),
      content.lastIndexOf(']') + 1,
    );

    return JSON.parse(jsonStr) as { title: string }[];
  }
}
