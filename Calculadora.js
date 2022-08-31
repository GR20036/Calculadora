const CalculadoraFactory = () => {

/*this.crearCalculadora = function(tipo){
    if(tipo === "Clasica"){
        return CalculadoraClasica();
    }else if(tipo === "Cientifica"){
        return CalculadoraCientifica();
    };
}

function Calculadora(){*/

var operandoa;
var operandob;
var operacion;
var resultado = document.getElementById('Pantalla');
var reset = document.getElementById('reset');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
var punto = document.getElementById('pun');
var mas = document.getElementById('mas');
var menos = document.getElementById('min');
var por = document.getElementById('por');
var div = document.getElementById('div');
var igual = document.getElementById('Ig');
var pot = document.getElementById('Pot');
var raiz = document.getElementById('Raiz');
var v_a = document.getElementById('V_abs');

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
punto.onclick = function(e){
    f_cero();
}
reset.onclick = function(e){
    resetear();   
}

mas.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
menos.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
por.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
div.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
pot.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "^";
    limpiar();
}
raiz.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "√";
    resolver();
}
v_a.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "|";
    resolver();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
const limpiar = () => {
    resultado.textContent = "";
}
const resetear = () =>{
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "hola";
}

const resolver = () =>{
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "^":
        res = Math.pow(parseFloat(operandoa),parseFloat(operandob));
        break;
      case "√":
        res = Math.sqrt(parseFloat(operandoa));
        break;
      case "|":
        res = Math.abs(parseFloat(operandoa));
        break;
    }
    resetear();
    resultado.textContent = res;
  }
/*function CalculadoraClasica(){
    return new Calculadora();
}

function CalculadoraCientifica(){
    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
          case "^":
            res = Math.pow(parseFloat(operandoa),parseFloat(operandob));
            break;
          case "√":
            res = Math.sqrt(parseFloat(operandoa));
            break;
          case "|":
            res = Math.abs(parseFloat(operandoa));
            break;
        }
        resetear();
        resultado.textContent = res;
      }
    return {Calculadora, resolver};
}*/
 return {resolver};
};
/*}
var Cal_Factory = CalculadoraFactory();
var C_Clasic = Cal_Factory.crearCalculadora("Clasica");
var C_Cientifica = Cal_Factory.crearCalculadora("Cientifica");*/
