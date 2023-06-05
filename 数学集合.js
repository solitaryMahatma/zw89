function name(sl: string, tarS: string) {
    const kl = sl.replace(/\t/g, ',').split(',')
    const tarSL = tarS.replace(/\t/g, ',').split(',')
    const op = {}
    const _ops = {}
    const list: object[] = []
    //补集 两个数组各自没有的集合
    let complement = [...kl.filter(item => tarSL.indexOf(item) == -1), ...tarSL.filter(item => kl.indexOf(item) == -1)];
    //交集
    let intersection = kl.filter(item => tarSL.indexOf(item) > -1);
    //并集
    let union = kl.concat(tarSL.filter(item => kl.indexOf(item) == -1));
    //差集 数组arr1相对于arr2所没有的
    let diff = kl.filter(item => tarSL.indexOf(item) == -1);
    const kr = kl.map((v: string) => {

      const l = v.split(' ').map((vo, i) => {
        if (i === 0) {
          return vo.slice(0, 1).toLowerCase() + vo.slice(1)
        }
        if (i !== 0) {
          return vo.slice(0, 1).toUpperCase() + vo.slice(1)
        }
      }).join('')
      Object.assign(op, { [l]: v })
      if (!tarSL.includes(v)) {
        Object.assign(_ops, { [v]: v })
      }

      list.push({ id: l, inKey: v })
      return l

    })
    return { intersection, union, diff, complement, op, list, _ops, kr }
  }
