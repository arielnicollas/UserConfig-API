🚀 UserConfig API - API Backend 

Uma API RESTful construída em Node.js para gerenciamento de usuários e configurações personalizadas, utilizando MySQL como banco de dados.

✨ Tecnologias
Este projeto utiliza o seguinte stack:

Linguagem: Node.js
Framework/Runtime: Express 
Banco de Dados: MySQL
Containerização: Docker e Docker Compose💻 

Pré-Requisitos
Para executar este projeto localmente, você precisa ter as seguintes ferramentas instaladas:

Docker
Docker Compose
Node.js e npm

🛠️ Instalação e Execução

Siga os passos abaixo para iniciar a aplicação e o banco de dados.

1. Iniciar os Containers
Navegue até o diretório raiz do projeto e inicie os serviços definidos no docker-compose.yml:
Bash
docker-compose up -d

Nota: O flag -d executa os containers em background.

2. Instalar Dependências

Entre no diretório do backend (/backend) para instalar as dependências do Node.js:

Bash
cd backend
npm install

3. Acessos Locais
   
API Backend: http://localhost:3000
Banco de Dados MySQL: (Acessível apenas pelo container) - Porta: 3306

*Rotas da API (Endpoints)*

POST - /users - Cria um novo usuário no sistema. - 201 (Created), 409 (Duplicated Email), 400 (Bad Request)
GET - /users - Retorna a lista de todos os usuários registrados. - 200 (OK)

Payload (Corpo da Requisição) - POST /users
O corpo da requisição deve seguir o formato JSON abaixo:

JSON
{
  "nome": "string",
  "idade": "number",
  "email": "string"
}

*Configurações de Usuário*

POST - /user-settings - Cria as configurações personalizadas para um usuário existente. - 201 (Created), 404 (User Not Found), 400 (Bad Request)

*Validações de Dados*

Idade - Deve ser um número inteiro maior ou igual a 18 (≥ 18). - POST /users
Email - Deve ser um formato de email válido e único (não pode existir na base de dados). - POST /users
Tema - Deve ser uma das opções: "dark", "medium" ou "light". - POST /user-settings
Notificações Por Email - Deve ser um valor booleano (true ou false). - POST /user-settings

🤝 Como Contribuir
Passo 1: Faça um fork (cópia) deste repositório.
Passo 2: Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
Passo 3: Faça o commit das suas alterações (git commit -m 'feat: adiciona nova funcionalidade X').
Passo 4: Faça o push para a branch (git push origin feature/nome-da-feature).
Passo 5: Abra um Pull Request.



   


