module.exports = function check(str, bracketsConfig) {
  let i, j = 0;
  let closeIndex = 0;
  let open = []; 
  let close = [];
  let double = [];
  let arr = str.split('');


  for (i=0; i<bracketsConfig.length; i++){
    if (bracketsConfig[i][0] == bracketsConfig[i][1]){  // если откр и закр равны, то кидаем в отдельный массив
      double.push(bracketsConfig[i][0]);
    };
    open.push(bracketsConfig[i][0]);   // отдельные масивы для откр и закр 
    close.push(bracketsConfig[i][1]);
  };
  
  if (arr.length % 2 == 1){return(false)};   // сразу убираем очевидные true false
  if (double.length == open.length){return(true)};

  for (j=0; j<arr.length; j++){
    if (open.indexOf(arr[j]) != -1 && double.indexOf(arr[j]) == -1){ //если открывающая скобка и не дабл
      continue;
    }
    else{
      closeIndex = close.indexOf(arr[j]);
      if (open[closeIndex] == arr[j-1]){
        arr.splice(j-1, 2); 
        j = 0;                             // вырезаем парные и идем сначала
      }
    }
  }
  if (arr.length != 0){
    return(false);
  }
  else{
    return(true);
  }
}
