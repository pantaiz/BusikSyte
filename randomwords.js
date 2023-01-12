

var a= document.getElementById('textOutput') ;
var generationButton=document.getElementById('generation');
//.addEventListener('click',function (e)
generationButton.addEventListener('click',randomLog);
randomLog();
function randomLog() {
var randomBodyParts = ["пятка","щёчка","бровь","ресничка","ступня","нога","ягодичная мышца","грудная клетка","спина","рука","шея","голова","ушная раковина"];
var randomAdjectives = ["ангельская","божественная","безупречная","бесподобная","великолепная","восхитительная","возбуждающая","грациозная","женственная","завораживающая","зажигательная","изумительная","красивая","классная","манящая"];

var randomInsult = "Твоя " + randomOutput(randomBodyParts) + " самая " +randomOutput(randomAdjectives) + " " + "!!!";
a.innerHTML=randomInsult;
}


function randomOutput(array) {
    return array[Math.floor(Math.random()*array.length)]
} ;


console.log(a.innerHTML);