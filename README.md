# Estudo Remix ®️

Estudo sobre o [framework Remix](https://remix.run/)
Link do deploy: TODO

&nbsp;

# 🔎 Sumário

- [✅ Componentes](#-componentes)
  - [🔁 Outlet](#-componente-outlet-)
- [✅ Funções](#-funções)
  - [🎯 Principal](#-função-principal)
  - [🔀 links](#-função-links)
  - [🎬 action](#-função-action)
  - [🌐 loader](#-função-loader)
  - [🐛 ErrorBoundary](#-função-errorboundary)

&nbsp;

## ✅ Componentes

Elementos do Remix para serem usados em formato de tags HTML / componentes React.

&nbsp;

##### 🔁 Componente \<Outlet />

Componente que será substituído pelo código da página, ou seja, o código retornado pela [Função Principal](#-função-principal).

Exemplo em: [demo.tsx](./app/root.tsx)

&nbsp;

## ✅ Funções

Trechos de código que devem seguir a nomenclatura proposta pelo Remix. **Algumas funções são escritas em _camelCase_ e outras em _PascalCase_.**

&nbsp;

##### 🎯 Função Principal

O nome `Principal` será usado como exemplo de um nome de um componente:

```tsx
export default function Principal() {
  return <p>Hello, World!</p>;
}
```

Essa função é executada sempre que uma requisição do tipo GET é requisitada para a rota. Seu conteúdo de retorno será renderizado na tela.

Exemplo em: [demo.tsx](./app/routes/demo.tsx)

&nbsp;

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

Exemplo em: [NoteList/index.tsx](./app/components/NoteList/index.tsx)

&nbsp;

##### 🎬 Função action

Função executada sempre que uma requisição diferente de `GET` é executada na rota. Pode user usada, por exemplo, quando há uma submissão de formulário na página.

O código dessa função é executado do lado do servidor e seu código fonte não é sequer enviado para o cliente.

Exemplo em: [notes.tsx](./app/routes/notes.tsx)

&nbsp;

##### 🌐 Função loader

Função executada sempre que uma requisição do tipo `GET` é executada na rota. Usada para carregar dados que serão usados na renderização.

Seu retorno é acessado na [Função Principal](#-função-principal) do componente usando o hook `useLoaderData()`.

Exemplo em: [notes.tsx](./app/routes/notes.tsx)

&nbsp;

##### 🐛 Função ErrorBoundary

Função que representa o componente que será renderizado no lugar da [Função Principal](#-função-principal) quando um erro for lançado em qualquer lugar da aplicação.

Pode ser usado no [root.tsx](./app/root.tsx) do projeto ou em um componente de rota. Se for usado no root, substituirá todo o conteúdo da página. Se for usado em um componente, substituirá somente o conteúdo retornado por esse componente mas manterá o conteúdo presente no root, com exceção do [\<Outlet />](#-componente-outlet-).

Exemplo em: [notes.tsx](./app/routes/notes.tsx) e [root.tsx](./app/root.tsx)
