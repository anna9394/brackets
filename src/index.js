module.exports = function check(str, bracketsConfig) {
    let acc = 0;
    let found = 1;
    while(found === 1){
      found = 0;
      for( let i = 0; i < bracketsConfig.length; i++){
        let arr = str.split(bracketsConfig[i][0]+bracketsConfig[i][1]);
        if(arr.length > 1){
          acc++
          found = 1;
          str = arr.join('');
        }
      }
    }
    let result = false;
    if(str === ''){
      result = true;
    }
    return result;
}
