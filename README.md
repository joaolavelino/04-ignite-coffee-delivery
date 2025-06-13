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
- RHF Resolvers: https://github.com/react-hook-form/resolvers

### First step:

```ts
npm install react-hook-form
npm install zod
npm install react-hook-form @hookform/resolvers zod
```

### Start with the useForm hook

Destruct the returning object of the hook `useForm` to get the methods and variables from the library. This hook creates a 'new form' that can interact with the DOM and provides the tools for this integration.

### Registering fields

This function sets a new input inside the form created by RHF. It gets the name on the forma as a prop. It's used as a spread operator, because it returns a series of parameters for the input. If they need a value, it will be the name of the input, passed as a parameter.

`{...register("name-of-field")}`

### Submit Function

Inside the tag `form`, on the `onSubmit` parameter, pass the `handleSubmit` function imported with the `useForm()` hook. As a argument of this function, pass the actual submit function you created.

```tsx
<form action="" onSubmit={handleSubmit(submitFunction)}>
```

On the submit function, you can pass the `data` recieved from the form to be handled by the function. The data will be an object and the keys will be the names given on the `register` function on the inputs.

```tsx
function submitFunction(data) {
    ...
  }
```

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

```tsx
import { useFormContext } from "react-hook-form";

const { register } = useFormContext;
```

### Data Types and Validation Schema

In order to set the format for the data of the Form, this combination of RHF and Zod presents us a couple of tools. Instead of doing a TS interface for the data type, it's possible to create the validation Schema using Zod and use the `zod.infer` method to infer the typing inside of a TS Type object. This allow more conformity of the form information. As a new key is added on the schema, the form will automatically expect this information.

#### Validation Schema

First we create the validation schema:

```ts
import { z } from "zod";

export const AddressFormSchema = z.object({
  zip: z.string().min(1, "Informe o CEP"),
  ...
});
```

On the component where the `useForm` hook is called, use the schema to infer the typing and add it the `useForm` hook. Then use the schema in a resolver, inside of the `useForm` hook:

```ts
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type addressFormType = zod.infer<typeof AddressFormSchema>;

const addressForm = useForm<addressFormType>({
  resolver: zodResolver(addressFormSchema),
});
```

import { z } from "zod";

export const addressFormSchema = z.object({
zip: z.string().min(1, "Informe o CEP"),
adress: z.string().min(1, "Informe o endereço"),
number: z.string().min(1, "Informe o número"),
additional: z.string(),
district: z.string().min(1, "Informe o bairro"),
city: z.string().min(1, "Informe a cidade"),
state: z.string().min(1, "Informe o estado"),
});

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
- RHF Resolvers: https://github.com/react-hook-form/resolvers

### First step:

```ts
npm install react-hook-form
npm install zod
npm install react-hook-form @hookform/resolvers zod
```

### Start with the useForm hook

Destruct the returning object of the hook `useForm` to get the methods and variables from the library. This hook creates a 'new form' that can interact with the DOM and provides the tools for this integration.

### Registering fields

This function sets a new input inside the form created by RHF. It gets the name on the forma as a prop. It's used as a spread operator, because it returns a series of parameters for the input. If they need a value, it will be the name of the input, passed as a parameter.

`{...register("name-of-field")}`

### Submit Function

Inside the tag `form`, on the `onSubmit` parameter, pass the `handleSubmit` function imported with the `useForm()` hook. As a argument of this function, pass the actual submit function you created.

```tsx
<form action="" onSubmit={handleSubmit(submitFunction)}>
```

On the submit function, you can pass the `data` recieved from the form to be handled by the function. The data will be an object and the keys will be the names given on the `register` function on the inputs.

```tsx
function submitFunction(data) {
    ...
  }
```

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

```tsx
import { useFormContext } from "react-hook-form";

const { register } = useFormContext;
```

### Data Types and Validation Schema

In order to set the format for the data of the Form, this combination of RHF and Zod presents us a couple of tools. Instead of doing a TS interface for the data type, it's possible to create the validation Schema using Zod and use the `zod.infer` method to infer the typing inside of a TS Type object. This allow more conformity of the form information. As a new key is added on the schema, the form will automatically expect this information.

#### Validation Schema

First we create the validation schema:

```ts
import { z } from "zod";

export const AddressFormSchema = z.object({
  zip: z.string().min(1, "Informe o CEP"),
  ...
});
```

On the component where the `useForm` hook is called, use the schema to infer the typing and add it the `useForm` hook. Then use the schema in a resolver, inside of the `useForm` hook:

```ts
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type addressFormType = zod.infer<typeof AddressFormSchema>;

const addressForm = useForm<addressFormType>({
  resolver: zodResolver(addressFormSchema),
});
```

import { z } from "zod";

export const addressFormSchema = z.object({
zip: z.string().min(1, "Informe o CEP"),
adress: z.string().min(1, "Informe o endereço"),
number: z.string().min(1, "Informe o número"),
additional: z.string(),
district: z.string().min(1, "Informe o bairro"),
city: z.string().min(1, "Informe a cidade"),
state: z.string().min(1, "Informe o estado"),
});

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
    // other options...# INGITE - COFFEE DELIVERY

Coffee Delivery is a learning-purpose project, focused on the _useContext_ and _useReducer_ hooks and _React Hook Form + Zod_ forms.

Other important thing of this project is well documenting the process of starting a project from the ground up, setting everything up, in order to have a reliable source material for other _React + TS_ projects.

## Styled Components Setup

### Instalation

Install the main Styled Components package

```

npm i styled-components

````

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
````

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
- RHF Resolvers: https://github.com/react-hook-form/resolvers

### First step:

```ts
npm install react-hook-form
npm install zod
npm install react-hook-form @hookform/resolvers zod
```

### Start with the useForm hook

Destruct the returning object of the hook `useForm` to get the methods and variables from the library. This hook creates a 'new form' that can interact with the DOM and provides the tools for this integration.

### Registering fields

This function sets a new input inside the form created by RHF. It gets the name on the forma as a prop. It's used as a spread operator, because it returns a series of parameters for the input. If they need a value, it will be the name of the input, passed as a parameter.

`{...register("name-of-field")}`

### Submit Function

Inside the tag `form`, on the `onSubmit` parameter, pass the `handleSubmit` function imported with the `useForm()` hook. As a argument of this function, pass the actual submit function you created.

```tsx
<form action="" onSubmit={handleSubmit(submitFunction)}>
```

On the submit function, you can pass the `data` recieved from the form to be handled by the function. The data will be an object and the keys will be the names given on the `register` function on the inputs.

```tsx
function submitFunction(data) {
    ...
  }
```

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

```tsx
import { useFormContext } from "react-hook-form";

const { register } = useFormContext;
```

### Data Types and Validation Schema

In order to set the format for the data of the Form, this combination of RHF and Zod presents us a couple of tools. Instead of doing a TS interface for the data type, it's possible to create the validation Schema using Zod and use the `zod.infer` method to infer the typing inside of a TS Type object. This allow more conformity of the form information. As a new key is added on the schema, the form will automatically expect this information.

#### Validation Schema

First we create the validation schema:

```ts
import { z } from "zod";

export const AddressFormSchema = z.object({
  zip: z.string().min(1, "Informe o CEP"),
  ...
});
```

On the component where the `useForm` hook is called, use the schema to infer the typing and add it the `useForm` hook. Then use the schema in a resolver, inside of the `useForm` hook:

```ts
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type addressFormType = zod.infer<typeof AddressFormSchema>;

const addressForm = useForm<addressFormType>({
  resolver: zodResolver(addressFormSchema),
});
```

### Set the error messages on the fields

In order to have the error messages from the Zod validation schema, deconstruct the `useForm` variable and use `formState` to display the errors. It's also possible to use other informations about the state of the form, like: 'isDirty', 'dirtyFields', 'isSubmitting', etc.

```tsx
const addressForm = useForm<FormType>({
  resolver: zodResolver(addressFormSchema),
  mode: "onBlur" | "onSubmit", //quando essa validação será feita?
});
const {
  formState: { errors },
} = addressForm;

//if the hook is not on a variable (not using form provider)
const {
  register,
  formState: { errors },
};
```

It's also possible to find the formState object on the `useFormContext`.

I used watch and setValue to create the payment method selector.

- There's a problem on using typescript and useFormContext, so I refactored the checkout page in order to it not to be needed. But i'm going to try to find a solution later, so I can create better form components with separate input components on a design system.

### Extra steps (from last Project)

Some olher information

#### Set the initial values for the form

NOTE: This is particularly usefull on update forms

It's possible to send different settings as an object on the useForm hook call argument. One of those is the default values. The value of this setting is an object with the initial values of each input. The hook call will be like this:

```tsx
const { register, handleSubmit, watch } = useForm<newCycleFormData>({
  defaultValues: { task: "", taskMinutesAmount: 0 },
});
```

#### Reset a form:

It's possible to get a reset form function from the useForm hook call.

```tsx
const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
  defaultValues: { task: "", taskMinutesAmount: 0 },
});

function handleCreateNewCycle(data: newCycleFormData) {
  console.log(data);
  reset();
}
```

## CONTEXT and REDUCER

Context will store data like a state, but better. It's also possible to store functions. Combined with useReducer, it's possible to manage the store state with different functions, called actions.

### 1 - Create a context.

Create context will store an object with information that will be available to many components inside a context variable.

```tsx
export const ContextName = createContext({} as DataTypeName);
```

_Note that the context is Capitalized because it will be soon a component_

Inside the components, all that is stored in the context is availabe using the `useContext` hook:

```tsx
const { data, methods } = useContext(ContextName);
```

The key is preserving the immutability of this information. To change the information, the dispatch functions need to be available inside the context.

To keep everything organized, use TS types or interfaces to create specific typing for the context, like this:

```ts
export type OrdersData = {
  orderHistory: OrderType[];
  currentOrder: OrderType;
};
```

```tsx
export const ordersContext = createContext({} as OrdersData);
```

This way the context will always expect this format of information.

### 2 - Context Provider

Inside the created context there is a 'sub-component'that is native from React's Context API: the provider. Like the `ThemeProvider` it encapsules the components that will need this information:

```jsx
const [state1,setState1]=useState(0)

<DataContext.Provider value={{state1,setState1}}>
   children components
</DataContext.Provider>
```

In this case, all the cycles states information will be stored inside of this context component.
To do so, it's important to have the types and interfaces declarations well organized, so we don't have an _entanglement_ of imports between interface components and context components. All of those can read the type declarations from the same source, independent of a component.

### 3 - useReducer hook

#### And That's when the magic starts!

This is React's more complete state management tool . Unlike useState, useReducer can handle with more complex state information. The reducer function (`ordersReducer`, in this case) can change different parts of the state information with the dispatch function depending on the action you send to it. (The dispatch function of the state, the `setState` is always set to replace the entirety of the data of the state).

_TLDR: useReducer is a way to deal with more complex data on a state and let you customize how the dispatch will handle it with Actions._

The structure is similar to useState. You set the name of the state and the dispatch function, call the useReducer() hook and as an argument, instead of passing only the initial information, as we'd do with the useState() hook, we pass the reducer function and the initial value of the state. In this case:

```tsx
const [ordersState, dispatch] = useReducer(reducerFunction, {
  cycles: [],
  activeCycleId: null,
});
```

The next step is to create the reducer Function.

### 4 - Reducer Function

The reducer function is a function that will handle the information contained in the state and return the updated state. It has normally a switch statement with a case for each possible Action it can perform. This function expects two arguments, the initial state and the action it will perform. At the application this reducer function will be called by the dispatcher of the useReducer hook.

Here's an example of reducer function: You can add as many cases as necessary. Just create a new action for it.

```tsx
cexport function OrderReducer(state: OrdersState, action: OrdersAction) {
  switch (action.type) {
    case ActionTypes.ACTION NAME:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    default:
      return state;
  }
}
```

### 5 - Dispatch and Actions

To trigger the reducer, pass the `dispatch` function from the useReducer hook (like the dispatch function of a state `setState`).
The dispatch recieves an action and, if needed, a payload (data to be used on the function).

```tsx
dispatch({
  action: "ACTION NAME",
  payload: data, //can be a string, id, object, etc, depending on the action
});
```

There are many actions with different names and payloads. To organize all this, it's possible to type this actions:

```ts
export type OrdersAction =
  | { type: "ADD_ORDER"; payload: OrderType }
  | { type: "UPDATE_ORDER"; payload: OrderType }
  | { type: "REMOVE_ITEM"; payload: { id: string; itemId: string } }
  | { type: "COMPLETE_ORDER"; payload: { id: string } }
  | { type: "ADD_ONE"; payload: { orderId: string; itemId: string } }
  | { type: "REMOVE_ONE"; payload: { orderId: string; itemId: string } };
```

### 6 - Isolate actions and create dispatch functions

As the project grows, it's easy to lose track of all the payloads for each action on the dispatch functions. So it's interesting to create functions that return exactly what each dispach action needs and give types to the parameters of the function, so the intellisense will be aware of the params.

So on this step, I created a folder for each subject and inside there is the `reducer.ts` file with the reducer function and the `actions.ts` with the action types enum and the _action functions_ that will feed the dispatch functions (which are located on the cycles context file).

```tsx
export function createNewOrderAction(newOrder: OrderType) {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: newOrder,
  };
}
```

Back on the Context component where the useReducer hook is called, you can create the _Dispatcher Functions_ to trigger each of the necessary actions.

Inside of the context, create the `dispatch`function, but instead of the the object with action and payload, it's possible to use the _action functions_ created on the `actions` file.

```tsx
function createOrder(newOrder: OrderType) {
  dispatch(createNewOrderAction(newOrder));
}
```

It's also possible to insert other logic inside these functions, like a common function:

```tsx
function completeCurrentOrder(checkoutData: FormType) {
  if (currentOrder) {
    const { paymentMethod, ...adressInfo } = checkoutData;
    const completeOrder: OrderType = {
      ...currentOrder,
      date: new Date(),
      address: adressInfo,
      payment: paymentMethod,
    };
    dispatch(completeOrderAction(completeOrder));
  } else return;
}
```

### 7 - Initializer Function

The `useReducer` hook has a third parameter (just to remember: 1st param is the reducer function, the second is the initial state). This third parameter is the _initializer function_. This is the first action to be performed by the reducer. Normally used to fetch data from somewhere. (in this case, from the Local Storage).

It's possible to pass `initialState` as an argument on the initializer funciton, so we can return this initial value, if there is no data found.

```tsx
const [cyclesState, dispatch] = useReducer(
  CyclesReducer,
  {
    cycles: [],
    activeCycleId: null,
  },
  //initializer - initial state is what was declared on the second param of the useReducer
  (initialState) => {
    const storedStateAsJson = localStorage.getItem(
      "@ignite-timer:cycles-state-1.0.0"
    );
    return storedStateAsJson ? JSON.parse(storedStateAsJson) : initialState;
  }
);
```

### 8 - Apply the context with the reducer to the project

In order to make all the information and methods stored on the context, we need to envolve the component tree where it would be used. Inside the components the information is accessible using the `useContext` hook.

```tsx
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <OrdersContextProvider>
          <Router />
        </OrdersContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

### BACK TO React Router Dom - URL Params

It's possible to send data using the url with React Router Dom. To do so, you need to:

1. On the router component, and the indication of the data that'll be sent through the url on the _path_ prop of the `<Route>`component:

```tsx
<Route path="/confirmation/:orderId" element={<ConfirmationPage />} />
```

2. Pass the data on the `navigate` function:

```tsx
navigate(`/confirmation/${currentOrder.id}`);
```

3. Get this information on the page component (the one that's send on the `element` prop of the `<Route>` component):

```tsx
const { orderId } = useParams();
```

### Implement Local Storage

To implement this feature, we need to refactor a bit our Context.

The third argument of the `useReducer` hook is the _initializer function_ and with that we can set our initial state as the first action on opening the app.

We need to create a basic function that access our local storage to get the information from there.

```tsx
const [ordersState, dispatch] = useReducer(
  OrdersReducer,
  createInitialState(),
  (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      "@ignite-coffee-delivery:ordersState-1.0.0"
    );
    return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initialState;
  }
);
```

To save the state on the local storage, we need to use the `useEffect` hook from React to store to the local storage every time that the `orderState` is changed:
