let num=1234;
let rev = 0;
let lastDigit;
let C_num=num;
while(num ===0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}
if(C_num==rev){console.log("Yes");}
else{console.log("No");}