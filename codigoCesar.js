
var word=prompt("introducir letra");

if(typeof(word)=== Number || typeof(word)===null){
  alert("error");

}else{
  word;
}
 var cipher= function(wordX){
   var a=wordX.toUpperCase();
   var b="";

   for(var i=0;i<a.length;i++){
     b= a.charCodeAt(i);
     var c=(b-65+33)%26+65;
     var d= String.fromCharCode(c);

   }

   return d;
 }
 console.log(cipher(word));
