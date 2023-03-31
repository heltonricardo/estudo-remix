# My Notes 📝

Aplicação simples para o armazenamento de anotações.

[🌟 Visualizar meu deploy na Vercel](https://my-notes-tau.vercel.app/)

<br />

## Sumário: como executar este projeto localmente

[I. Configurando a base de dados para o projeto](#i-configurando-a-base-de-dados-para-o-projeto)
[II. Instalando as dependências](#ii-instalando-as-dependências)
[III. Executando o projeto](#iii-executando-o-projeto)

<br />

### I. Configurando a base de dados para o projeto

1. Acesse: https://console.firebase.google.com/ (não precisa ativar Google Analytics);

2. Clique em `Adicionar projeto`;

3. Insira um nome para o projeto (exemplo: My Notes) e clique em `Continuar`;

4. Ative ou não o Google Analytics, conforme sua necessidade, e clique em `Criar projeto`;

5. Aguarde o carregamento e clique em `Continuar`;

6. Na tela **Comece adicionando o Firebase ao seu aplicativo**, clique no ícone de Web (`</>`);

7. Insira um apelido para o app (exemplo: Remix App), opte ou não pelo **Firebase hosting** e clique em `Registrar app`;

8. Anote as seguintes credenciais para serem usadas no _passo 10_: `apiKey`, `authDomain` e `projectId` e mantenha esta página aberta no navegador enquanto realiza os próximos passos;

9. Crie um arquivo `.env` na raiz do projeto (my-notes/.env) com o seguinte conteúdo:

```
FIREBASE_API_KEY=<Insira aqui o valor de apiKey>
FIREBASE_AUTH_DOMAIN=<Insira aqui o valor de authDomain>
FIREBASE_PROJECT_ID=<Insira aqui o valor de projectId>
```

10. Substitua com os valores correspondentes do _passo 8_, **sem aspas**. Exemplo:

```
FIREBASE_API_KEY=123456789abcdefgh
FIREBASE_AUTH_DOMAIN=nome-do-meu-app.firebaseapp.com
FIREBASE_PROJECT_ID=nome-do-meu-app
```

11. Na página aberta do navegador (_passo 8_), clique em `Continuar no console`;

12. Na página **Escolha um produto para adicionar ao app**, clique em `Cloud Firestore`;

13. Clique em `Criar banco de dados`;

14. Selecione o modo de produção e clique em `Avançar`;

15. Selecione um local, clique em `Ativar` e aguarde a ativação;

16. Na tela **Cloud Firestore**, clique em `Regras`;

17. Substitua a linha `allow read, write: if false;` por `allow read, write;` e clique em `Publicar`. O conteúdo ficará semelhante ao abaixo:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

### II. Instalando as dependências

1. Instale o [Node.js](https://nodejs.dev/en/download/);

2. Em um terminal de sua preferência, navegue até o diretório raiz do projeto, `./my-notes`, execute o seguinte comando e aguarde a finalização:

```
npm install
```

### III. Executando o projeto

1. Ainda no diretório raiz do projeto, execute o comando no terminal:

```
npm run dev
```

2. O Node.js criará um servidor local para acessar a aplicação. O endereço será informado no próprio terminal, **normalmente** é http://localhost:3000/, basta acessá-lo usando um navegador de sua preferência.
