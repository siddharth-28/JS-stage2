insert=function insert(givString,ins_string,pos){
   if(typeof(pos)=="undefined"){
       pos=0;
   }
if(typeof(ins_string)=="undefined"){
    ins_string='';
}
return givString.slice(0,pos)+ins_string+" "+givString.slice(pos);
}
console.log(insert("We are practing excercises"));
console.log(insert("We are practing excercises","JavaScript"));
console.log(insert("We are practing excercises","JavaScript",16));
