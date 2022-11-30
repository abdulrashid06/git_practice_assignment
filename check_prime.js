let num=6;
let factor=0;
for (let i=0; i<num; i++){
   if (num%i==0){
     factor++;
   }
 }
 if (factor==1){
   console.log("Yes");
 }
 else{
   console.log("No");
 }