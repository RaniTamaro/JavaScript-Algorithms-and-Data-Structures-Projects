function rot13(str) {
    let arrCode = [];
    let newStr = [];
  
    for(let i=0; i<str.length; i++){
      arrCode.push(str.charCodeAt(i));
      if(str.charCodeAt(i)>77 && str.charCodeAt(i)<=90){
        arrCode[i]-=13;
      } else if(str.charCodeAt(i)<=77 && str.charCodeAt(i)>64){
        arrCode[i]+=13;
      }
    }
  
    for(let i=0; i<arrCode.length; i++){
      newStr.push(String.fromCharCode(arrCode[i]));
    }
  
    return newStr.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));