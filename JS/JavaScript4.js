let nome = prompt("What's your name?");
let anoatual = parseFloat(prompt("Em que ano estamos?"));
let ano = parseFloat(prompt("In what year you were born?"));
let mes = parseFloat(prompt("In what month?"));
let day = parseFloat(prompt("In what day?"));
let idade = anoatual - ano;

alert(nome + ", you gonna be " + idade + " in " + anoatual);