import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as s}from"./index-DOvxcyG1.js";import"./index-qVDZzPEr.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"react--typescript--vite",children:"React + TypeScript + Vite"}),`
`,e.jsx(n.p,{children:"This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules."}),`
`,e.jsx(n.p,{children:"Currently, two official plugins are available:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md",rel:"nofollow",children:"@vitejs/plugin-react"})," uses ",e.jsx(n.a,{href:"https://babeljs.io/",rel:"nofollow",children:"Babel"})," for Fast Refresh"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/vitejs/vite-plugin-react-swc",rel:"nofollow",children:"@vitejs/plugin-react-swc"})," uses ",e.jsx(n.a,{href:"https://swc.rs/",rel:"nofollow",children:"SWC"})," for Fast Refresh"]}),`
`]}),`
`,e.jsx(n.h2,{id:"expanding-the-eslint-configuration",children:"Expanding the ESLint configuration"}),`
`,e.jsx(n.p,{children:"If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Configure the top-level ",e.jsx(n.code,{children:"parserOptions"})," property like this:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Replace ",e.jsx(n.code,{children:"tseslint.configs.recommended"})," to ",e.jsx(n.code,{children:"tseslint.configs.recommendedTypeChecked"})," or ",e.jsx(n.code,{children:"tseslint.configs.strictTypeChecked"})]}),`
`,e.jsxs(n.li,{children:["Optionally add ",e.jsx(n.code,{children:"...tseslint.configs.stylisticTypeChecked"})]}),`
`,e.jsxs(n.li,{children:["Install ",e.jsx(n.a,{href:"https://github.com/jsx-eslint/eslint-plugin-react",rel:"nofollow",children:"eslint-plugin-react"})," and update the config:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
`})})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{c as default};
