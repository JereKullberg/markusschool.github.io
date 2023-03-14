document.addEventListener("DOMContentLoaded", Maara);

function Maara(){
    if(localStorage.getItem('pizza') === 0){
        document.getElementById('pizza1Kpl').innerHTML = '0'
    }else{
        document.getElementById('pizza1Kpl').innerHTML = localStorage.getItem('pizza1Kpl');
    }
}

function LisaaPizza(){

    localStorage.setItem('pizza1Kpl', localStorage.getItem('pizza1Kpl') + 1);
    Maara();
}