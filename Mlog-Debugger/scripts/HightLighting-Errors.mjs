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

let openF2 = () => {
	let setting = document.getElementById("settings");
	if(setting.style.display == "none"){
		setting.style.display = "block";
	}else{
		setting.style.display = "none";
	}
}
openF2();

// settings
let keyColor;
let textColor;
let commandColor;
let errorColor;
let numberColor;
let labelColor;
let varColor;
let inColor;

let switch1 = document.getElementById("show1");
let switch2 = document.getElementById("show2");
let switch3 = document.getElementById("show3");
let switch4 = document.getElementById("show4");
let switch5 = document.getElementById("show5");
let switch6 = document.getElementById("show6");
let switch7 = document.getElementById("show7");

let set1 = new Set([1]);
let set2 = new Set([1]);
let set3 = new Set([0]);
let set4 = new Set([1]);
let set5 = new Set([0]);
let set6 = new Set([0]);
let set7 = new Set([0]);

// creating arrays for errors
let jumpLabels1 = [];
let jumpLabels2 = [];
let label;
let label2;
let Errors = [];
let variables = [];
let inputVariables = [];
let button = document.getElementById("button");
let button2 = document.getElementById("setting");
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
	let missingValues = [];
	let missingVar = [];

for (let iteration3 = 0; iteration3 < lines.length; iteration3++){
		let words2 = lines[iteration3].split(' ');
		if(words2[0].endsWith(':')){
			label = words2[0];
			label = label.slice(0, -1);
			jumpLabels2.push(label);
		}	

		if(words2[0] == "jump"){
			if(isNaN(words2[1])){
				jumpLabels1.push(words2[1]);
			}
		}
	}

					for(let iteration6 = 0; iteration6 < lines.length; iteration6++){
					let words4 = lines[iteration6].split(" ");
					loop:for(let iteration7 = 0; iteration7 < words4.length; iteration7++){
						let subCommandRead2
						let firstWord2 = words4[0];
						let secondWord2 = words4[1];
						if(!keyCommands.hasOwnProperty(firstWord2)){
							continue loop;
						}
						if(keyCommands[firstWord2].hasOwnProperty("someVariants")){
							if(keyCommands[firstWord2].hasOwnProperty(secondWord2)){
								subCommandRead2 = 1;
							}else{
								subCommandRead2 = 0;
							}
						}else{
							subCommandRead2 = 0;
						}

						let commandToFind2;
						let finder2;
						if(subCommandRead2 == 1){
							finder2 = `w${iteration7}`;
							commandToFind2 = keyCommands[firstWord2][secondWord2][finder2];
						}else{
							finder2 = `w${iteration7}`;
							commandToFind2 = keyCommands[firstWord2][finder2];
						}
						if(typeof commandToFind2 == 'undefined'){
							continue loop;
						}
						
						
						if(commandToFind2.var == true){
							if(words4[iteration7].toString() === "true" || words4[iteration7].toString() === "false"){
								continue loop;
							}
							variables.push(words4[iteration7]);
						}
						
						if(commandToFind2.words == true){
							if(commandToFind2.input == true){
								if(words4[iteration7].toString() === "true" || words4[iteration7].toString() === "false"){
									continue loop;
								}
								inputVariables.push(words4[iteration7]);
							}
						}
					}
				}

	
// creating iteration of all lines         
for(let iteration1 = 0; iteration1 < lines.length; iteration1++){

	jumpLabels1 = [...new Set(jumpLabels1)];
	jumpLabels2 = [...new Set(jumpLabels2)];
	const missingValues1 = jumpLabels1.filter(value => !jumpLabels2.includes(value));
	const missingValues2 = jumpLabels2.filter(value => !jumpLabels1.includes(value));
	missingValues = [...missingValues1, ...missingValues2];
	
		// gettings all words in line
		let words = lines[iteration1].split(' ');
  		let firstWord = words[0];
  		let secondWord = words[1];
		// checking if keyCommands have firstWord
		if(!keyCommands.hasOwnProperty(firstWord)){
			if(firstWord.endsWith(":")){
				lines[iteration1] = words.join('&nbsp;');
			}else if(firstWord.startsWith("<")){
				lines[iteration1] = words.join('&nbsp;');
			}else if(firstWord.toString() == " " || firstWord.toString() == "&nbsp;<br>" || firstWord.toString() == " <br>" || firstWord.toString() == "<br>" || firstWord.toString() == " \n" || firstWord.toString() == " &nbsp;" || firstWord.toString() == " " || firstWord.toString() == "\n&nbsp;" || firstWord.toString() == "\n" || firstWord.toString() == "\n&nbsp;" || firstWord.toString() == "&nbsp;\n" || firstWord.toString() == "&nbsp;"){
				lines[iteration1] = words.join('&nbsp;');
			}else{
				Errors.push({notfound: firstWord, message: `the ${firstWord} not a command`, line: iteration1});
				words[0] = `<span id="${errorColor}">${words[0]}</span>`
				lines[iteration1] = words.join('&nbsp;');
			}
		}else{

			if(words[0] == "jump"){
				if(isNaN(words[1])){
					if(missingValues.includes(words[1])){
						words[1] = `<span id="${errorColor}">${words[1]}</span>`
						Errors.push({notfound: "label", message: `label "${words[1]}" dont used in code`, line: iteration1});
						lines[iteration1] = words.join('&nbsp;');
					}else{
						words[1] = `<span id="${labelColor}">${words[1]}</span>`
						lines[iteration1] = words.join('&nbsp;');
					}
				}
			}
				words[0] = `<span id="${commandColor}">${words[0]}</span>`


			// checking if command have sub-command
			let subCommandRead
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord)){
					subCommandRead = 1;
					words[1] = `<span id="${commandColor}">${words[1]}</span>`;
				}else{
					subCommandRead = 0;
					Errors.push({notfound: secondWord, message: `the ${firstWord} dont have sub-command ${secondWord}`, line: iteration1});
					words[1] = `<span id="${errorColor}">${words[1]}</span>`
				}
			}else{
				subCommandRead = 0;
			}
			// checking if words in line more then need
			let lineWords = words.length - 1;
			if(subCommandRead == 0){
				if(lineWords > keyCommands[firstWord].max){
					Errors.push({notfound: firstWord, message: `the command ${firstWord} can access only ${keyCommands[firstWord].max} propertry words!`, line: iteration1});
					words[0] = `<span id="${errorColor}">${words[0]}</span>`
				}
			}else{
				if(lineWords > keyCommands[firstWord][secondWord].max){
					Errors.push({notfound: firstWord, message: `the command ${firstWord} ${secondWord} can access only ${keyCommands[firstWord][secondWord].max} propertry words!`, line: iteration1});
					words[0] = `<span id="${errorColor}">${words[0]}</span>`
					words[1] = `<span id="${errorColor}">${words[1]}</span>`
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
				if(typeof commandToFind == 'undefined'){
					lines[iteration1] = words.join(' ');
					continue MainLoop;
				}
				if(words[iteration2].startsWith("<")){
					continue MainLoop;
				}

				
				
				// if words starts on @
				if(words[iteration2].startsWith("@")){
					// if keywords allowed its this word
					if(commandToFind.keywords == true){
						if(keywords.includes(words[iteration2])){
							words[iteration2] = `<span id="${keyColor}">${words[iteration2]}</span>`
							
						}else{
							Errors.push({notfound: words[iteration2], message: "keywords not include this word", line: iteration1});
							words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
							
						}
						// if keywords not recomended in this word
					}else if(commandToFind.keywords == "notRecomended"){
						Errors.push({notfound: words[iteration2], message: "this keyword not recomended here", line: iteration1});
						words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
						
						// if keyword not allowed in this words
					}else{
						// if allowedParams == array
						if(Array.isArray(commandToFind.allowedParams)){
							// if allowedParams not include word
							if(!commandToFind.allowedParams.includes(words[iteration2])){
								Errors.push({notfound: words[iteration2], message: "this keyword not allowed here!", line: iteration1});
								words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
								
								// if allowedParams include word
							}else if(commandToFind.allowedParams.includes(words[iteration2])){
								words[iteration2] = `<span id="${keyColor}">${words[iteration2]}</span>`
								
							}
							// if keywords and allowedParams are null
						}else if(commandToFind.allowedParams == undefined){
							Errors.push({notfound: words[iteration2], message: "any keywords not allowed here!", line: iteration1});
							words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
							
						};
					};
				}else{
					
					// if word == number
					if(!isNaN(words[iteration2])){
						if(commandToFind.numbers == false){
							Errors.push({notfound: words[iteration2], message: "any numbers not allowed here!", line: iteration1});
							words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
							
						}else{
							words[iteration2] = `<span id="${numberColor}">${words[iteration2]}</span>`
							
						}
					}else{	
						if(commandToFind.var == true){
							const missingVar1 = variables.filter(value => !inputVariables.includes(value));
							const missingVar2 = inputVariables.filter(value => !variables.includes(value));
							missingVar = [...missingVar1, ...missingVar2];
							if(!missingVar.includes(words[iteration2])){
								if(words[iteration2].toString() === "true" || words[iteration2].toString() === "false"){
									words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
									Errors.push({notfound: words[iteration2], message: "variable output cant be true/false", line: iteration1});
									continue MainLoop;
								}
								words[iteration2] = `<span id="${varColor}">${words[iteration2]}</span>`
							}else{
								if(words[iteration2].toString() === "true" || words[iteration2].toString() === "false"){
									words[iteration2] = `<span id="${commandColor}">${words[iteration2]}</span>`
									continue MainLoop;
								}
								let inp1 = [...set7];
								let inp2 = inp1[0];
								if(inp2 == 0){
									Errors.push({notfound: words[iteration2], message: "this variable dont used in code", line: iteration1});
									words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
								}else{
									words[iteration2] = `<span id="${varColor}">${words[iteration2]}</span>`
								}
							}
						}else{

						
						if(firstWord == 'jump'){
							if(iteration1 == 1){
								continue MainLoop;
							}
						}
						// if word == text
						if(commandToFind.words == true){
							if(commandToFind.input == true){
								const missingVar1 = variables.filter(value => !inputVariables.includes(value));
								const missingVar2 = inputVariables.filter(value => !variables.includes(value));
								missingVar = [...missingVar1, ...missingVar2];
								if(!missingVar.includes(words[iteration2])){
									if(words[iteration2].toString() === "true" || words[iteration2].toString() === "false"){
										words[iteration2] = `<span id="${commandColor}">${words[iteration2]}</span>`
										continue MainLoop;
									}
									words[iteration2] = `<span id="${inColor}">${words[iteration2]}</span>`
								}else{
									if(words[iteration2].toString() === "true" || words[iteration2].toString() === "false"){
										words[iteration2] = `<span id="${commandColor}">${words[iteration2]}</span>`
										continue MainLoop;
									}
									let inp3 = [...set7];
									let inp4 = inp3[0];
									if(inp4 == 0){
										Errors.push({notfound: words[iteration2], message: "this variable not declarated in code", line: iteration1});
										words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
									}else{
										words[iteration2] = `<span id="${inColor}">${words[iteration2]}</span>`
									}
								}
							}else{
								words[iteration2] = `<span id="${textColor}">${words[iteration2]}</span>`
							}
						}else{
							if(commandToFind.allowedWords == false){
								Errors.push({notfound: words[iteration2], message: "any words not allowed here!", line: iteration1});
								words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
							}else if(commandToFind.allowedWords.includes(words[iteration2])){
								words[iteration2] = `<span id="${textColor}">${words[iteration2]}</span>`
							}else{
								Errors.push({notfound: words[iteration2], message: "this word not allowed here!", line: iteration1});
								words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
							}
						}
						}
					}
				}
			}
			lines[iteration1] = words.join('&nbsp;');
			
}
}
	variables = [];
	inputVariables = [];
	missingVar = [];
		for(let iteration5 = 0; iteration5 < lines.length; iteration5++){
			let words3 = lines[iteration5].split(" ");
			if(words3[0].endsWith(":")){
				label2 = words3[0].slice(0, -1);
				if(missingValues.includes(label2)){
					words3[0] = `<span id="${errorColor}">${words3[0]}</span>`
					Errors.push({notfound: "label", message: `any jump dont use label "${words3[0]}"`, line: iteration5});
					lines[iteration5] = words3.join('&nbsp;');
				}else{
					words3[0] = `<span id="${labelColor}">${words3[0]}</span>`
					lines[iteration5] = words3.join('&nbsp;');
				}
			}
		}
	jumpLabels1 = [];
	jumpLabels2 = [];
	missingValues = [];

	

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
	let notFoundMessage = ' ';
	button.innerHTML = `Errors | ${Errors.length}`;
	for(let iteration4 = 0; iteration4 < Errors.length; iteration4++){
		notFoundMessage += `<span id="${textColor}">error: <span id="${errorColor}">${Errors[iteration4].notfound}</span> | <span id="error">${Errors[iteration4].message}</span> | line: ${Errors[iteration4].line} </span><br><hr><br>`
	}
	errorOutput.innerHTML = notFoundMessage;
	Errors = [];
}
textarea.addEventListener("input", (hightLightingErrors));
button.addEventListener("click", (openF));
button2.addEventListener("click", (openF2));


let settings = (set, switching) => {
	let setArray = [...set];
	let firstValue = setArray[0];

	if (firstValue == 1) {
		switching.style.transform = "translateX(calc(- var(--index)))";
		switching.style.backgroundColor = "rgb(32, 156, 53)";
		set.clear();
		set.add(0);
	} else {
		switching.style.transform = "translateX(var(--index))";
		switching.style.backgroundColor = "rgb(177, 22, 22)";
		set.clear();
		set.add(1);
	}
	// settings for highligtning
	let value1 = [...set1][0];
	let value2 = [...set2][0];
	let value3 = [...set3][0];
	let value4 = [...set4][0];
	let value5 = [...set5][0];
	let value6 = [...set6][0];
	if(value1 == 1){
		keyColor = "text";
		commandColor = "text";
		textColor = "text";
		errorColor = "text";
		numberColor = "text";
		labelColor = "text";
		varColor = "text";
		inColor = "text";
	}else{
		if(value2 == 1){
			errorColor = "text";
		}else{
			errorColor = "errors";
		}
		
		if(value3 == 1){
			labelColor = "text";
		}else{
			labelColor = "label";
		}

		if(value4 == 1){
			keyColor = "text";
			commandColor = "text";
			numberColor = "text";
			textColor = "text";
		}else{
			keyColor = "keywords";
			commandColor = "command";
			numberColor = "numbers";
			textColor = "text";
		}

		if(value5 == 1){
			varColor = "text";
		}else{
			varColor = "variable";
		}

		if(value6 == 1){
			inColor = "text";
		}else{
			inColor = "vOutput";
		}
	}
	hightLightingErrors();
};
switch1.addEventListener("click", () => settings(set1, switch1));
switch2.addEventListener("click", () => settings(set2, switch2));
switch3.addEventListener("click", () => settings(set3, switch3));
switch4.addEventListener("click", () => settings(set4, switch4));
switch5.addEventListener("click", () => settings(set5, switch5));
switch6.addEventListener("click", () => settings(set6, switch6));
switch7.addEventListener("click", () => settings(set7, switch7));
settings(set1, switch1);
settings(set2, switch2);
settings(set3, switch3);
settings(set4, switch4);
settings(set5, switch5);
settings(set6, switch6);
settings(set7, switch7);
hightLightingErrors();
