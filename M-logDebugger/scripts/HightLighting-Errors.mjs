// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"
// cresting arrays for arrors
let jumpLabels1 = [];
let jumpLabels2 = [];
let Errors = [];
const textarea = document.getElementById('codeInput');
// creating function with all code
let hightLightingErrors = () => {
	// getting textarea text-code
	let formattedCode = " ";
	const textarea = document.getElementById('codeInput');
	const code = textarea.value.trim();
	const lines = code.split('\n');
// creating iteration of all lines
	for(let iteration1 = 0; iteration1 < lines.length; iteration1++){
		// gettings all words in line
		let words = lines[iteration1].split(' ');
  let firstWord = words[0];
  let secondWord = words[1];
		console.log(Errors);
		// checking if keyCommands have firstWord
		if(!keyCommands.hasOwnProperty(firstWord)){
			Errors.push({notfound: firstWord, message: "this command not found in 'keyCommands'", line: iteration1});
			words[0] = `<span id="errors">${words[0]}</span>`
		}else{
			words[0] = `<span id="command">${words[0]}</span>`

			// checking if command have sub-command
			let subCommandRead
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord)){
					subCommandRead = 1;
					words[1] = `<span id="command">${words[1]}</span>`;
				}else{
					subCommandRead = 0;
					Errors.push({notfound: secondWord, message: `the ${firstWord} dont have sub-command ${secondWord}`, line: iteration1});
					words[1] = `<span id="errors">${words[1]}</span>`
				}
			}else{
				subCommandRead = 0;
			}
			// checking if words in line more then need
			let lineWords = words.length - 1;
			if(subCommandRead == 0){
				if(lineWords > keyCommands[firstWord].max){
					Errors.push({notfound: firstWord, message: `the command ${firstWord} can access only ${keyCommands[firstWord].max} propertry words!`, line: iteration1});
				}
			}else{
				if(lineWords > keyCommands[firstWord][secondWord].max){
					Errors.push({notfound: firstWord, message: `the command ${firstWord} ${secondWord} can access only ${keyCommands[firstWord][secondWord].max} propertry words!`, line: iteration1});
				}
			}
			// iteration of all words to find errors
			for(let iteration2 = 0; iteration2 < words.length; iteration2++){
				// getting commandToFind by subCommandRead
				let commandToFind;
				let finder1;
				if(subCommandRead == 1){
					finder1 = `w${iteration2 + 1}`;
					commandToFind = keyCommands[firstWord][secondWord][finder1];
				}else{
					finder1 = `w${iteration2}`;
					commandToFind = keyCommands[firstWord][finder1];
				}
				console.log(`sub: ${subCommandRead} first: ${firstWord} second: ${secondWord} finder: ${finder1} lineWord: ${lineWords}`)
				if(typeof commandToFind == 'undefined'){
					Errors.push({notfound: words[iteration2], message: "have errors with commands names", line: iteration1});
					continue;
				}
				// if words starts on @
				if(words[iteration2].startsWith("@")){
					// if keywords allowed its this word
					if(commandToFind.keywords == true){
						if(keywords.includes(words[iteration2])){
							words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
						}else{
							Errors.push({notfound: words[iteration2], message: "keywords not include this word", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						}
						// if keywords not recomended in this word
					}else if(commandToFind.keywords == "notRecomended"){
						Errors.push({notfound: words[iteration2], message: "this keyword not recomended here", line: iteration1});
						words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						// if keyword not allowed in this words
					}else{
						// if allowedParams == array
						if(Array.isArray(commandToFind.allowedParams)){
							// if allowedParams not include word
							if(!commandToFind.allowedParams.includes(words[iteration2])){
								Errors.push({notfound: words[iteration2], message: "this keyword not allowed here!", line: iteration1});
								words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
								// if allowedParams include word
							}else if(commandToFind.allowedParams.includes(words[iteration2])){
								words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
							}
							// if keywords and allowedParams are null
						}else if(commandToFind.allowedParams == undefined){
							Errors.push({notfound: words[iteration2], message: "any keywords not allowed here!", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						};
					};
				};
				
				// if word == number
				if(isNaN(words[iteration2])){
					if(commandToFind.numbers == false){
						Errors.push({notfound: words[iteration2], message: "any numbers not allowed here!", line: iteration1});
						words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
					}else{
						words[iteration2] = `<span id="numbers">${words[iteration2]}</span>`
					}

					// if word == text
					if(commandToFind.words == true){
						words[iteration2] = `<span id="text">${words[iteration2]}</span>`
					}else{
						if(commandToFind.allowedWords == false){
							Errors.push({notfound: words[iteration2], message: "any words not allowed here!", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						}else if(commandToFind.allowedWords.includes(words[iteration2])){
							words[iteration2] = `<span id="text">${words[iteration2]}</span>`
						}else{
							Errors.push({notfound: words[iteration2], message: "this word not allowed here!", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						}
						
					}
					
					
				}

			}
		}
		lines[iteration1] = words.join(' ');
	}
	Errors = [];
	formattedCode = lines.join('<br>');
	const output = document.getElementById('codeOutput');
	output.innerHTML = formattedCode;
}

textarea.addEventListener("input", (hightLightingErrors));