const MbtiModule = (function() {
	let types = {
		ISTJ: {description: "Mengurangi gatal, melembabkan, menyehatkan bagi kulit!", site: "tokopedia-eterisofficial.html"},
		ISFJ: {description: "Dutiful, Practical, Supportive, Meticulous", site: "tokopedia.link/eterisofficial"},
		INFJ: {description: "Devoted, Innovative, Idealistic, Compassionate", site: "tokopedia.link/eterisofficial"},
		INTJ: {description: "Independent, Innovative, Analytical, Purposeful", site: "tokopedia.link/eterisofficial"},
		ISTP: {description: "Expedient, Practical, Objective, Adaptable", site: "tokopedia.link/eterisofficial"},
		ISFP: {description: "Tolerant, Realistic, Harmonious, Adaptable", site: "tokopedia.link/eterisofficial"},
		INFP: {description: "Insightful, Innovative, Idealistic, Adaptable", site: "tokopedia.link/eterisofficial"},
		INTP: {description: "Questioning, Innovative, Objective, Abstract", site: "tokopedia.link/eterisofficial"},
		ESTP: {description: "Energetic, Practical, Pragmatic, Spontaneous", site: "tokopedia.link/eterisofficial"},
		ESFP: {description: "Spontaneous, Practical, Friendly, Harmonious", site: "tokopedia.link/eterisofficial"},
		ENFP: {description: "Optimistic, Innovative, Compassionate, Versatile", site: "tokopedia.link/eterisofficial"},
		ENTP: {description: "Risk-Taking, Innovative, Outgoing, Adaptable", site: "tokopedia.link/eterisofficial"},
		ESTJ: {description: "Organized, Practical, Logical, Outgoing", site: "tokopedia.link/eterisofficial"},
		ESFJ: {description: "Friendly, Practical, Loyal, Organized", site: "tokopedia.link/eterisofficial"},
		ENFJ: {description: "Friendly, Innovative, Supportive, Idealistic", site: "tokopedia.link/eterisofficial"},
		ENTJ: {description: "Determined, Innovative, Strategic, Outgoing", site: "tokopedia.link/eterisofficial"}
	};
	let e, i, s, n, t, f, j, p;
	let type;
	
	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}
	
	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-description").innerHTML = types[type].description;
		document.querySelector("#type-site").href = types[type].site;
		document.querySelector("#type-details").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
		document.querySelector("#results").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });