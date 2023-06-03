downloadFile(res.data, '文件名', 'xls')
// 'responseType': 'blob'  //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
/*
axios.post(apiurl, params, {
   'responseType': 'blob'  //设置响应的数据类型为一个包含二进制数据的 Blob 对象，必须设置！！！
})
*/
// obj: 数据流 name: 文件名  suffix:文件后缀
export function downloadFile(obj, name, suffix) {
  let m = (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1);
  let d = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate();
  var date = new Date().getFullYear() + '' + m + '' + d;
  const fileName =  name + '-' + date +'.' + suffix;
  const blob = new Blob([obj]);
  if (window.navigator.msSaveOrOpenBlob) {
    try {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } catch (error) {
      this.$message.error('导出失败') //项目中无elementUI时注释掉
    }
  } else {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);// 释放URL对象
    document.body.removeChild(link);
  }
}
