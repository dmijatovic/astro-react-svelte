# Astro test 1

This project tests use of react, vue, svelte, markdown and MDX components in the same project

In addition we will test use of Material-UI for React and maybe some other UI frameworks.

## Installation

I followed [Get started](https://docs.astro.build/en/getting-started/) documentation to setup project. No remarks on that for now.

To add dependencies I used astro CLI

## Eslint

There is a eslint plugin for astro file. The link to documentation is [here](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/)
I have not tested it yet. Let's first see if we need it.

## Frameworks

Major frameworks are supported, but this is just a begining, usually one will use other supporting libs of an framework. Currently CSS-in-JS is not supported, [see this issue](https://github.com/withastro/astro/issues/4432)

```bash
# add react libs
npm i @astrojs/react react react-dom
npm i -D @types/react
# svelte
npm i @astrojs/svelte svelte
```

### Tailwind

Astro offers [integration for tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

## Components

The [documentation describes astro component approach](https://docs.astro.build/en/core-concepts/astro-components/). It uses basics of JSX and enables passing props to components. The approach is focused on maximal plain HTML/JS/CSS support, so no need for className and cammelCase html props! It feels like a natural html file. The components use fencer --- to indicate javascript part of the component.

Passing child elements is done using \<slot/> tag. It supports named slots.

Style tag can be used in components and it is scoped by default.

## SSR

There are number of [supported SSR solution](https://docs.astro.build/en/guides/integrations-guide/deno/). For me Node and Deno are most interesting.

### Node

The adapter will create output that can be runned in node server like Express.

More information is in [documentation](https://docs.astro.build/en/guides/integrations-guide/node/)

```bash
npm i @astrojs/node
```

Deno

More information in [documentation](https://docs.astro.build/en/guides/integrations-guide/deno/)

```bash
npm i @astrojs/deno
```

## Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
