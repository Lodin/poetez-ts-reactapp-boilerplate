declare module '*.css' {
  const styles: {[key: string]: string};
  export = styles;
}

declare module '*.svg' {
  const content: any;
  export = content;
}
