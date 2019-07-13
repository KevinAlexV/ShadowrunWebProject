var characterSheet;

// Initialization Stuff 
$(document).ready(function(){
	characterSheet = new CharacterSheet();

	document.getElementById("addSkill").onclick = function() {
		
		do {
			var skillName = window.prompt("Enter a Skill:", "");
			if (skillName === "") alert("Please enter a Valid Skill Name");
		} while (skillName === "");
		var skillScore = window.prompt("Enter a Skill Score:", "");
		
		var skill = characterSheet.addSkill(skillName, skillScore);
		var skillElement = document.createElement("tr");
		var name = document.createElement("th");
		var nameText = document.createTextNode(skill.name);
		name.appendChild(nameText);
		
		var score = document.createElement("td");
		var scoreInput = document.createElement("input");
		scoreInput.class = "inputField";
		scoreInput.type = "number";
		scoreInput.pattern = "[0-9]+";
		scoreInput.name = skill.name;
		scoreInput.value = skill.score;
		score.appendChild(scoreInput);
		
		skillElement.appendChild(name);
		skillElement.appendChild(score);
		
		document.getElementById("skillstable").appendChild(skillElement);
	};
});
