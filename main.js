questionnaire = [
	{
		"question": "La norme HTML5 ne nécessite pas de guillemets autour des valeurs d'attribut.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>L'utilisation de guillemets est courante. L'omission de guillemets peut produire des erreurs",
	},

	{
		"question": "L'élément &lt;div&gt; est un élément non sémantique.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>L’élément &lt;div&gt; n’indique rien sur son contenu",
	},

	{
		"question": "Les éléments en ligne sont normalement affichés sans commencer une nouvelle ligne.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Un élément en ligne ne démarre pas sur une nouvelle ligne et ne prend que la largeur nécessaire",
	},

	{
		"question": "Un &lt;iframe&gt; est utilisé pour afficher une page Web dans une page Web.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Un &lt;iframe&gt; est utilisé pour incorporer un autre document dans le document HTML actuel",
	},

	{
		"question": "L'élément <body> représente le contenu principal du document HTML",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Il ne peut y avoir qu'un élément &lt;body&gt; par document"
	},
];

var newTitle = document.createElement("h1");
var newFormu = document.createElement("form");

function writingCool() {
var newPara = document.createElement("p");
for (var i= 0; i < questionnaire.length; i++) {
	newPara.classList = "questions";
	newPara.innerHTML = questionnaire[0].question;
};

var newInput = document.createElement("input");
for (var i= 0; i < questionnaire.length; i++) {
	newInput.type = "radio";
	newInput.id = "sp";
	newInput.name = "questions1"
	newInput.innerHTML = questionnaire[0].question;
};
};



function check(){

	var correct = 0;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	
	if (question1 === "true") {
		correct++;
	}
	
	if (question2 == "true") {
		correct++;
	}	
	if (question3 == "true") {
		correct++;
	}
	if (question4 == "true") {
		correct++;
	}
	if (question5 == "false") {
		correct++;
	}
	
	var argument = [];
	
	if (question1 === "false") {
		argument.push(questionnaire[0].argument);
	}
	
	if (question2 == "false") {
		argument.push(questionnaire[1].argument);
	}	
	if (question3 == "false") {
		argument.push(questionnaire[2].argument);

	}
	if (question4 == "false") {
		argument.push(questionnaire[3].argument);
	}
	if (question5 == "false") {
		argument.push(questionnaire[4].argument);
	};

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "Vous avez " + correct + " bonne(s) reponse(s).";
	document.getElementById("message").innerHTML = argument;
};
