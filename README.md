# 🌱 Turborepo + TailwindCSS + Storybook

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `workshop`: a Storybook app with the `ui` package imported
- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications with [shadcn-ui](https://github.com/shadcn/ui) already included.
- `ui/eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `ui/tailwind-config`: reusable tailwind configuration
- `ui/tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.s` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.s` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.s](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit https://github.com/arevalolance/design-system-template.git design-system-template
cd design-system-template
pnpm install
git init . && git add . && git commit -m "Init"
```

## Running storybook-static website on your local machine

- Install all dependencies with: `pnpm install`
- Run `pnpm build`
- Make sure you have docker daemon running with `colima status`. If it is not, run `colima start`
- Run `docker image build -t storybook:1.0 .` to build the image locally
- Run `docker container run -d --name storybook -p 80:8080 storybook:1.0`
- Access the website content on http://localhost:80
