// imports all commands and his settings
import {keyCommands, keywords, blocks} from "../scripts/ObjectsMlog.mjs"

for (let i = 0; i < blocks.length; i++) {
  blocks[i] = new RegExp(`/${blocks[i]}\\d\\?d\\?d\\?d/`);
}

let userSettings
if(!localStorage.getItem('userSettings')){
	userSettings = {
	  set1: 1,
	  set2: 1,
	  set3: 0,
	  set4: 1,
	  set5: 0,
	  set6: 0,
	  set7: 0,
	  set8: 0
	};
	localStorage.setItem('userSettings', JSON.stringify(userSettings));
}else{
	userSettings = JSON.parse(localStorage.getItem('userSettings'));
	console.log(userSettings);
}

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

// highlighting settings
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
let switch8 = document.getElementById("show8");

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
	variables = [];
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
			}else if(firstWord == "\s" || firstWord == "\t" || firstWord == "\v"){
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

			if(words[0] == "#"){
				for(let i = 1; i < words.length; i++){
					words[i] = `<span id="${textColor}">${words[i]}<span>`
				}
			}

			if(words[0] == "print"){
				if(words.length > 1){
					let letters = words[1].split("");
					let letters2 = words[words.length - 1].split("");
					console.log(`letters: ${letters} | letters2: ${letters2} `);
					console.log(`line: ${lines[iteration1]}\n words: ${words}\n firstLetter: ${letters[0]}\n lastLetter: ${letters2[letters2.length - 1]}`);
					if(letters[0] == '"' && letters2[letters2.length - 1] == '"'){
						for(let i = 1; i < words.length; i++){
							words[i] = `<span id="${textColor}">${words[i]}<span>`
						}
					}else if(letters[0] !== '"' && letters2[letters2.length - 1] !== '"'){
						words[1] = `<span id="${inColor}">${words[1]}<span>`
						inputVariables.push(words[1]);
					}else{
						Errors.push({notfound: words[1], message: `the ${words[0]} error ${secondWord}`, line: iteration1});
						words[1] = `<span id="${errorColor}">${words[1]}</span>`
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
							for (const regex of blocks) {
							    if (regex.test(words[iteration2])) {
							      	words[iteration2] = `<span id="${errorColor}">${words[iteration2]}</span>`
								Errors.push({notfound: words[iteration2], message: "variable output cant be named as blocks", line: iteration1});
								continue MainLoop;
							    }
							}
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
								
								if(userSettings.set7 == 0){
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
								for (const regex of blocks) {
								    if (regex.test(words[iteration2])) {
									continue MainLoop;
								    }
								}
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
									if(userSettings.set7 == 0){
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
 	formattedCode += lines[i] + '&nbsp;<br>';
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

let settings = (set, switching, num, change) => {
	if (set == 0) {
		switching.style.transform = "translateX(calc(- var(--index)))";
		switching.style.backgroundColor = "rgb(32, 156, 53)";
		if(change == 1){
			set = 1;
		}
	} else {
		switching.style.transform = "translateX(var(--index))";
		switching.style.backgroundColor = "rgb(177, 22, 22)";
		if(change == 1){
			set = 0;
		}
	}

	let setter = `set${num}`
	console.log(`set: ${setter} | oldUser: ${userSettings[setter]}`)
	userSettings[setter] = set;
	localStorage.setItem('userSettings', JSON.stringify(userSettings));
	userSettings = JSON.parse(localStorage.getItem('userSettings'));
	console.log(`newUser: ${userSettings[setter]}`)
	
	let arr = Object.keys(userSettings).map(key => userSettings[key]);
	console.log(`first checking: ${arr}`);
	// settings for highligtning
	let value1 = userSettings.set1;
	let value2 = userSettings.set2;
	let value3 = userSettings.set3;
	let value4 = userSettings.set4;
	let value5 = userSettings.set5;
	let value6 = userSettings.set6;
	let value8 = userSettings.set8;
	
	if(value1 == 0){
		keyColor = "text";
		commandColor = "text";
		textColor = "text";
		errorColor = "text";
		numberColor = "text";
		labelColor = "text";
		varColor = "text";
		inColor = "text";
	}else{
		if(value2 == 0){
			errorColor = "text";
		}else{
			errorColor = "errors";
		}
		
		if(value3 == 0){
			labelColor = "text";
		}else{
			labelColor = "label";
		}

		if(value4 == 0){
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

		if(value5 == 0){
			varColor = "text";
		}else{
			varColor = "variable";
		}

		if(value6 == 0){
			inColor = "text";
		}else{
			inColor = "vOutput";
		}
		if(value8 == 0){
			let helper1 = document.getElementsByClassName("helper")[0];
			let helper2 = document.getElementsByClassName("autocomplete")[0];
			helper1.style.display = "none";
			helper2.style.display = "block";
			helper1.removeAttribute("id");
			helper2.id = "helper";
		}else{
			let helper1 = document.getElementsByClassName("autocomplete")[0];
			let helper2 = document.getElementsByClassName("helper")[0];
			helper1.style.display = "none";
			helper2.style.display = "block";
			helper1.removeAttribute("id");
			helper2.id = "helper";
		}
	}
	hightLightingErrors();
};

switch1.addEventListener("click", () => settings(userSettings.set1, switch1, "1", "1"));
switch2.addEventListener("click", () => settings(userSettings.set2, switch2, "2", "1"));
switch3.addEventListener("click", () => settings(userSettings.set3, switch3, "3", "1"));
switch4.addEventListener("click", () => settings(userSettings.set4, switch4, "4", "1"));
switch5.addEventListener("click", () => settings(userSettings.set5, switch5, "5", "1"));
switch6.addEventListener("click", () => settings(userSettings.set6, switch6, "6", "1"));
switch7.addEventListener("click", () => settings(userSettings.set7, switch7, "7", "1"));
switch8.addEventListener("click", () => settings(userSettings.set8, switch8, "8", "1"));
settings(userSettings.set1, switch1, "1", "0");
settings(userSettings.set2, switch2, "2", "0");
settings(userSettings.set3, switch3, "3", "0");
settings(userSettings.set4, switch4, "4", "0");
settings(userSettings.set5, switch5, "5", "0");
settings(userSettings.set6, switch6, "6", "0");
settings(userSettings.set7, switch7, "7", "0");
settings(userSettings.set8, switch8, "8", "0");
hightLightingErrors();
export {variables, hightLightingErrors};
