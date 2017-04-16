function SurveyAnswer(name, photo, scores) {
this.name = name;
this.photo = photo;
this.scores = [];

};

var data = document.getElementById("sel1");
			var answer = data.options[data.selectedIndex].value;
			console.log(answer);