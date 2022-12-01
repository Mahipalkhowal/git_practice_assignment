1.Prime Number

num=13;
c=0;
for(i=0;i<num;i++){
    if(num%i==0){
	c++;
}
}
if(c==2){
    console.log("prime")
}else{
    console.log("not prime")
}

2.Palindrome Problem
N=5;
a="naman"
b="";
for(i=N;i>=0;i--){
    b+=a[i];
}
if(b==a){
    console.log("Palindrome")
}else{
    console.log("not palindrome")