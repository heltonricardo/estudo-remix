<h1 align="center">Estudo Remix ®️</h1>

&nbsp;

<p align="center">
  <img src="./assets/remix.png" width="400" alt="Logo Remix"/>
</p>

<p align="center">Estudo sobre o
    <a href="https://remix.run/">Framework Remix</a>
</p>

<br />

### Projetos deste repositório

- 📝 [My Notes](https://github.com/heltonricardo/estudo-remix/tree/main/my-notes) - [Acessar deploy](https://my-notes-tau.vercel.app/) ✅
- 💰 [My Expenses](https://github.com/heltonricardo/estudo-remix/tree/main/my-expenses) - [Acessar deploy](https://my-expenses-seven.vercel.app/) ⏳

<br>
###### Legenda:

✅: Finalizado
⏳: Em andamento

<br />

# 🔎 Sumário

- ✅ [Componentes](#-componentes)
  - 🛟 [Outlet](#-componente-outlet-)
  - ↖️ [Link](#%EF%B8%8F-componente-link-)
  - 🌟 [NavLink](#-componente-navlink-)
- ✅ [Funções](#-funções)
  - 🎯 [Principal](#-função-principal)
  - 🔀 [links](#-função-links)
  - 🌐 [loader](#-função-loader)
  - 🎬 [action](#-função-action)
  - 💡 [meta](#-função-meta)
  - 🧤 [CatchBoundary](#-função-catchboundary)
  - 🐛 [ErrorBoundary](#-função-errorboundary)
- ✅ [Roteamento](#-roteamento)
  - 🔡 [Sub-Rotas](#-sub-rotas)
  - 💲 [Rotas Dinâmicas](#-rotas-dinâmicas)
  - 🖼️ [Layouts](#%EF%B8%8F-layouts)
  - ⛰️ [Layouts sem caminho](#%EF%B8%8F-layouts-sem-caminho)
  - [Rotas de Recurso](#-rotas-de-recurso)

<br />

## ✅ Componentes

Elementos do Remix para serem usados em formato de tags HTML / componentes React.

<br />

##### 🛟 Componente \<Outlet />

Componente especial que permite renderizar o conteúdo de uma rota filha dentro de um componente de layout pai.

Em outras palavras, um Outlet do [Layout](#%EF%B8%8F-layouts) pai será substituído pelo conteúdo retornado pela [Função Principal](#-função-principal) da rota filha.

```tsx
import { Outlet } from "@remix-run/react";

export default function MeuLayout() {
  return <Outlet />;
}
```

O componente `./app/root.jsx` (ou `.tsx`) já possui um Outlet na criação do projeto Remix pois todas as rotas são filhas dele. O conteúdo carregado neste componente também será carregado em todas as [Sub-Rotas](#-sub-rotas) do projeto.

O Outlet é uma peça fundamental do Remix para a criação de layouts e rotas flexíveis e reutilizáveis em aplicativos web, conteúdo que ficará mais claro nas outras seções desse documento.

[Ver exemplo](./my-notes/app/root.tsx)

<br />

##### ↖️ Componente \<Link />

Componente que permite aos usuários navegar entre diferentes rotas em um aplicativo web, sem precisar recarregar a página inteira. É semelhante à tag `<a>` do HTML, mas é otimizado para uso com o framework Remix.

> Ele deve ser usado somente para rotas da própria aplicação! Para rotas externas, use o `<a>` do HTML. E para ter mais segurança nesse caso, veja [esta dica](https://gist.github.com/heltonricardo/3accebccceb9dc81eecf276d55448684).

O endereço destino deve ser inserido como valor do atributo `to`. Caso o valor inicie-se com barra (`/`), o roteamento será feito a partir da raiz da aplicação. Mas caso o valor inicie-se sem a barra, o roteamento será feito de forma relativa, adicionando o endereço do link ao endereço atual separado por barra (ver [Sub-rotas](#-sub-rotas)):

```tsx
// Arquivo: routes/empresas/dados.tsx

import { Link } from "@remix-run/react";

export default function Dados() {
  return (
    <h1>Dados da empresa</h1>
    <Link to="ends">Endereços</Link>
    <Link to="/patrocinadores">Patrocinadores</Link>
  );
}
```

No exemplo acima, o primeiro link será roteado para `/empresas/dados/ends` e o segundo para `/patrocinadores`.

> Também é possível usar a notação ponto-ponto (`..`) como valor do atributo `to` para indicar a super-rota (rota pai) da rota atual!

[Ver exemplo](./my-expenses/app/components/expenses/ExpenseListItem.tsx)

<br />

##### 🌟 Componente \<NavLink />

Funciona igual ao [Componente Link](#%EF%B8%8F-componente-link-), porém aplica uma classe CSS para o link ativo, ou seja, o link que leva à rota atual ficará destacado em relação aos links de outras rotas.

O funcionamento é bem simples. Basta, ao definir as folhas de estilo para os links, customizar o CSS para a pseudo-classe `:active` e ela será aplicada automaticamente pelo Remix.

[Ver exemplo](./my-expenses/app/components/navigation/MainHeader.tsx)

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

[Ver exemplo](my-expenses/app/routes/expenses/$id.tsx)

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

<br />

##### 🖼️ Layouts

Layouts são componentes React que envolvem rotas para fornecer uma estrutura comum para elas, permitindo definir elementos de interface do usuário que são comuns a todas as páginas. Isso significa que um layout é um componente renderizado para um conjunto de sub-rotas pré definido:

```
routes
├── fornecedores.tsx
├── clientes.tsx     <- Layout
└── clientes         <- Contém sub-rotas que usarão o layout
    ├── cadastro.tsx
    └── arquivos.tsx
```

No exemplo acima, todas as páginas dentro do diretório `clientes` serão renderizadas _dentro_ do layout `clientes.tsx`. Basta fazer uso do [Componente Outlet](#-componente-outlet-) no arquivo de layout:

```tsx
import { Outlet } from "@remix-run/react";

export default function ClientesLayout() {
  return (
    <main>
      <h1>Conteúdo renderizado em todas as sub-rotas de /clientes/"</h1>
      <Outlet />
    </main>
  );
}
```

Esse mesmo conceito é aplicado nos arquivos `./app/root.tsx` de cada projeto Remix.

> Para fazer com que uma sub-rota não utilize o layout que está sendo aplicado em seu conjunto, basta remover o arquivo correspondente da pasta pai e usar a notação de ponto para determinar a hierarquia de rotas, como visto em [Sub-Rotas](#-sub-rotas):
>
> ```
> routes
> ├── fornecedores.tsx
> ├── clientes.tsx          <- Layout
> ├── clientes.arquivos.tsx <- Sub-rota que não usará o layout
> └── clientes              <- Contém sub-rotas que usarão o layout
>     └── cadastro.tsx
> ```

[Ver exemplo](./my-expenses/app/routes/expenses.tsx)

<br />

##### ⛰️ Layouts sem caminho

Técnica de roteamento utilizada para criar rotas de página que não têm um caminho explícito definido.

Ao utilizar uma rota de layout sem caminho (pathless), o componente de layout é renderizado em todas as rotas filhas, independentemente de seu caminho específico.

Isso permite compartilhar um mesmo layout entre várias rotas ou grupos de rotas, sem repetição de código ou necessidade de definir caminhos separados para cada uma delas.

Para criar um Layout assim, criamos um diretório e um arquivo React com o nome contendo o prefixo _duplo underscore_ (`__`), como mostrado no exemplo:

```
routes
└── cadastros
    ├── __clientes.tsx   <- Layout sem caminho
    └── __clientes       <- Contém rotas com o Layout
        ├── ativos.tsx
        └── inativos.tsx
```

```tsx
// Arquivo: routes/cadastros/__clientes.tsx

import { Outlet } from "@remix-run/react";
import dummyStyles from "~/styles/dummy.css";

export default function ClientesLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: "stylesheet", href: dummyStyles }];
}
```

No caso acima, um Layout sem caminho foi usado para compartilhar folhas de estilo entre duas rotas sem alterá-las:

- /cadastros/ativos
- /cadastros/inativos

[Ver exemplo](./my-expenses/app/routes/__marketing.tsx)

<br />

##### 🔰 Rotas de Recurso

São rotas que não geram uma página, por isso não possuem uma [Função Principal](#-função-principal), mas sim uma [Função loader](#-função-loader).

Por exemplo: é possível retornar um objeto da função:

```tsx
export function loader() {
  return {
    nome: "Helton",
    sobrenome: "Santos",
    frontend: "Remix.run",
  };
}
```

[Ver exemplo](./my-expenses/app/routes/expenses.raw.tsx)
