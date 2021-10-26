function telephoneCheck(str) {
    str=str.split("");
  
    if(str[0]==="1"){
      str.shift();
      if(str[0]===" "){
        str.shift();
      }
    }
  
    if(str.length===12){
      if((str[3]==="-" && str[7]==="-") || (str[3]===" " && str[7]===" ")){
        return true;
      }
    } else if(str[0]==="(" && str[4]===")"){
      if(str[8]==="-" || (str[5]===" " && str[9]==="-")){
        return true;
      }
    } else if(str.length===10){
      if(/\d/g.test(str)){
        return true;
      }
    } 
  
    return false; 
  }
  
  console.log(telephoneCheck("1(555)555-5555"));