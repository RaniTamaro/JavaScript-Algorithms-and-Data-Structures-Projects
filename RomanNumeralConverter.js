function convertToRoman(num) {
    //Krok 1. Wyciagnac konkretne liczby z liczby arabskiej
    let arrNumber=num.toString().split("").map(x=>Number(x));
    let arrRoma=[];
  
    console.log(arrNumber);
    //Krok 2. Przypisanie rzymskiej do liczby arabskiej
    for(let i=arrNumber.length; i>0;i--){
      if(arrNumber.length===4){
        for(let i=0; i<arrNumber[0];i++){
          arrRoma.push("M");
        }
      } else if(arrNumber.length===3 && arrNumber[0]!==0){
        if(arrNumber[0]===9){
          arrRoma.push("CM");
        } else if(arrNumber[0]===4){
          arrRoma.push("CD");
        } else{
          if(arrNumber[0]>=5){
            arrRoma.push("D");
            arrNumber[0]=arrNumber[0]%5;
          }
          for(let i=0; i<arrNumber[0];i++){
            arrRoma.push("C");
          }
        }
      } else if(arrNumber.length===2 && arrNumber[0]!==0){
        if(arrNumber[0]===9){
          arrRoma.push("XC");
        } else if(arrNumber[0]===4){
          arrRoma.push("XL");
        } else{
          if(arrNumber[0]>=5){
            arrRoma.push("L");
            arrNumber[0]=arrNumber[0]%5;
          }
          for(let i=0; i<arrNumber[0];i++){
            arrRoma.push("X");
          }
        }
      } else if(arrNumber.length===1 && arrNumber[0]!==0){
        if(arrNumber[0]===9){
          arrRoma.push("IX");
        } else if(arrNumber[0]===4){
          arrRoma.push("IV");
        } else{
          if(arrNumber[0]>=5){
            arrRoma.push("V");
            arrNumber[0]=arrNumber[0]%5;
          }
          for(let i=0; i<arrNumber[0];i++){
            arrRoma.push("I");
          }
        }
      }
      arrNumber.shift();
    }
  
   return arrRoma.join("");
  }
  
  console.log(convertToRoman(501));