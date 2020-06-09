declare module 'react-cookie'{
  const load: (name: string) => any;
  const remove: (name: string, opt?:any) => any;
  const save: (name: string, value: any, opt?:any) => any;
}