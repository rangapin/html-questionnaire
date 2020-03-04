var quiz = {
	draw : function () {
		
		var wrap = document.getElementById("quiz-wrap");
		
		for (var index in questions) {
			var number = parseInt(index) + 1; 
			var questionWrap = document.createElement("div");
			questionWrap.classList.add("question");
			
			var question = document.createElement("h1");
			question.innerHTML = questions[index]['q'];
			questionWrap.appendChild(question);
			
			for (var oindex in questions[index]['o']) {
				var label = document.createElement("label");
				questionWrap.appendChild(label);
				
				var option = document.createElement("input");
				option.type = "radio";
				option.value = oindex;
				option.required = true;
				option.classList.add("oquiz"); 
				
				option.name = "quiz-" + number;
				label.appendChild(option);
				
				var otext = document.createTextNode(questions[index]['o'][oindex]);
				label.appendChild(otext);
			}
			
			wrap.appendChild(questionWrap);
		}
		
		var submitButton = document.createElement("input");
		submitButton.type = "submit";
		wrap.appendChild(submitButton);
		wrap.addEventListener("submit", quiz.submit);
	},
	
	submit : function (evt) {
		
		evt.preventDefault();
		evt.stopPropagation();
		
		
		var selected = document.querySelectorAll(".oquiz:checked");
		
		var score = 0;
		for (var index in questions) {
			if (selected[index].value == questions[index]['a']) {
				score++;
			}
		}
		
		var total = selected.length;
		
		var html = "<h1>";
		for (var index in questions) {
			if (selected[index].value != questions[index]['a']) {
				html += questions[index]['arg'] + "<br>" + "<br>";
			}
		}
		
		html += "<br><div>Vous avez " + score + " sur " + total + ".</div>";
		document.getElementById("quiz-wrap").innerHTML = html;
	}
}

window.addEventListener("load", quiz.draw);
