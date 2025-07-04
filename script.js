let windows=""; //blank string for the output window 
let btns= document.querySelectorAll('.button');// holds array of all buttons
let displayWin = document.getElementById('input-window');


    btns.forEach(btn => {//iterate thru elements of a nodelist
        btn.addEventListener('click', function(event){//add event listener 
            if(btn.value=='C'){
                windows="";
                displayWin.value=windows;
            }
            else if(btn.value=="="){
                windows = eval(windows);//eval() function evaluates the string 
                displayWin.value=windows;
            }
            else{
                 console.log(event.target.textContent); 
                let CurrentContent=event.target.textContent;
                windows+=CurrentContent;
                console.log('Output : ',windows);
                displayWin.value=windows;
            }
           
        });
    });


