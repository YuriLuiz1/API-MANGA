# 📚 API de Mangás

API RESTful para gerenciamento de mangás construída com Node.js, Express, Prisma e MariaDB.

## 🚀 Tecnologias

- Node.js
- Express
- Prisma ORM
- MariaDB
- JavaScript

## 📦 Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrations
npx prisma migrate dev

# Inicie o servidor
npm start
```

## 📚 Endpoints

### Mangás
- `GET /localhost/mangas` - Lista todos os mangás
- `GET /localhost/mangas/:id` - Busca um mangá por ID
- `POST /localhost/mangas` - Cria um novo mangá
- `PUT /localhost/mangas/:id` - Atualiza um mangá
- `DELETE /localhost/mangas/:id` - Deleta um mangá

## 🔧 Exemplo de uso
```json
POST /localhost/mangas
{
  "titulo": "One Piece",
  "autor": "Eiichiro Oda",
  "preco": 250
}
```

## 👨‍💻 Autor

Yuri Luiz da Silva - [LinkedIn](https://www.linkedin.com/in/yuri-luiz) - [GitHub](https://github.com/YuriLuiz1)

## 📄 Licença

MIT
```

---
