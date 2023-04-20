/*
 * @Author: 孤城 2112305445@qq.com
 * @Date: 2023-04-21 01:22:39
 * @LastEditors: 孤城 2112305445@qq.com
 * @LastEditTime: 2023-04-21 02:49:20
 * @FilePath: \vite-project\src\utils\date.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const formatDate = (dateStr:Date, format = 'yyyy-MM-dd'):string =>{
  const date = new Date(dateStr)
  const yyyy = date.getFullYear()
  const MM = date.getMonth()+1
  const pad = (num:number):string => num > 9 ?num+'':'0'+num
  const _MM = pad(MM)
  const dd = date.getDate()
  const _dd = pad(dd)
  let reStr = dateStr + '';
  if (['yyyy-MM-dd'].includes(format)) {
    reStr = [yyyy,_MM,_dd].join('-')
    
  }
  return reStr
}

export const checkRowsHasChange = (ops:any, next:any): Promise<boolean>=>{
  const {vm,cone} = ops
  // vm: this, vo: 交互的数据 cone:弹出框配置
  return new Promise<boolean>((resolve, reject) => {
    vm['skkl'](cone).then((result:string) => {
      if (['ok'].includes(result)) {
        if (next) {
          next()
        }  
        resolve(true)      
      } else {
        reject(new Error())
      }     
    }).catch(() => {
      reject(new Error())
    });
  })
}

export const getRowById = (id:any):object =>{
  const [firstDate] = [].filter(v=>id===v['id'])
  return firstDate
}

export const checkDelete = (ops:any, next:any): Promise<boolean>=>{
  const {vm,delFn,cone, vo} = ops
  // vm: this, delFn:删除数据的方法 vo: 交互的数据, cone:弹出框配置
  const {isNew} = vo
  if (isNew) {
     delFn()
     if (next) {
      next()
     }
     return Promise.reject(true)
  }
  return new Promise<boolean>((resolve, reject) => {
    vm['skkl'](cone).then((result:string) => {
      if (['ok'].includes(result)) {
        if (next) {
          next()
        }  
        resolve(true)     
      } else {
        reject(new Error())
      }     
    }).catch(() => {
      reject(new Error())
    });
  })
}

export const compare = (ops:any,next:any) => {
  const {vm,vo,cone, compareFn} = ops
  const isOk = compareFn(vo)
  if (isOk) {
    if (next) {
      next()
    }
  } else {
    vm['skkl'](cone)
  }
}

export const checkTableEdits = (ops:any,next:any) => {
  const {vm} = ops
  vm.getTable().then((result:any) => {
    result['sggs'](isOk) {
      if (isOk) {
        if (next) {
          next()
        }
      }
    }
  })
}
