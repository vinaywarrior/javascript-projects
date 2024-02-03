 const  form=document.querySelector('form')

 form.addEventListener('submit',function(e){
    e.preventDefault()

    const height= parseInt(document.querySelector('#height').value) // parse int used bcz if we get value in strings then we can find or get that in integer
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')
    if( height === ''|| height < 0|| isNaN(height)){
             results.innerHTML = `pls enter a valid height ${height}`;
    }else if( weight === ''|| weight< 0|| isNaN(weight)){
        results.innerHTML = `pls enter a valid height ${weight}`;
} else{
    const bmi= (weight / ((height*height)/10000)).toFixed(2) // now show the results
    const category = getBMICategory(bmi);
    results.innerHTML= `<span> BMI: ${bmi}</span> <br>  Category: ${category}`;
}
 });

 function getBMICategory(bmi) {
    if (bmi < 18.6) {
        return 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        return 'Normal Range';
    } else {
        return 'Overweight';
    }
}