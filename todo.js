let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener("click",function(){

let nw=document.createElement('li');
nw.innerText=inp.value;
ul.appendChild(nw);

let dlbtn=document.createElement('button');
dlbtn.innerText="delete";
nw.appendChild(dlbtn);
inp.value="";
});


let bt=document.querySelector('ul');
bt.addEventListener("click",function(event){
    // console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        // console.log( event.target.parentElement);
                event.target.parentElement.remove();
        
    }
})








// let dltbtn=document.querySelectorAll('.dlt');
// console.dir(dltbtn);                                             // APPLY EVENT DELIGATION TO STOP THIS..

// for(btn of dltbtn){
//     btn.addEventListener("click",function(){
// let p= this.parentElement;
// p.remove();
//     });
// }
