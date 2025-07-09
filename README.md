Para verificar o projeto funcionando Acesse o site: biblioteca-online-dnc.netlify.app

# 📚 API de Gerenciamento de Livros

Uma API RESTful desenvolvida em Node.js com TypeScript para gerenciamento de livros, construída com arquitetura modular e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Express.js** - Framework web para Node.js
- **Prisma** - ORM moderno para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📁 Estrutura do Projeto

```
src/
├── config/                 # Configurações da aplicação
├── generated/              # Arquivos gerados pelo Prisma
├── modules/               # Módulos da aplicação
│   └── books/            # Módulo de livros
│       ├── controllers/   # Controladores
│       ├── repositories/  # Repositórios
│       ├── routes/        # Rotas
│       ├── schemas/       # Schemas de validação
│       └── services/      # Serviços de negócio
└── shared/               # Código compartilhado
    ├── database/         # Configuração do banco
    ├── errors/           # Tratamento de erros
    ├── http/             # Configuração do servidor
    └── middlewares/      # Middlewares
```

## 🛠️ Pré-requisitos

- Node.js (versão 16 ou superior)
- PostgreSQL
- npm ou yarn

## ⚙️ Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/vitor-oliveiraf/RID195430_Desafio05.git
   cd RID195430_Desafio05
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto:

   ```env
   DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco"
   PORT=3333
   NODE_ENV=development
   ```

4. **Configure o banco de dados**

   ```bash
   # Gere o cliente Prisma
   npx prisma generate

   # Execute as migrações
   npx prisma migrate dev
   ```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm run build
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📖 Endpoints da API

### Livros

| Método   | Endpoint     | Descrição              |
| -------- | ------------ | ---------------------- |
| `POST`   | `/books`     | Criar um novo livro    |
| `GET`    | `/books`     | Listar todos os livros |
| `GET`    | `/books/:id` | Buscar livro por ID    |
| `PUT`    | `/books/:id` | Atualizar livro        |
| `DELETE` | `/books/:id` | Deletar livro          |

### Health Check

| Método | Endpoint  | Descrição               |
| ------ | --------- | ----------------------- |
| `GET`  | `/health` | Verificar status da API |

## 📝 Exemplos de Uso

### Criar um Livro

```bash
curl -X POST http://localhost:3333/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "O Senhor dos Anéis",
    "pageCount": 1216,
    "isbn": "9788533613379",
    "publisher": "Martins Fontes"
  }'
```

### Listar Livros

```bash
curl http://localhost:3333/books
```

### Buscar Livro por ID

```bash
curl http://localhost:3333/books/{id}
```

### Atualizar Livro

```bash
curl -X PUT http://localhost:3333/books/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "O Senhor dos Anéis - Edição Especial",
    "pageCount": 1216,
    "isbn": "9788533613379",
    "publisher": "Martins Fontes"
  }'
```

### Deletar Livro

```bash
curl -X DELETE http://localhost:3333/books/{id}
```

## 🗄️ Modelo de Dados

### Book

```typescript
{
  id: string(UUID);
  title: string;
  pageCount: number;
  isbn: string;
  publisher: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot-reload
- `npm run build` - Compila o projeto TypeScript
- `npm start` - Executa em modo produção
- `npm run postinstall` - Gera o cliente Prisma após instalação

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular com separação clara de responsabilidades:

- **Controllers**: Responsáveis por receber requisições e retornar respostas
- **Services**: Contêm a lógica de negócio
- **Repositories**: Gerenciam o acesso aos dados
- **Routes**: Definem os endpoints da API
- **Schemas**: Validam os dados de entrada
- **Middlewares**: Processam requisições e respostas

## 🛡️ Validação e Tratamento de Erros

- **Zod**: Validação de schemas para dados de entrada
- **AppError**: Classe personalizada para tratamento de erros
- **ErrorHandleMiddleware**: Middleware global para captura de erros

## 🔍 Debugging

O projeto está configurado com debugging habilitado. Para conectar com o Chrome DevTools:

1. Execute `npm run dev`
2. Abra o Chrome e acesse `chrome://inspect`
3. Clique em "Open dedicated DevTools for Node"

## 📦 Deploy

### Render

O projeto está configurado para deploy no Render com:

- Health check endpoint em `/health`
- Configuração automática de variáveis de ambiente
- Build automático com `npm run build`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Vitor Oliveira**

- GitHub: [@vitor-oliveiraf](https://github.com/vitor-oliveiraf)
