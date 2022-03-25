let btn=document.getElementById('btn');
var count=0,count1=0;
const arr=["Rock","Pappers","Scissors"];
btn.addEventListener('click',()=>{
    let p2=document.getElementById('counter1');
    let p1=document.getElementById('counter');
    let ind=Math.floor(Math.random()*3);
    let ele=arr[ind];
    // console.log(ele);
    let element=document.getElementById('element');
    element.innerText=ele;
    // alert(ele);
    if(ele==="Pappers")
    {
        count1++;
        p2.innerText=count1;
    }
    else if(ele==="Scissors")
    {
        count++
        p1.innerText=count;
    }
    if(count===3)
    {
        // p1.innerText = 0;
        alert("Player 1 Won");
    }
    else if(count1===3)
    {
        // p2.innerText = 0
        alert("Player 2 Won");
    }
});
let btn1=document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    // const arr=["Rock","Pappers","Scissors"];
    let p2=document.getElementById('counter1');
    let p1=document.getElementById('counter');
    var ind=Math.floor(Math.random()*arr.length);
    let ele=arr[ind];
    // console.log(ele);
    // p2.innerText=ele;
    let element=document.getElementById('element');
    element.innerText=ele;
    if(ele==="Rock")
    {
        count++;
        p1.innerText=count;
    }
    if(ele==="Scissors")
    {
        count1++
        p2.innerText=count1;
    }
    if(count===3)
    {
        alert("Player 1 Won");
    }
    else if(count1===3)
    {
        alert("Player 2 Won");
    }
});
let btn2=document.getElementById('btn2');
btn2.addEventListener('click',()=>{
    // const arr=["Rock","Pappers","Scissors"];
    let p2=document.getElementById('counter1');
    let p1=document.getElementById('counter');
    var ind=Math.floor(Math.random()*arr.length);
    let ele=arr[ind];
    // console.log(ele);
    // p2.innerText=ele;
    let element=document.getElementById('element');
    element.innerText=ele;
    if(ele==="Pappers")
    {
        count++;
        p1.innerText=count;
    }
    if(ele==="Rock")
    {
        count1++
        p2.innerText=count1;
    }
    if(count===3)
    {
        alert("Player 1 Won");
    }
    else if(count1===3)
    {
        alert("Player 2 Won");
    }
});
let reload=document.getElementById('reload');
// reload.innerText="Restart";
reload.addEventListener('click',()=>{
    window.location.reload();
});
