questions = [
	{
		"question": "La norme HTML5 ne nécessite pas de guillemets autour des valeurs d'attribut.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>L'utilisation de guillemets est courante. L'omission de guillemets peut produire des erreurs"
	},
	
	{
		"question": "L'élément <div> est un élément non sémantique.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>L’élément <div> n’indique rien sur son contenu"
	},
	
	{
		"question": "Les éléments en ligne sont normalement affichés sans commencer une nouvelle ligne.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Un élément en ligne ne démarre pas sur une nouvelle ligne et ne prend que la largeur nécessaire"
	},
	
	{
		"question": "Un <iframe> est utilisé pour afficher une page Web dans une page Web.",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Un <iframe> est utilisé pour incorporer un autre document dans le document HTML actuel"
	},
	
	{
		"question": "L'élément <body> représente le contenu principal du document HTML",
		"reponse": ["Vrai", "Faux"],
		"argument": "<br><br>Il ne peut y avoir qu'un élément <body> par document"
	},
];

function makeForm() {
	
	newForm = document.createElement( "form" );
	document.querySelector(".container").appendChild(newForm);
	questions.map((question, qIndex) => {
		
		questionElement = document.createElement("p");
		newQuestion = document.createTextNode(questions[qIndex].question);
		
		newForm.appendChild(questionElement);
		questionElement.appendChild(newQuestion);
		
		[['true', 'Vrai'], ['false', 'Faux']].map(answer => {
			
			radioElement = document.createElement( "input" );
			radioElement.setAttribute("type", "radio");
			radioElement.setAttribute("id", `sp-${qIndex}-${answer[0]}`);
			radioElement.setAttribute("name", `q${qIndex}`);
			radioElement.setAttribute( "value", `${answer[0]}`);
			
			label = document.createElement('label');
			label.setAttribute( "for", `sp-${ qIndex }-${answer[0]}`);
			label.innerText = answer[1];
			
			questionElement.appendChild(radioElement);
			questionElement.appendChild(label);
		})
			newElement = document.createElement("div");
			newElement.id = "submitAfter";			
			
			newParagraph1 = document.createElement("p");
			newParagraph1.id = "correctNumber";
			
			newParagraph2 = document.createElement("p");
			newParagraph2.id = "message";
			
			newButton = document.createElement("input");
			newButton.id = "button";
			newButton.type = "button";
			newButton.value = "Voir resultat";
			newButton.onclick = function(){check()};

			
	})
		newElement.appendChild(newParagraph1);
		newElement.appendChild(newParagraph2);
		newForm.appendChild(newButton);
		newForm.appendChild(newElement);
}

	function check(){
		
		correct = 0;
		argument = [];
		
		question0 = document.questions.q0.value;
		question1 = document.questions.q1.value;
		question2 = document.questions.q2.value;
		question3 = document.questions.q3.value;
		question4 = document.questions.q4.value;
		
		if (question0 === questionnaire[0].reponse[0]) {
			correct++;
		} else {
			argument.push(questionnaire[0].argument);
		}
		
		if (question1 == questionnaire[0].reponse[0]) {
			correct++;
		} else {
			argument.push(questionnaire[1].argument);
		}
		if (question2 == questionnaire[0].reponse[0]) {
			correct++;
		} else {
			argument.push(questionnaire[2].argument);
		}
		if (question3 == questionnaire[0].reponse[0]) {
			correct++;
		} else {
			argument.push(questionnaire[3].argument);
		}
		if (question4 == questionnaire[0].reponse[1]) {
			correct++;
		} else {
			argument.push(questionnaire[4].argument);
		}
		
		document.getElementById("submitAfter").style.visibility = "visible";
		document.getElementById("correctNumber").innerHTML = "Vous avez " + correct + " bonne(s) reponse(s).";
		document.getElementById("message").innerHTML = argument;
	}
	
