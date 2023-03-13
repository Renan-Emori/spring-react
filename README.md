## spring-react
##api 
-backend: spring-boot
+ spring 3.0.4
+ java 17
+ sql-server
 
-front: react 
+  boostrap 
+  node.js

## Configurando o projeto

1) git clone https://github.com/Renan-Emori/spring-react

2) Importe o projeto/pasta "produtos" em sua IDE

3) Altere o usuario, senha e servidor para que o projeto possa acessar o banco sql-server. 
  * Vá até `/src/main/resources/application.properties`;
  * Altere as propriedades informado o usuário e senha do seu banco de dados: 
    - spring.datasource.username=usuario
    - spring.datasource.password=usuario
    
4) Acesse a pasta do projeto pela linha de comando: `cd {{seuWorkspace}}/produtos
5) Inicie a aplicação

## Configurando o projeto -- 

1) git clone https://github.com/Renan-Emori/spring-react
2) Em uma nova janela, importe o projeto/pasta "front" em sua IDE
3) Acesse a pasta do projeto pela linha de comando: 'cd {{seuWorkspace}}/react/front'
4) Inicie a aplicação 'npm start'
*o projeto "produtos" deve, necessariamente, estar rodando
