function uniquee(s:string){
  var out:string = "";
  for(let i=0 ; i<s.length ; i++){
    if(out.includes(s[i])){
    }
    else{
      out+=s[i];
    }
  }
  console.log(out);  
}

uniquee("ProminrntPixel")