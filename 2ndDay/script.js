let wrt2Var=document.querySelector(".wrt2");
wrt2Var.addEventListener("mouseenter",function()
{
    wrt2Var.style.borderBottom= '2px solid white';
})
wrt2Var.addEventListener("mouseleave",function(){
    wrt2Var.style.borderBottom=''
    
})
let svar=document.querySelector('.search i');
svar.addEventListener('mouseenter',function()
{
    svar.style.background='coral'
})
svar.addEventListener('mouseleave',function()
{
    svar.style.background=''
})
let input=document.querySelector('.search input');
svar.addEventListener('click',function()
{
     input.value='';
})

let btnVar=document.querySelector(".btn");

btnVar.addEventListener("mouseenter",function()
{
   btnVar.style.background='lightblue'
   

})
btnVar.addEventListener("mouseleave",function()
{
   btnVar.style.background=''
   

})

let mvar=document.querySelector('.more');
mvar.addEventListener('mouseenter',function(){
    mvar.style.color='lightblue'
    create();
})
mvar.addEventListener('mouseleave',function(){
    mvar.style.color=''
})
let wr3Var=document.querySelector(".wrt3")
wr3Var.addEventListener('mouseenter',function(){
    wr3Var.style.color='skyblue'
})
wr3Var.addEventListener('mouseleave',function(){
    wr3Var.style.color=''
})

let wr4Var=document.querySelector(".wrt4")
wr4Var.addEventListener('mouseenter',function(){
    wr4Var.style.color='skyblue'
})
wr4Var.addEventListener('mouseleave',function(){
    wr4Var.style.color=''
})

let wr5Var=document.querySelector(".wrt5")
wr5Var.addEventListener('mouseenter',function(){
    wr5Var.style.color='skyblue'
})
wr5Var.addEventListener('mouseleave',function(){
    wr5Var.style.color=''
})

let wr6Var=document.querySelector(".wrt6")
wr6Var.addEventListener('mouseenter',function(){
    wr6Var.style.color='skyblue'
})
wr6Var.addEventListener('mouseleave',function(){
    wr6Var.style.color=''
})

let wr7Var=document.querySelector(".wrt7")
wr7Var.addEventListener('mouseenter',function(){
    wr7Var.style.color='skyblue'
})
wr7Var.addEventListener('mouseleave',function(){
    wr7Var.style.color=''
})

let wr8Var=document.querySelector(".wrt8")
wr8Var.addEventListener('mouseenter',function(){
    wr8Var.style.color='skyblue'
})
wr8Var.addEventListener('mouseleave',function(){
    wr8Var.style.color=''
})

let wr9Var=document.querySelector(".wrt9")
wr9Var.addEventListener('mouseenter',function(){
    wr9Var.style.color='skyblue'
})
wr9Var.addEventListener('mouseleave',function(){
    wr9Var.style.color=''
})

let wr10Var=document.querySelector(".wrt10")
wr10Var.addEventListener('mouseenter',function(){
    wr10Var.style.color='skyblue'
})
wr10Var.addEventListener('mouseleave',function(){
    wr10Var.style.color=''
})

let wr11Var=document.querySelector(".wrt11")
wr11Var.addEventListener('mouseenter',function(){
    wr11Var.style.color='skyblue'
})
wr11Var.addEventListener('mouseleave',function(){
    wr11Var.style.color=''
})
let input1Var=document.querySelector('.email');
let input2Var = document.querySelector('.password');

let bt1Var=document.querySelector('.btn1');
  bt1Var.addEventListener('click',function(){
        input1Var.value='';
        input2Var.value='';
     alert('successfully loged in');
  })
  let otpvar=document.querySelector('._otp')
  otpvar.addEventListener('click',function(){
      alert('6 digits pin sended to registered Mobile number')
  })