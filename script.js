document.getElementById("btn").onclick = function() {
    var contAguia=0;
    var contTubarao=0;
    var contLobo=0;
    var contGato=0;
    var radios = document.getElementsByClassName("p")
    
    for(var i=0; i<radios.length; i++) {
       if(radios[i].checked) {
          if(radios[i].value === "i") {
             contAguia++;
          } else if (radios[i].value === "a") {
             contTubarao++;
          } else if (radios[i].value === "o") {
             contLobo++;
          } else {
             contGato++;
       }
    }
 }

 contAguia = contAguia*4;
 contGato = contGato*4;
 contLobo = contLobo*4;
 contTubarao = contTubarao*4;



 

   localStorage.setItem('porcAguia', `Seu resultado : ${contAguia} % `) ;    
   localStorage.setItem('porcTubarao', `Tubarão = ${contTubarao} %`) ; 
   localStorage.setItem('porcLobo', `Lobo = ${contLobo} %`) ; 
   localStorage.setItem('porcGato', `Gato = ${contGato } %`) ; 
           
 

 const mostrarResultado = Math.max(contAguia, contGato, contLobo, contTubarao);
 switch(mostrarResultado){
    case contAguia:
       window.open("aguia.html");
       break;
       case contLobo:
          window.open("lobo.html");
          break;
          case contGato:
             window.open("gato.html");
             break;
             case contTubarao:
                window.open("tubarao.html");
                break;
    }
}

