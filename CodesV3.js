window.addEventListener('load', function() {
init();
});

var jsonChats;
var index = 0;

function init(){
var Chats = '[{"nom": "Félicité","age" : 10,"race" : "chat de gouttière","aime" : ["manger du thon","grimper aux arbres","dormir"],"poids": 3.5},{"nom": "Félix","age" : 6,"race" : "siamois","aime" : ["se lécher","manger des croquettes","dormir"],"poids": 3.0}]';
jsonChats = JSON.parse(Chats);
}

function Aff_1(){
		document.getElementById("fnom").value = jsonChats[0].nom;
		document.getElementById("fage").value = jsonChats[0].age;
		document.getElementById("frace").value = jsonChats[0].race;
		document.getElementById("faime1").value = jsonChats[0].aime[0];
		document.getElementById("faime2").value = jsonChats[0].aime[1];
		document.getElementById("faime3").value = jsonChats[0].aime[2];
		document.getElementById("fpoids").value = jsonChats[0].poids;	
		index = 0;
}

function Aff_2(){
		document.getElementById("fnom").value = jsonChats[1].nom;
		document.getElementById("fage").value = jsonChats[1].age;
		document.getElementById("frace").value = jsonChats[1].race;
		document.getElementById("faime1").value = jsonChats[1].aime[0];
		document.getElementById("faime2").value = jsonChats[1].aime[1];
		document.getElementById("faime3").value = jsonChats[1].aime[2];
		document.getElementById("fpoids").value = jsonChats[1].poids;	
		index = 1;		
}

function Aff_3(){
		var TxtChats = JSON.stringify(jsonChats);
		document.getElementById("ResulTXT").innerHTML = TxtChats;
}

function Nouveau(){
	var NewChat = '{"nom": "...","age" : 0,"race" : "...","aime" : ["...","...","..."],"poids": 0}';
	// alert("new");
	jsonChat = JSON.parse(NewChat);	
	jsonChat.nom = document.getElementById("fnom").value;
	jsonChat.age = document.getElementById("fage").value;
	jsonChat.race = document.getElementById("frace").value;
	jsonChat.aime[0] = document.getElementById("faime1").value;
	jsonChat.aime[1] = document.getElementById("faime2").value;
	jsonChat.aime[2] = document.getElementById("faime3").value;
	jsonChat.poids = document.getElementById("fpoids").value;	
	jsonChats.push(jsonChat);
}

function Afficher(P){
	// alert("Afficher "+ P +" Index "+ index + " nom : "+ jsonChats[index].nom);
	// alert("Afficher "+ P +" Index "+ index + " Taille : "+jsonChats.length);
	var Taille = jsonChats.length;
	index = index + P;
	if(index >= Taille) index = 0;
	if(index < 0 ) index = Taille -1;
	document.getElementById("fnom").value = jsonChats[index].nom;
	document.getElementById("fage").value = jsonChats[index].age;
	document.getElementById("frace").value = jsonChats[index].race;
	document.getElementById("faime1").value = jsonChats[index].aime[0];
	document.getElementById("faime2").value = jsonChats[index].aime[1];
	document.getElementById("faime3").value = jsonChats[index].aime[2];
	document.getElementById("fpoids").value = jsonChats[index].poids;		
}

function Modif(){
	// alert("Afficher "+ P +" Index "+ index + " nom : "+ jsonChats[index].nom);
	jsonChats[index].nom = document.getElementById("fnom").value;
	jsonChats[index].age = document.getElementById("fage").value;
	jsonChats[index].race = document.getElementById("frace").value;
	jsonChats[index].aime[0] = document.getElementById("faime1").value;
	jsonChats[index].aime[1] = document.getElementById("faime2").value;
	jsonChats[index].aime[2] = document.getElementById("faime3").value;
	jsonChats[index].poids = document.getElementById("fpoids").value;		
	
}