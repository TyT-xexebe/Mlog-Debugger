// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"

let openF = () => {
	let errorOutput = document.getElementById("errorList");
	if(errorOutput.style.display == "none"){
		errorOutput.style.display = "block";
	}else{
		errorOutput.style.display = "none";
	}
}
openF();


// cresting arrays for arrors
let jumpLabels1 = [];
let jumpLabels2 = [];
let label;
let Errors = [];
let button = document.getElementById("button");
const textarea = document.getElementById('codeInput');
// creating function with all code
let hightLightingErrors = () => {
	// getting textarea text-code
	let formattedCode = " ";
	const output = document.getElementById('codeOutput');
	output.innerHTML = formattedCode;
	const textarea = document.getElementById('codeInput');
	const code = textarea.value.trim();
	const lines = code.split('\n');

	for (let iteration3 = 0; iteration3 < lines.length; iteration3++){
		let words2 = lines[iteration3].split(' ');
		if(words2[0].endsWith(':')){
			label = words2[0];
			label = label.slice(0, -1);
			jumpLabels2.push(label);
			label = ' ';
		}	
	}

	jumpLabels1 = [...new Set(jumpLabels1)];
	console.log(`label1\n ${jumpLabels1}\nlabel2\n${jumpLabels2}`);

	const missingValues1 = jumpLabels1.filter(value => !jumpLabels2.includes(value));
	const missingValues2 = jumpLabels2.filter(value => !jumpLabels1.includes(value));
	let missingValues = [...missingValues1, ...missingValues2];
	console.log(missingValues)
	missingValues.map((value) => {
		for(let iteration5 = 0; iteration5 < lines.length; iteration5++){
			let words3 = lines[iteration5].split(" ");
			console.log(`iteration: ${iteration5} | word1: ${words3[0]} | word2: ${words3[1]}`)
			if(words3[0] == "jump"){
				if(missingValues.includes(words3[1])){
					console.log("jump label missed");
					words3[1] = `<span id="errors">${words3[1]}</span>`
					Errors.push({notfound: "label", message: `label "${words3[1]}" dont used in code`, line: iteration5});
				}
			}
			if(words3[0].endsWith(":")){
				if(missingValues.includes(words3[0])){
					console.log("label missed");
					words3[0] = `<span id="errors">${words3[0]}</span>`
					Errors.push({notfound: "label", message: `any jump dont use label "${words[0]}"`, line: iteration5});
				}
			}
		}
	});
	jumpLabels1 = [];
	jumpLabels2 = [];
	
// creating iteration of all lines         
for(let iteration1 = 0; iteration1 < lines.length; iteration1++){
		// gettings all words in line
		let words = lines[iteration1].split(' ');
  let firstWord = words[0];
  let secondWord = words[1];
		console.log(Errors);
		// checking if keyCommands have firstWord
		if(!keyCommands.hasOwnProperty(firstWord)){
			if(firstWord.endsWith(":")){
				words[0] = `<span id="label">${words[0]}</span>`
				console.log(`label "${words[0]}" get spanned`);
				lines[iteration1] = words.join('&nbsp;');
			}else{
				Errors.push({notfound: firstWord, message: "this command not found in 'keyCommands'", line: iteration1});
				words[0] = `<span id="errors">${words[0]}</span>`
				lines[iteration1] = words.join('&nbsp;');
			}
		}else{
				if(words[0] == 'jump'){
					if(isNaN(words[1])){
						jumpLabels1.push(words[1]);
						words[1] = `<span id="label">${words[1]}</span>`
					}
				}
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
					words[0] = `<span id="errors">${words[0]}</span>`
				}
			}else{
				if(lineWords > keyCommands[firstWord][secondWord].max){
					Errors.push({notfound: firstWord, message: `the command ${firstWord} ${secondWord} can access only ${keyCommands[firstWord][secondWord].max} propertry words!`, line: iteration1});
					words[0] = `<span id="errors">${words[0]}</span>`
					words[1] = `<span id="errors">${words[1]}</span>`
				}
			}
			// iteration of all words to find errors
			MainLoop:for(let iteration2 = 0; iteration2 < words.length; iteration2++){
				// getting commandToFind by subCommandRead
				let commandToFind;
				let finder1;
				if(subCommandRead == 1){
					finder1 = `w${iteration2}`;
					commandToFind = keyCommands[firstWord][secondWord][finder1];
				}else{
					finder1 = `w${iteration2}`;
					commandToFind = keyCommands[firstWord][finder1];
				}
				console.log(`sub: ${subCommandRead} first: ${firstWord} second: ${secondWord} finder: ${finder1} lineWord: ${lineWords}`)
				if(typeof commandToFind == 'undefined'){
					lines[iteration1] = words.join(' ');
					continue MainLoop;
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
				}else{
					
					// if word == number
					if(!isNaN(words[iteration2])){
						if(commandToFind.numbers == false){
							Errors.push({notfound: words[iteration2], message: "any numbers not allowed here!", line: iteration1});
							words[iteration2] = `<span id="errors">${words[iteration2]}</span>`
							
						}else{
							words[iteration2] = `<span id="numbers">${words[iteration2]}</span>`
							
						}
					}else{
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
			lines[iteration1] = words.join('&nbsp;');
}
}
for (let ii = 0; ii < lines.length; ii++) {
	let lineContent = `<h5 class="line-number" style="display: inline-block; width: 30px; color: grey;">${ii}</h5> ${lines[ii]}`;
	lines[ii] = lineContent;
}

	for (let i = 0; i < lines.length; i++) {
 	formattedCode += lines[i] + '<br>';
	}

	output.innerHTML = formattedCode;


	let errorOutput = document.getElementById("errorList");
	errorOutput.value = " ";
	let	notFoundMessage = ' ';
	button.innerHTML = `Errors | ${Errors.length}`;
	for(let iteration4 = 0; iteration4 < Errors.length; iteration4++){
		notFoundMessage += `<span id="text">error: <span id="errors">${Errors[iteration4].notfound}</span> | <span id="error">${Errors[iteration4].message}</span> | line: ${Errors[iteration4].line} </span><br><hr><br>`
	}
	errorOutput.innerHTML = notFoundMessage;
	Errors = [];
}

textarea.addEventListener("input", (hightLightingErrors));
button.addEventListener("click", (openF));
