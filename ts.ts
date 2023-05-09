interface Vue {
  $route: {
    fullPath?: string
    hash?: string,
    matched: object[],
    meta?: object,
    name?: string,
    params: object,
    path?: string,
    query?: object,
  },
  PX: (str: string) => void,
  $router: {
    options: {
      mode: 'history' | 'hash',
      routes: object[],
      scrollBehavior: () => any
    },
    resolve: (ops: any) => any,
    back: () => void,
    go: (n: number) => void
  }
}
