module.exports = function check(str, bracketsConfig) {
  const proverka = [];
 
 
  for (const iterator of str) {
    for(let i = 0; i<bracketsConfig.length;i++){
   
      if(iterator == bracketsConfig[i][0] && bracketsConfig[i][0] == bracketsConfig[i][1]){
        if(proverka.includes(iterator)){
              proverka.pop();
              continue;
            }else{
              proverka.push(iterator);
              continue;
      }}
      if(iterator == bracketsConfig[i][0]){
        proverka.push(iterator);
      }
      if(iterator === bracketsConfig[i][1]){
        if(proverka.pop() !== bracketsConfig[i][0]){
          return false;
        }
        
       
      }
    }
    
  }
  if(proverka.length === 0){
    return true;
  }
  return false;
}




