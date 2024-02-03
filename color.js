const buttons=document.querySelectorAll('.button');  // selects all the buttons
 const body=document.querySelector("body");

 buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);  // where the events coming from
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id;  // e.target.id
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;  // e.target.id
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;  // e.target.id
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;  // e.target.id
        }
    });
 });
