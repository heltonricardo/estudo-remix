# Estudo Remix ®️

Estudo sobre o [Framework Remix](https://remix.run/)

<br />

### Projetos deste repositório

- [x] 📝 [My Notes](https://github.com/heltonricardo/estudo-remix/tree/main/my-notes) - [Acessar deploy](https://my-notes-tau.vercel.app/)
- [ ] 📝 [My Expenses](https://github.com/heltonricardo/estudo-remix/tree/main/my-expenses) - TODO

<br />

# 🔎 Sumário

- [✅ Componentes](#-componentes)
  - [🔁 Outlet](#-componente-outlet-)
- [✅ Funções](#-funções)
  - [🎯 Principal](#-função-principal)
  - [🔀 links](#-função-links)
  - [🌐 loader](#-função-loader)
  - [🎬 action](#-função-action)
  - [💡 meta](#-função-meta)
  - [🧤 CatchBoundary](#-função-catchboundary)
  - [🐛 ErrorBoundary](#-função-errorboundary)
- [✅ Roteamento](#-roteamento)
  - [🔡 Sub-Rotas](#-sub-rotas)
  - [💲 Rotas Dinâmicas](#-rotas-dinâmicas)

<br />

## ✅ Componentes

Elementos do Remix para serem usados em formato de tags HTML / componentes React.

<br />

##### 🔁 Componente \<Outlet />

Componente que será substituído pelo código da página, ou seja, o código retornado pela [Função Principal](#-função-principal).

[Ver exemplo](./my-notes/app/root.tsx)

<br />

## ✅ Funções

Trechos de código que devem seguir a nomenclatura proposta pelo Remix. **Algumas funções são escritas em _camelCase_ e outras em _PascalCase_.**

<br />

##### 🎯 Função Principal

O nome `Principal` será usado como exemplo de um nome de um componente:

```tsx
export default function Principal() {
  return <p>Hello, World!</p>;
}
```

Essa função é executada sempre que uma requisição do tipo GET é requisitada para a rota. Seu conteúdo de retorno será renderizado na tela.

[Ver exemplo](./my-notes/app/routes/demo.tsx)

<br />

##### 🔀 Função links

Função que retorna itens para serem adicionados na tag links do HTML gerado:

```html
<html>
  <head>
    <!-- Exemplo 1: -->
    <link />
    <!-- Exemplo 2: -->
    <link />
  </head>
</html>
```

Muito usado para adicionar estilos via arquivo.css quando não usa-se framework CSS que dispensa arquivo segregado para estilos, como [Tailwind](https://tailwindcss.com/) e [Bootstrap](https://getbootstrap.com/).

[Ver exemplo](./my-notes/app/components/NoteList/index.tsx)

<br />

##### 🌐 Função loader

Função executada sempre que uma requisição do tipo `GET` é executada na rota. Usada para carregar dados que serão usados na renderização.

Seu retorno é acessado na [Função Principal](#-função-principal) do componente usando o hook `useLoaderData()`. Nesse caso, a [Função CatchBoundary](#-função-catchboundary) pode ser usada para capturar erros e lidar com exceções durante a busca de dados.

[Ver exemplo](./my-notes/app/routes/notes.tsx)

<br />

##### 🎬 Função action

Função executada sempre que uma requisição diferente de `GET` é executada na rota. Pode ser usada para buscar dados necessários em resposta a uma ação do usuário, como enviar um formulário.

O código dessa função é executado do lado do servidor e seu código fonte não é sequer enviado para o cliente. Nesse caso, a [Função CatchBoundary](#-função-catchboundary) pode ser usada para capturar erros e lidar com exceções durante a busca de dados.

[Ver exemplo](./my-notes/app/routes/notes.tsx)

<br />

##### 💡 Função meta

Função usada para adicionar metadados nas páginas da aplicação. Ela deve retornar um objeto do JavaScript com os membros desejados:

```tsx
export function meta({ data }) {
  return {
    title: data.tituloDaPagina,
    description: data.descDaPagina,
  };
}
```

O metadado de cada página é mesclado, e sobrescrito, quando se aplica, com o conteúdo da super-rota (rota pai).

Note que ela pode receber um parâmetro que será enviado automaticamente em sua chamada pelo Remix. Ela é executada depois da [Função loader](#-função-loader), então todos os dados necessários para ela já foram carregados.

[Ver exemplo](./my-notes/app/routes/notes.%24noteId.tsx)

<br />

##### 🧤 Função CatchBoundary

Função que representa o componente que será renderizado no lugar da [Função Principal](#-função-principal) quando houver um erro do tipo **JavaScript Response** em qualquer lugar da aplicação. É usada para capturar erros relacionados à renderização, mas não se limita a isso. Ela pode capturar erros que ocorrem durante a execução da [Função loader](#-função-loader) ou durante a renderização do componente, independentemente do motivo do erro:

```ts
// Usando Response, suportada pelo Node.js e navegadores:
throw new Response();

// Usando a função de response do remix importada de "@remix-run/node":
throw json();
```

Pode ser usada no [root.tsx](./my-notes/app/root.tsx) do projeto ou em um componente de rota. Se for usada no root, substituirá toda a página. Se for usada em um componente, substituirá somente o conteúdo retornado por esse componente mas manterá o trecho presente no root, com exceção do conteúdo do [Componente \<Outlet />](#-componente-outlet-).

[Ver exemplo](./my-notes/app/routes/notes.tsx)

<br />

##### 🐛 Função ErrorBoundary

Função que representa o componente que será renderizado no lugar da [Função Principal](#-função-principal) quando um erro tipo **Error do JavaScript** for lançado. É usada especificamente para capturar erros em componentes filhos e exibi-los de forma amigável para o usuário final:

```ts
// Lançando erro sem construir um objeto:
throw "Errôneo";

// Lançando erro construindo um objeto simples:
throw Error("E-Romeu");

// Lançando erro construindo um objeto complexo:
throw new Error("Herrar é umano");
```

Pode ser usada no [root.tsx](./my-notes/app/root.tsx) do projeto ou em um componente de rota. Se for usada no root, substituirá toda a página. Se for usada em um componente, substituirá somente o conteúdo retornado por esse componente mas manterá o trecho presente no root, com exceção do conteúdo do [Componente \<Outlet />](#-componente-outlet-).

[Ver exemplo](./my-notes/app/routes/notes.tsx)

<br />

## ✅ Roteamento

Caminhos que definem como a aplicação web responderá às solicitações dos usuários.

<br />

##### 🔡 Sub-Rotas

A hierarquia de sub-rotas pode ser definida de duas maneiras:

- Usando diretórios:
  ```
  routes
  ├── auth
  │   ├── login.tsx
  │   └── logout.tsx
  └── dashboard
      ├── aulas
      │   └── $idAula.tsx
      └── notas.tsx
  ```
- Usando o símbolo de ponto final (`.`):

  ```
  routes
  ├── auth.login.tsx
  ├── auth.logout.tsx
  ├── dashboard.aulas.$idAula.tsx
  └── dashboard.notas.tsx
  ```

  > O ponto que separa a extensão do arquivo não é convertido em sub-rota.

  Ambos as maneiras acima geram as páginas:

  - `/auth/login`
  - `/auth/logout`
  - `/dashboard/aulas/<id-aula>`
  - `/dashboard/notas`

<br />

##### 💲 Rotas Dinâmicas

As rotas dinâmicas podem ser criadas usando o símbolo `$` ao nomear um arquivo. A palavra que segue o símbolo, será usada como _placeholder_ no nome da rota.

```tsx
/* Arquivo ~/routes/animais.$nomeDoAnimal.tsx */

// Importações omitidas

export default function PaginaDetalhesDoAnimal() {
  const animal = useLoaderData();

  return (
    <main>
      <header>
        <h1>{animal.nome}</h1>
      </header>
      <p>{animal.detalhes}</p>
    </main>
  );
}

export async function loader({ params }: ActionArgs) {
  const nomeDoAnimal = params.nomeDoAnimal;
  const animal = await obterAnimalPorNome(nomeDoAnimal);
  return animal;
}
```

Note que o nome do arquivo é `animais.$nomeDoAnimal.tsx`, ou seja, a rota para esta página será `/animais/cachorro` ou `/animais/coelho`, como visto nas [Sub-Rotas](#-sub-rotas).

[Ver exemplo](./my-notes/app/routes/notes.%24noteId.tsx)
