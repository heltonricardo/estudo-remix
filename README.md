# Estudo Remix ®️

Estudo sobre o [framework Remix](https://remix.run/)
Link do deploy: TODO

&nbsp;

# 🔎 Sumário

- [Componentes](#✅-componentes)
  - [Outlet](#🔁-componente-outlet)
- [Funções](#✅-funções)
  - [Principal](#🎯-função-principal-exemplo-de-nome---leia-a-descrição)
  - [links](#🔀-função-links)
  - [action](#🎬-função-action)
  - [loader](#🌐-função-loader)
  - [ErrorBoundary](#🌐-função-errorboundary)

&nbsp;

### ✅ Componentes

&nbsp;

##### 🔁 Componente \<Outlet />

Componente que será substituído pelo código da página, ou seja, o código retornado pela função Principal.

Exemplo em: [demo.tsx](./app/root.tsx)

&nbsp;

### ✅ Funções

&nbsp;

##### 🎯 Função Principal (exemplo de nome - leia a descrição)

O nome `Principal` será usado como exemplo de um nome de um componente ou rota:

```tsx
export default function Principal() {
  return <p>Hello, World!</p>;
}
```

Essa função é executada sempre que uma requisição do tipo GET é requisitada para a rota. Seu conteúdo de retorno será renderizado na tela.

> Lembrando que é uma boa prática nomear a função principal do seu componente/página com o mesmo nome do arquivo, porém usando _PascalCase_. Nesse caso o nome do arquivo seria: `principal.tsx`, por exemplo.

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

Função executada sempre que uma requisição diferente de GET é executada na rota. Pode user usada, por exemplo, quando há uma submissão de formulário na página. O código dessa função é executado do lado do servidor e seu código fonte não é sequer enviado para o cliente.

Exemplo em: [notes.tsx](./app/routes/notes.tsx)

&nbsp;

##### 🌐 Função loader

Função executada sempre que uma requisição do tipo GET é executada na rota. Usada para carregar dados que serão usados na renderização. Seu retorno é acessado na função Principal do componente usando o hook useLoaderData().

Exemplo em: [notes.tsx](./app/routes/notes.tsx)
