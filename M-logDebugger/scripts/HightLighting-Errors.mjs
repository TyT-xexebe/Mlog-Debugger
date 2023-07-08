// imports all commands and his settings
import {keyCommands, keywords, reg1, reg2, reg3, reg4} from "../scripts/ObjectsMlog.mjs"
// cresting arrays for arrors
let jumpLabels1 = [];
let jumpLabels2 = [];
let Errors = [];
const textarea = document.getElementById('codeInput');
// creating function with all code
let hightLightingErrors = () => {
	// getting textarea text-code
	const textarea = document.getElementById('codeInput');
	const code = textarea.value.trim();
	const lines = code.split('\n');
	console.log("started..");console.log(Errors);
// creating iteration of all lines
	for(let iteration1 = 0; iteration1 < lines.length; iteration1++){
		console.log(iteration1)
		// gettings all words in line
		let words = lines[iteration1].split(' ');
  let firstWord = words[0];
  let secondWord = words[1];

		// checking if keyCommands have firstWord
		if(!keyCommands.hasOwnProperty(firstWord)){
			Errors.push({notfound: firstWord, message: "this command not found in 'keyCommands'", line: iteration1});
			words[0] = `<span id="errors">${words[0]}</span>`
		}else{
			words[0] = `<span id="command">${words[0]}</span>`

			let subCommandRead
			console.log(`someVarians: ${keyCommands[firstWord].hasOwnProperty("someVariants")}  secondWord: ${secondWord}  hasProperty: ${keyCommands[firstWord].hasOwnProperty(secondWord)}`)
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord) || !secondWord == ""){
					subCommandRead = 1;
					words[1] = `<span id="command">${words[1]}</span>`;
				}else{
					subCommandRead = 1;
					Errors.push({notfound: secondWord, message: `the ${firstWord} dont have sub-command ${secondWord}`, line: iteration1});
					words[1] = `<span id="errors">${words[1]}</span>`
				}
			}else{
				subCommandRead = 0;
			}
			// iteration of all words to find errors
			for(let iteration2 = 0; iteration2 < words.length; iteration2++){
				let commandToFind
				if(subCommandRead = 1){
					let finder1 = `w${iteration2 + 1}`;
					commandToFind = keyCommands[firstWord][secondWord][finder1];
				}else{
					let finder1 = `w${iteration2}`;
					commandToFind = keyCommands[firstWord][finder1];
				}
				console.log(`line: ${iteration1} word: ${iteration2} finder w: ${finder1} command to find: ${commandToFind}`)
				// if words starts on @
				if(words[iteration2].startsWith("@")){
					console.log(`word ${words[iteration2]} started on @`)
					// if keywords allowed its this word
					if(commandToFind.keywords == true){
						console.log(`word ${words[iteration2]} allowed`)
						words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
						// if keywords not recomended in this word
					}else if(commandToFind.keywords == "notRecomended"){
						console.log(`word ${words[iteration2]} not recomended`)
						Errors.push({notfound: words[iteration2], message: "this keyword not recomended here", line: iteration1});
						words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						// if keyword not allowed in this words
					}else{
						// if allowedParams == array
						if(Array.isArray(commandToFind.allowedParams)){
							// if allowedParams not include word
							if(!commandToFind.allowedParams.includes(words[iteration2])){
								console.log(`word ${words[iteration2]} not allowed`)
								Errors.push({notfound: words[iteration2], message: "this keyword not allowed here!", line: iteration1});
								words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
								// if allowedParams include word
							}else if(commandToFind.allowedParams.includes(words[iteration2])){
								console.log(`word ${words[iteration2]} allowed`)
								words[iteration2] = `<span id="keywords">${words[iteration2]}</span>`
							}
							// if keywords and allowedParams are null
						}else if(commandToFind.allowedParams == undefined){
							console.log(`word ${words[iteration2]} not allowed`)
							Errors.push({notfound: words[iteration2], message: "any keywords not allowed here!", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
						};
					};
				};
			}
		}
	}
	Errors = [];
}

textarea.addEventListener("input", (hightLightingErrors));