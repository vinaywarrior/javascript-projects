 const clock=document.querySelector('#clock')
 let date = new Date();
 console.log(date.toLocaleTimeString());

 setInterval(function(){            // it is used u can see until where ever u want
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString();
 },1000);                                               // hadler is callback
