const ham=document.getElementById('ham');
const div=document.getElementById('div');
let flag=0;
ham.addEventListener('click',(e)=>{
    if(flag % 2){
        div.style.transform=' translateX(-200px)';
    }else{
        div.style.transform=' translateX(0px)';
        div.style.transition='1s';
    }
    flag++;
});