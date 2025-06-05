#INGITE - COFFEE DELIVERY
Coffee Delivery is a learning-purpose project, focused on the _useContext_ and _useReducer_ hooks and _React Hook Form + Zod_ forms.

Other important thing of this project is well documenting the process of starting a project from the ground up, setting everything up, in order to have a reliable source material for other _React + TS_ projects.

## Styled Components Setup

### Instalation

Install the main Styled Components package

```
  npm i styled-components
```

### Creating Themes

On a `style/themes` folder, create the default theme with the colour definitions;

### Creating the type declarations for the theme

The theme type will reflect the structure of the default theme. Any changes on this will be automatically reflected on the type.

On `src/@types` folder, create a type declaration file (\*.d.ts) and insert the themeType declaration there:

```ts
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type themeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
```

There will be a ESLint error in the file because an empty object.
To fix this, we can make a rule on the `eslint.config.js` file:

Just add `"@typescript-eslint/no-empty-object-type": "off",` on the `rules` object.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
