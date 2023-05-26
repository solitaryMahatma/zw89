const wbReplace = (str:string='', regKey:string = '括号',replaceStr:string='' ) => {
    const regObj:any ={
      '括号': /\((.+?)\)/g
    }
    return str.replace(regObj[regKey], replaceStr)
}
