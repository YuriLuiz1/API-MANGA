# 📚 API MANGA

API RESTful desenvolvida para gerenciamento de mangás, construída com Node.js, Express, Prisma ORM e MariaDB.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **Prisma ORM** - Modelagem e queries do banco de dados
- **MariaDB** - Sistema de gerenciamento de banco de dados
- **JavaScript** - Linguagem de programação

## 📋 Funcionalidades

- Cadastro, listagem, atualização e remoção de mangás
- Validação de dados
- Tratamento de erros
- Queries otimizadas com Prisma

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [MariaDB](https://mariadb.org/) ou MySQL
- npm ou yarn

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/YuriLuiz1/API-MANGA.git
cd API-MANGA
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

### 4. Execute as migrations do Prisma
```bash
npx prisma migrate dev
```

### 5. Inicie o servidor
```bash
npm start
# ou para desenvolvimento com auto-reload
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 📡 Endpoints da API

### Mangás

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/mangas` | Lista todos os mangás |
| GET | `/mangas/:id` | Busca mangá por ID |
| POST | `/mangas` | Cadastra novo mangá |
| PUT | `/mangas/:id` | Atualiza mangá existente |
| DELETE | `/mangas/:id` | Remove mangá |

### Exemplo de requisição POST

```json
{
  "titulo": "One Piece",
  "autor": "Eiichiro Oda",
  "genero": "Aventura",
  "capitulos": 1100,
  "status": "Em andamento"
}
```

## 🗂️ Estrutura do Projeto

```
API-MANGA/
├── prisma/
│   └── schema.prisma    # Schema do banco de dados
├── src/
│   ├── controllers/     # Lógica de controle
│   ├── routes/          # Definição das rotas
│   └── server.js        # Configuração do servidor
├── .env                 # Variáveis de ambiente
└── package.json
```

## 🧪 Testando a API

Você pode testar usando:

- **Postman** ou **Insomnia** para requisições HTTP
- **cURL** via terminal:

```bash
# Listar todos os mangás
curl http://localhost:3000/mangas

# Criar novo mangá
curl -X POST http://localhost:3000/mangas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Naruto","autor":"Masashi Kishimoto","genero":"Ação","capitulos":700,"status":"Finalizado"}'
```

## 🎯 Melhorias Futuras

- [ ] Implementar autenticação JWT
- [ ] Adicionar paginação nas listagens
- [ ] Criar sistema de avaliações
- [ ] Implementar busca por filtros
- [ ] Adicionar testes automatizados
- [ ] Deploy em produção (Railway/Render)

## 📝 Aprendizados

Este projeto foi desenvolvido para praticar:
- Construção de APIs RESTful
- Integração com banco de dados usando ORM
- Boas práticas de estruturação de código
- Tratamento de erros e validações

## 👤 Autor

**Yuri Luiz**

- GitHub: [@YuriLuiz1](https://github.com/YuriLuiz1)
- LinkedIn: [Adicione seu LinkedIn aqui]

## 📄 Licença

Este projeto está sob a licença MIT.

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
