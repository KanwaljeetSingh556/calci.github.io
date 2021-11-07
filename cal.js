let number = document.getElementById('number');
buttons = document.querySelectorAll('button');
let ScreenValue = '';
for(item of buttons){
    item.addEventListener('click', e=>{
        buttonText = e.target.innerText;
        number.innerHTML += buttonText
        
        console.log(e.target.buttonText);
        
        if(buttonText=='*'){
            buttonText = '*';
            ScreenValue += buttonText
            number.innerHTML = ScreenValue

            
        }
else if (buttonText == 'C'){
   
    ScreenValue = '';
    number.innerHTML = ScreenValue;

}
else if (buttonText == '='){

number.innerHTML = eval(ScreenValue)

    
   

}
else{
    ScreenValue += buttonText;
    number.innerHTML = ScreenValue;

}


    })
}