let puntUser = 0;
let puntComp= 0;
const puntUser_span = document.getElementById("puntos-user");
const puntComp_span = document.getElementById("puntos-comp");
const tablero_div = document.querySelector(".tablero");
const resultado_p = document.querySelector(".resultado > p");
const piedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tijera_div = document.getElementById("s");

function getDecisionComp(){
    const decisiones = ['r', 'p', 's'];
    const numRandom = Math.floor(Math.random() * 3);
    return decisiones[numRandom];
}

function convertirLetra(letra){
    if(letra === 'r') return "Piedra";
    if(letra === 'p') return "Papel";
    else return "Tijera";
}

function gana(user, comp){
    const userChiquito = "user".fontsize(3).sub();
    const compChiquito = "comp".fontsize(3).sub();
    const decisionUser_div = document.getElementById(user);
    puntUser++;
    puntUser_span.innerHTML = puntUser;
    puntComp_span.innerHTML = puntComp;
    resultado_p.innerHTML = `${convertirLetra(user)}${userChiquito} le gana a ${convertirLetra(comp)}${compChiquito}. Ganaste!`;
    decisionUser_div.classList.add('borde-verde');
    setTimeout(() => decisionUser_div.classList.remove('borde-verde'), 300);
}

function pierde(user, comp){
    const userChiquito = "user".fontsize(3).sub();
    const compChiquito = "comp".fontsize(3).sub();
    const decisionUser_div = document.getElementById(user);
    puntComp++;
    puntUser_span.innerHTML = puntUser;
    puntComp_span.innerHTML = puntComp;
    resultado_p.innerHTML = `${convertirLetra(user)}${userChiquito} pierde contra ${convertirLetra(comp)}${compChiquito}. Perdiste...`;
    decisionUser_div.classList.add('borde-rojo');
    setTimeout(() => decisionUser_div.classList.remove('borde-rojo'), 300);
}

function empate(user, comp){
    const decisionUser_div = document.getElementById(user);
    const userChiquito = "user".fontsize(3).sub();
    const compChiquito = "comp".fontsize(3).sub();
    resultado_p.innerHTML = `${convertirLetra(user)}${userChiquito} es igual a ${convertirLetra(comp)}${compChiquito}. Es un Empate.`;
    decisionUser_div.classList.add('borde-gris');
    setTimeout(() => decisionUser_div.classList.remove('borde-gris'), 300);
}

function juego(decisionUser){
    const decisionComp = getDecisionComp();
   switch(decisionUser + decisionComp){
        case "rs":
        case "pr":
        case "sp":
            gana(decisionUser, decisionComp);
            break;    
        case "rp":
        case "ps":
        case "sr":
            pierde(decisionUser, decisionComp);
            break;
        case "rr":
        case "pp":
        case "ss":
            empate(decisionUser, decisionComp);
            break;             
   }
}

function main(){
    piedra_div.addEventListener('click', () => juego("r"));
    papel_div.addEventListener('click', () => juego("p"));
    tijera_div.addEventListener('click', () => juego("s"));
}

main();
