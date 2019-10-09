btnSubmit.onclick=function(){
  if (Number(inptIncome.value)<=taxBracket1)
    lblIncome.value=`With your income of ${inptIncome.value}, you are in a tax bracket of ${taxRate1}%`
  else if (Number(inptIncome.value)>taxBracket1 && Number(inptIncome.value)<=taxBracket2) 
    lblIncome.value=`With your income of ${inptIncome.value}, you are in a tax bracket of ${taxRate2}%`
  else 
    lblIncome.value=`With your income of ${inptIncome.value}, you are in a tax bracket of ${taxRate3}%`
  
}
btnGoAgain.onclick=function(){
  inptIncome.value=""
  lblIncome.value=""
}
let taxBracket1=30000
let taxBracket2=99999
let taxRate1=8
let taxRate2=15
let taxRate3=25
