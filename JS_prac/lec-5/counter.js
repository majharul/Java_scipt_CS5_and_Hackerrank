
if (!localStorage.getItem('counter'))
{
    localStorage.setItem('counter',0);
}

function count(){
    let counter = localStorage.getItem('counter')
    counter++;

    document.querySelector('h1').innerHTML=counter
    
    
    localStorage.setItem('counter',counter)
  
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#start').onclick = count;
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('#reset').onclick = localStorage.setItem('counter',0)
    

   setInterval(count,1000)


});

