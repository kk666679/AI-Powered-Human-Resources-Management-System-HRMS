// types/global.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// Fix for UI component libraries
declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const prism: { [key: string]: React.CSSProperties };
}

// Web3 type extensions
declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}