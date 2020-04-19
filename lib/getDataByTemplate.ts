export default (data: any, template: string) => {
  const reg = /\$\{(.+?)\}/g;
  let result = null;
  let transferDate = template;
  do {
    result = reg.exec(template);
    if(result){
      const key = result[0];
      transferDate = transferDate.replace(key, data[result[1]]);
    }
  } while (result);
  return transferDate;
}