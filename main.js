const form = document.querySelector('form');
form.addEventListener('submit', function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if (height === '' || height <0 || isNaN(height)){
results.innerHTML = `please give valid height ${height}`;
} else if (weight === '' || weight <0 || isNaN(weight)){
results.innerHTML = `please give valid height ${weight}`;
} else {
const bmi = (weight / ((height * height) / 10000)).toFixed(2);
results.innerHTML = `<span>${bmi}</span>`;
if (height === height > 18.9 ){
weightguide.innerHTML = `you are under weight`;
}
if (height === height < 18.9 || height > 24.9 ){
weightguide.innerHTML = `you are perfectly fit`;
}
if (height === height < 24.9 ){
weightguide.innerHTML = `oops you are not fit`;
}
}
});