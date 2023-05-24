const checkFile = (file:any, types = '.exe,.pdf', max = 10*1024*1024) =>{
    // max : 10MB
    const fileName = file.name
    const fileSize = file.size
    const [fileType] = ((fileName||'').split('.').map((v:string)=>v.toLowerCase())).splice(-1,1)
    const fileTypes = types.split(',').map((v:string)=>v.toLowerCase())
    if (fileTypes.includes(fileType)) {
      if (fileSize>max) {
        const aS= (max/1024/1024).toFixed(3) + 'MB'
        const bS= (fileSize/1024/1024).toFixed(3) + 'MB'
        return Promise.reject({msgCn:`文件(${fileName}容量${bS})太大，超过${aS}`, msg: `The file(${fileName} capacity ${bS}) is too large, exceeding ${aS}`, type: 1})
      } else {
        return Promise.resolve({msgCn:`文件(${fileName})可以上传`,msg:`File(${fileName}) can be uploaded`, type: 2})
      }
      
    } else {
      return Promise.reject({msgCn:`文件(${fileName})格式不对,支持文件格式有:${types}`, msg:`The file(${fileName}) format is incorrect. Supported file formats are:${types}`, type: 0})
    }
  }
