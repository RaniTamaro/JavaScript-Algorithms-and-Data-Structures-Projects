function checkCashRegister(price, cash, cid) {
    let change = [];
    let status ="";
    let money=[0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let difference = cash-price;
  
    for(let i=money.length-1; i>=0; i--){
      let quantity=0;
      while(money[i]<=difference && cid[i][1]>0){
        cid[i][1]=Math.round((cid[i][1]-money[i])*100)/100;
        difference=Math.round((difference-money[i])*100)/100;
        quantity+=1;
      }
      change.unshift([cid[i][0], quantity*money[i]]);
    }
  
    function equalZero(arr){
      for(let i=0; i<arr.length;i++){
        if(arr[i][1]!==0)
          return false;
      }
      return true;
    }
  
    if(change.length===0 || difference!==0){
      status="INSUFFICIENT_FUNDS";
      change=[];
    }
    else if(equalZero(cid))
      status="CLOSED";
    else{
      status="OPEN";
      let newChange=[];
      for(let i=0; i<change.length;i++){
        if(change[i][1]!==0)
          newChange.unshift(change[i]);
      }
      change=newChange;
    }
  
    return {status: status, change: change};
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));