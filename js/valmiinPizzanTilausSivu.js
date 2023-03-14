document.addEventListener("DOMContentLoaded", Maara(null));
document.addEventListener("pageshow", Maara(null))

function Maara(pizzaNro){
        if(localStorage.getItem(pizzaNro) > 0){
         document.getElementById(pizzaNro).innerHTML = localStorage.getItem(pizzaNro);
        }else{
            document.getElementById(pizzaNro).innerHTML = '0';
        }
}

function LisaaPizza(pizzaNro){
    localStorage.setItem(pizzaNro, Number(localStorage.getItem(pizzaNro)) + 1);
    Maara(pizzaNro);
}
function VahennaPizza(pizzaNro){
    if(localStorage.getItem(pizzaNro) > 0){
        localStorage.setItem(pizzaNro, Number(localStorage.getItem(pizzaNro)) - 1);
    }
    Maara(pizzaNro);
}