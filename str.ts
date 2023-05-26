const wbReplace = (str:string='', regKey:string = '括号',replaceStr:string='' ) => {
    const regObj:any ={
      '括号': /\((.*?)\)/g   // 112212(1112),7888(2223),8999() <=>112212,7888,8999
    }
    return str.replace(regObj[regKey], replaceStr)
}
