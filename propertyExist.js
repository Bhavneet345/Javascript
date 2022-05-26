function propertyExists(obj,path){
    if(path.length == 1){
        if(obj.hasOwnProperty(path) == true){
            return obj[path];
        }
        return false;
    }
    if(obj.hasOwnProperty(path[0]) == true){
        return propertyExists(obj[path[0]], path.slice(1));
    }
    return false;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let lines = chunk.toString().split(' ')
    let t = parseInt(lines[0]);
    for (let i=0;i<t;i++) {
      let obj = lines[(i*2)+1];
      let str = lines[(i*2)+2];
      let arr = []
      for(let c of str) {
          if(c === '\r' || c === '\n') continue
          arr.push(c)
      }
      let ans = propertyExists(JSON.parse(obj),arr)
      process.stdout.write(ans.toString()+'\n');
    }

    process.exit()
});