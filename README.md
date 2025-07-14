##Pré-Requisitos

Docker e Docker Compose instalados.

Inicie os containers com docker-compose up.

Rodar npm install no dir /backend

Back-end disponível em http://localhost:3000/.

Banco de dados 'Mysql' disponível em http://localhost:3306.

##ROUTES

POST - /users - 201 (Created), 409 (Duplicated).

JSON :

{
  "nome": "",
  "idade": ,
  "email": ""
}

GET - /users  - 201 (OK).

POST /user-settings - 201 (Created), (404 Not Found), (400 Bad Request).

##VALIDAÇÕES

Idade: deve ser ≥ 18

Email: deve ser válido e único.

Tema: deve ser "dark", "medium" ou "light".

Notificacões Por Email: booleano (true ou false).





