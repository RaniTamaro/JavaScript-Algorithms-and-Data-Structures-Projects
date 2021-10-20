function palindrome(str) {
    let newStr = str
      .replace(/\W|_|/ig,"")
      .toLowerCase()
      .split("");
  
    for(let i=0; i<(newStr.length/2); i++){
      if(newStr[i]!==newStr[newStr.length-1-i]){
        return false;
      }
    }
    
    return true;
  }
  
console.log(palindrome("1 eye for of 1 eye."));