//To fix local assets imports error on typescript
declare module '.*png' {
  const value: any;
  export = value;
}

declare module '.*jpg' {
  const value: any;
  export = value;
}

declare module '.*jpeg' {
  const value: any;
  export = value;
}

declare module '.*webp' {
  const value: any;
  export = value;
}