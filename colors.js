const randomColor=function(){
    const hex ='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)]
    }
    return color;
  };
  
  let intervalID;
  const startChangingColor=function(){
    if(!intervalID){
     
    intervalID= setInterval(changebgcolor,1000);
    }
    
     function changebgcolor(){
    document.body.style.backgroundColor=randomColor();                // if we click again and again start means there would be no prblm bcz no use case ila..and over 
                                                                     // over mem use madthila
     }
  };
  const stopChangingColor=function(){
    clearInterval(intervalID);
    intervalID=null;
  };
  document.querySelector("#start").addEventListener('click',startChangingColor);
  document.querySelector("#stop").addEventListener('click',stopChangingColor);