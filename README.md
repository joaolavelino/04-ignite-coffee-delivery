# INGITE - COFFEE DELIVERY

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

### Create a global styles file

On the `styles` folder, create a `global.ts` file that will provide all the general styles for the project.

Inside of it, create the clobal style using `createGlobalStyle`, which is imported from `styled-components`.

```ts
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body {
     background-color: ${theme.base.background};
   }
   p {
     color: ${theme.base.text};
     font-family: ${theme.font.text};
   }

 ... the rest of the global css
 `}
`;
```

I like using the this `css` syntax to build the styled components, so I don't need to call the theme on a function every time I need to use the props information.

### Using multiple themes

If you need multiple themes, you need to use set the theme with a state and a toggle functioncon the `App.tsx` an pass them to the `<Router>` component. So them can be passed as props on the `<Layout>` component.

On this example, the default theme is dark the there is a secondary light theme.

```tsx
const [theme, setTheme] = useState<"default" | "light">("default");

const currentTheme = theme == "default" ? defaultTheme : lightTheme;

function toggleTheme() {
  setTheme((state) => (state == "default" ? "light" : "default"));
}
```

## React Router Dom Setup

### Install the library

`npm i react-router-dom`

### Create the Router Component

Create the `Router.tsx` file and inside use the `<Routes>` (plural) provider imported from `react-router-dom`.

Inside `<Routes>` we need create the routing tree using the `<Route>` (singular) coponent.

Inside each `<Route>` we need to pass the `element` and the `path` to it.
The element is the component that will be opened on that route.

### Create A Layout Component

The layout component is something that will encapsulate the routes below on the routing tree.

There can be multiple Layouts used as branches on the routing tree.

Example of a routing tree with multiple layouts:

```jsx
<Route path='/' element={<Layout1>}>
  <Route path='/home' element={<Home/>}> /home route with layout 1
</Route>
<Route path='/admin' element={<Layout2>}>
  <Route path='/pannel' element={<AdminPannel/>}> /admin/pannel route with layout 2
</Route>
```

On creating a layout component, all is needed is to create the component and insert the `<Outlet/>` component on the place where the component passed on the `<Route>` component as the `element`prop. The Outlet works like `{children}`.

### Add the Browser Router and the Router Component

The browser router is a provider that is put on the `App.js` file. Inside of the `<BrowserRouter>` provider, insert the created `<Router>` component (not the one from `react router dom`).

- If multiple teames are being used, pass the theme state and the toggle funcion to the `<Router>` component. (Remember to create the interface with the expected props.)

## Phosphor React

Phosphor react updated the library.
The new instalation command is `npm i @phosphor-icons/react`

[Check the documentation here:](https://github.com/phosphor-icons/react)

## REACT HOOK FORM + ZOD

### Documentation:

Check the documentations:

- React Hook Form: https://react-hook-form.com/get-started
- Zod: https://zod.dev

### First step:

```ts
npm install react-hook-form
npm install zod
```

### Start with the useForm hook

Destruct the returning object of the hook `useForm` to get the methods and variables from the library. This hook creates a 'new form' that can interact with the DOM and provides the tools for this integration.

### Registering fields

This function sets a new input inside the form created by RHF. It gets the name on the forma as a prop. It's used as a spread operator, because it returns a series of parameters for the input. If they need a value, it will be the name of the input, passed as a parameter.

`{...register("name-of-field")}`

### Form Provider

Your form can be spread on multiple components, on this case, the submit button is on a separate component. To handle this, it's possible to create the on the parent component and use the `<FormProvider> component to pass the information to the components.

The form is created outside of the provider with the handleSubmit function.

In order to pass the information downwards, the useForm hook needs to be inside of a variable and be passed inside the FormProvider tag:

```tsx
const addressForm = useForm();
const {handleSubmit} = addressForm
function submitFunction (){}
...
<FormProvider {...adressForm}>
  <form onSubmit={handleSubmit(submitFunction)}>
    <Component1> // fields are here
    <Component2> // submit button is here
  </Form>
</FormProvider>
```

Inside the components, the useForm methods and variables are available using the `useFormContext` hook.

````tsx
import { useFormContext } from "react-hook-form";

const {register} = useFormContext

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
````

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
