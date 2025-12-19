# Backend do Sistema de Tarefas (Todo App)

Este é um sistema backend desenvolvido em Node.js com o framework NestJS para gerenciamento de tarefas (to-do list). Ele inclui funcionalidades de cadastro, listagem, atualização e exclusão de tarefas, além de integração com inteligência artificial para geração automática de tarefas baseadas em prompts.

## 🚀 Recursos

- Cadastro de tarefas
- Listagem de tarefas
- Atualização de status das tarefas
- Exclusão de tarefas
- Integração com IA para geração de tarefas
- Banco de dados SQLite embutido
- Configuração através de variáveis de ambiente

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js progressivo
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript com tipagem estática
- [TypeORM](https://typeorm.io/) - ORM para manipulação do banco de dados
- [SQLite](https://www.sqlite.org/index.html) - Banco de dados relacional leve
- [OpenRouter](https://openrouter.ai/) - Plataforma para integração com modelos de IA

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em seu sistema:

- [Node.js](https://nodejs.org/) (versão 16.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório (se aplicável)

Se você estiver clonando este projeto de um repositório remoto:

```bash
git clone <URL_DO_REPOSITORIO>
cd todo-backend
```

### 2. Instale as dependências

Execute o comando abaixo para instalar todas as dependências necessárias:

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (veja o exemplo em `.env.example`):

```env
OPEN_ROUTER_API_KEY=sua_chave_da_api_openrouter
```

Para obter sua chave da API do OpenRouter:

1. Acesse [https://openrouter.ai/](https://openrouter.ai/)
2. Crie uma conta ou faça login
3. Vá até a seção de API Keys
4. Copie sua chave de API e substitua `sua_chave_da_api_openrouter` no arquivo `.env`

### 4. Compilação (opcional, mas recomendado para produção)

Para compilar o projeto TypeScript em JavaScript:

```bash
npm run build
```

## ▶️ Execução do Projeto

### Modo de Desenvolvimento

Para executar o projeto em modo de desenvolvimento (com recarregamento automático ao fazer alterações):

```bash
npm run start:dev
```

### Modo de Produção

Para executar o projeto em modo de produção (após compilação):

```bash
npm run start:prod
```

### Modo de Depuração

Para executar o projeto em modo de depuração (com suporte ao debug do Node.js):

```bash
npm run start:debug
```

### Execução Simples

Para executar o projeto em modo padrão (sem recarregamento automático):

```bash
npm run start
```

## 🧪 Testes

O projeto inclui testes automatizados. Para executá-los:

### Testes Unitários

```bash
npm run test
```

### Testes Unitários em Modo Watch

```bash
npm run test:watch
```

### Cobertura de Testes

```bash
npm run test:cov
```

### Testes End-to-End (E2E)

```bash
npm run test:e2e
```

### Testes End-to-End em Modo Debug

```bash
npm run test:debug
```

## 📁 Estrutura de Pastas

```
todo-backend/
├── src/
│   ├── app.module.ts          # Módulo principal da aplicação
│   ├── app.controller.ts      # Controlador principal
│   ├── app.service.ts         # Serviço principal
│   ├── main.ts                # Arquivo de inicialização
│   ├── ai/
│   │   └── ai.service.ts      # Serviço de integração com IA
│   └── tasks/
│       ├── tasks.module.ts    # Módulo de tarefas
│       ├── tasks.controller.ts # Controlador de tarefas
│       ├── tasks.service.ts   # Serviço de tarefas
│       └── entities/
│           └── task.entity.ts # Entidade de tarefa
├── test/                      # Testes E2E
├── .env.example               # Exemplo de arquivo .env
├── .gitignore
├── nest-cli.json              # Configurações do CLI do NestJS
├── package.json
├── tsconfig.json              # Configurações do TypeScript
└── README.md
```

## 🔧 Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run build` - Compila o projeto TypeScript para JavaScript
- `npm run format` - Formata os arquivos TypeScript usando Prettier
- `npm run start` - Inicia a aplicação em modo padrão
- `npm run start:dev` - Inicia a aplicação em modo desenvolvimento (watch mode)
- `npm run start:debug` - Inicia a aplicação em modo debug
- `npm run start:prod` - Inicia a aplicação em modo produção
- `npm run lint` - Executa o ESLint para corrigir problemas de código
- `npm run test` - Executa os testes unitários
- `npm run test:watch` - Executa os testes unitários em modo watch
- `npm run test:cov` - Executa os testes e mostra a cobertura
- `npm run test:debug` - Executa os testes em modo debug
- `npm run test:e2e` - Executa os testes end-to-end

## 🗄️ Banco de Dados

O projeto utiliza SQLite como banco de dados, que é armazenado em um arquivo chamado `database.sqlite` na raiz do projeto. A configuração do banco de dados está localizada no arquivo `src/app.module.ts`.

> ⚠️ **Atenção**: A opção `synchronize: true` está ativada para fins de desenvolvimento, o que significa que o TypeORM irá automaticamente criar/atualizar as tabelas do banco de dados conforme as entidades forem modificadas. Em ambiente de produção, esta opção deve ser desativada.

## 🤖 Integração com Inteligência Artificial

O sistema permite a geração de tarefas automaticamente através de prompts de texto. A integração é feita com o OpenRouter, que fornece acesso a diversos modelos de linguagem de IA.

Para usar essa funcionalidade:

1. Certifique-se de ter configurado a variável `OPEN_ROUTER_API_KEY`
2. Faça uma requisição POST para o endpoint correspondente passando um prompt descritivo

## 🚀 Deploy

Quando você estiver pronto para implantar sua aplicação NestJS em produção, existem algumas etapas importantes que pode seguir para garantir que ela seja executada da forma mais eficiente possível.

### Deploy em Produção

1. Compile o projeto:

   ```bash
   npm run build
   ```

2. Execute em modo produção:
   ```bash
   npm run start:prod
   ```

### Deploy na Nuvem

Se você estiver procurando por uma plataforma baseada em nuvem para implantar sua aplicação NestJS, confira o [Mau](https://mau.nestjs.com), nossa plataforma oficial para implantação de aplicações NestJS na AWS. O Mau torna a implantação simples e rápida, exigindo apenas alguns passos simples:

```bash
npm install -g @nestjs/mau
mau deploy
```

Com o Mau, você pode implantar sua aplicação em questão de segundos, permitindo que você se concentre em desenvolver recursos em vez de gerenciar infraestrutura.

## 📚 Recursos Adicionais

Confira alguns recursos que podem ser úteis ao trabalhar com NestJS:

- Visite a [Documentação do NestJS](https://docs.nestjs.com) para aprender mais sobre o framework.
- Para dúvidas e suporte, visite nosso [canal do Discord](https://discord.gg/G7Qnnhy).
- Para mergulhar mais fundo e obter mais experiência prática, confira nossos cursos oficiais em vídeo em [courses.nestjs.com](https://courses.nestjs.com/).
- Implantar sua aplicação na AWS com ajuda do [NestJS Mau](https://mau.nestjs.com) em apenas alguns cliques.
- Visualize o gráfico da sua aplicação e interaja com a aplicação NestJS em tempo real usando [NestJS Devtools](https://devtools.nestjs.com).
- Precisa de ajuda com seu projeto (meio período a tempo integral)? Confira nosso suporte oficial [enterprise support](https://enterprise.nestjs.com).
- Para ficar por dentro e receber atualizações, siga-nos no [X (Twitter)](https://x.com/nestframework) e [LinkedIn](https://linkedin.com/company/nestjs).
- Procurando por um emprego, ou tem uma vaga para oferecer? Confira nosso [quadro de empregos oficial](https://jobs.nestjs.com).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

Desenvolvido por Marcos Vinicius
