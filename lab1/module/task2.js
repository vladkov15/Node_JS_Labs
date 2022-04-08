module.exports.multiplicationTable =  function multiplicationTable(number){
let count =1;
   let mas = [];
   for(let i = 0; i < number ; i++){
       mas[i]=[];
       for(let j = 0 ;j < number ; j++){
           mas[i][j] = count;
           count+=1;
       }
   }
   return mas;
}