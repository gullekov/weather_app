let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let des = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");



inputval.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btn.click();
        
    }
})

apik = "3045dd712ffe6e702e3245525ac7fa38";


function convertion(val){
    return (val - 273).toFixed(2);
}


btn.addEventListener("click", function(){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputval.value +
        "&appid=" +
        apik
    )
    .then((res)=>res.json())
    .then((data)=>{

        var nameval = data ["name"];
        var des = data["weather"][0]["description"];
        var teptrature = data ["main"]["temp"];
        var wndsped  = data ["wind"]["speed"]

        city.innerHTML = `<span>${nameval}</span> Howanyn yagdayy`;
        temp.innerHTML = `Yssylyk derejesi <span>${convertion(teptrature)} C </span>`;
        des.innerHTML = `Howanyn yagdayy: <span>${des}</span>`;
        wind.innerHTML = `Semal tizligi: <span>${wndsped} km/h </span>`;
    })

    .catch((err)=>alert("Giren saheriniz yok"));


})

//  "https://api.openweathermap.org/data/2.5/weather?q=" +
// inputval.value +
// "&appid=" +
// apik

// apik = "3045dd712ffe6e702e3245525ac7fa38";



