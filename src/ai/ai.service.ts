import { Injectable } from '@nestjs/common';

interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

@Injectable()
export class AiService {
  private readonly OPENROUTER_URL =
    'https://openrouter.ai/api/v1/chat/completions';
  private readonly API_KEY =
    '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';

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
