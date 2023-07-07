// imports all commands and his settings
import {objControl, objDraw, objUcontrol, objUlocate, keyCommands, keywords} from "../scripts/ObjectsMlog"
// cresting arrays for arrors
let jumpLabels1 = [];
let jumpLabels2 = [];
let Errors = [];

// getting textarea text-code
const textarea = document.getElementById('codeInput');
  const code = textarea.value.trim();
  const lines = code.split('\n');

// creating function with all code
const HightLighting_Errors = () => {
// creating iteration of all lines
	for(let iteration1 = 0; iteration1 < lines.length; iteration1++){
		// gettings all words in line
		let words = lines[iteration1].split(' ');
  let firstWord = words[0];

		// checking if keyCommands have firstWord
		if(!keyCommands.contains(firstWord)){
			Errors.push({notfound: firstWord, message: "this command not found in 'keyCommands'", line: iteration1});
			words[0] = `<span id="errors">${words[0]}</span>`
		}else{
			words[0] = `<span id="command">${words[0]}</span>`

			// iteration of all words to find errors
			for(let iteration2 = 0; iteration2 < words.length; iteration2++){
				// if words starts on @
				if(words[iteration2].startsWith("@")){
					// if keywords allowed its this word
					if(keyCommands.firstWord.w[iteration2 + 1].keywords == true){
						words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
						// if keywords not recomended in this word
					}else if(keyCommands.firstWord.w[iteration2 + 1].keywords == "notRecomended"){
						words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						Errors.push({notfound: words[iteration2], message: "this word not allowed here!", line: iteration1});
						// if keyword not allowed in this words
					}else{
						// if allowedParams == array
						if(isArray(keyCommands.firstWord.w[iteration2 + 1].allowedParams)){
							// if allowedParams not include word
							if(!keyCommands.firstWord.w[iteration2 + 1].allowedParams.contains(words[iteration2])){
								Errors.push({notfound: words[iteration2], message: "this keyword not allowed here!", line: iteration1});
								// if allowedParams include word
							}else if(keyCommands.firstWord.w[iteration2 + 1].allowedParams.contains(words[iteration2])){
								words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
							}
							// if keywords and allowedParams == false 
						}else if(keyCommands.firstWord.w[iteration2 + 1].allowedParams == false){
							Errors.push({notfound: words[iteration2], message: "keywords not allowed here!", line: iteration1});
						};
					};
					console.log(Errors);


				};


				

			}
		}


	}
}