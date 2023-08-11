// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"
import {variables, hightLightingErrors, jumpLabels1, jumpLabels2} from "../scripts/HightLighting-Errors.mjs"
const textarea = document.getElementById('codeInput');
const output = document.getElementById("suggestions");

let syntaxHelper = () => {
  output.innerHTML = " ";
  let cursorPos = textarea.selectionStart;
  let text = textarea.value;
  let startOfLine = text.lastIndexOf('\n', cursorPos - 1) + 1;
  let endOfLine = text.indexOf('\n', cursorPos);
  if (endOfLine === -1) {
    endOfLine = text.length;
  }
  let lineText = text.substring(startOfLine, endOfLine);
  let words = lineText.split(' ');
  loop:for(let iteration1 = 0; iteration1 < words.length; iteration1++){
    let firstWord = words[0];
    let secondWord = words[1];
    if(keyCommands.hasOwnProperty(firstWord)){
      let subCommandRead
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord)){
					subCommandRead = 1;
				}else{
					subCommandRead = 0;
				}
			}else{
				subCommandRead = 0;
			}
      
      let commandToFind;
			if(subCommandRead == 1){
				commandToFind = keyCommands[firstWord][secondWord];
			}else{
				commandToFind = keyCommands[firstWord];
			}
			if(typeof commandToFind == 'undefined'){
				continue loop;
			}
			if(words[iteration1].startsWith("<")){
				continue loop;
			}
      output.innerHTML = commandToFind.syntax;
    }
    
  }
}
textarea.addEventListener("input", (syntaxHelper));
textarea.addEventListener("click", (syntaxHelper));

function getWord() {
    const cursorPosition = textarea.selectionEnd;
    const text = textarea.value;
    let wordStart = cursorPosition;
    while (wordStart > 0 && /\S/.test(text[wordStart - 1])) {
        wordStart--;
    }
    let wordEnd = cursorPosition;
    while (wordEnd < text.length && /\S/.test(text[wordEnd])) {
        wordEnd++;
    }
    const currentWord = text.substring(wordStart, wordEnd);
    return currentWord;
}
let variable = [];
let jumpLabels = [];
let labels = [];
let getArray = () => {
	variable = [];
	jumpLabels = [];
	labels = [];
	variable = new Set(variables);
	jumpLabels = new Set(jumpLabels1);
	for(let i = 0; i < jumpLabels.length; i++){
		jumpLabels[i] = `${jumpLabels[i]}:`
	}
	labels = new Set(jumpLabels2);
        const text = textarea.value;
        const caretPos = textarea.selectionStart;
        const startPos = text.lastIndexOf("\n", caretPos - 1) + 1;
        const endPos = text.indexOf("\n", caretPos);
        const line = text.substring(startPos, endPos === -1 ? text.length : endPos);
	let words = line.split(" ");
	let subCommandRead;
	let commandToFind;
	let currentWord = getWord();
	let array = [];
	loop2:for(let i = 0; i < words.length; i++){
		let firstWord = words[0];
		let secondWord = words[1];
		if(keyCommands.hasOwnProperty(firstWord)){
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord)){
					subCommandRead = 1;
				}else{
					subCommandRead = 0;
					let obj5 = Object.keys(keyCommands[firstWord]);
					if(obj5.includes("someVariants")){
						let index = obj5.indexOf("someVariants");
						obj5.splice(index, 1);
					}
					array.push(...obj5);
					return array;
				}
			}else{
				subCommandRead = 0;
			}
				if(subCommandRead == 1){
					commandToFind = keyCommands[firstWord][secondWord];
				}else{
					commandToFind = keyCommands[firstWord];
				}
				if(typeof commandToFind === "undefined"){
					let obj3 = Object.keys(keyCommands[firstWord]);
					if(obj3.includes("someVariants")){
						let index = obj3.indexOf("someVariants");
						obj3.splice(index, 1);
					}
					array.push(...obj3);
					return array
				}
				if(typeof subCommandRead === "undefined"){
					continue loop2;
				}
				if(words[i].startsWith("<")){
					continue loop2;
				}
		}else{
			let obj4 = Object.keys(keyCommands);
			array.push(...obj4);
			array.push(...jumpLabels);
			return array
		}
		if(words[i] == currentWord){
			if(i == 0){
				let obj1 = Object.keys(keyCommands);
				array.push(...obj1);
				array.push(...jumpLabels);
				return array
			}
			if(i == 1){
				if(subCommandRead == 1){
					let obj2 = Object.keys(keyCommands[firstWord]);
					if(obj2.includes("someVariants")){
						let index = obj2.indexOf("someVariants");
						obj2.splice(index, 1);
					}
					array.push(...obj2);
					return array
				}else{
					if(firstWord == "#" || firstWord == "print"){
						array.push("text");
						return array;
					}
					if(firstWord == "jump"){
						array.push(...labels);
					}
					if(keyCommands[firstWord].w1.keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord].w1.allowedParams !== undefined){
						array.push(...keyCommands[firstWord].w1.allowedParams);
					}

					if(keyCommands[firstWord].w1.words == true){
						array.push(...variable);
					}else if(keyCommands[firstWord].w1.allowedWords !== false){
						array.push(...keyCommands[firstWord].w1.allowedWords);
					}
					return array
				}
			}else{
				let w = `w${i}`
				if(subCommandRead == 1){
					if(i > keyCommands[firstWord][secondWord].max){
						array.push("nothing");
						return array
					}
					if(keyCommands[firstWord][secondWord][w].keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord][secondWord][w].allowedParams !== undefined){
						array.push(...keyCommands[firstWord][secondWord][w].allowedParams);
					}

					if(keyCommands[firstWord][secondWord][w].words == true){
						array.push(...variable);
					}else if(keyCommands[firstWord][secondWord][w].allowedWords !== false){
						array.push(...keyCommands[firstWord][secondWord][w].allowedWords);
					}
					return array
				}else{
					if(firstWord == "#" || firstWord == "print"){
						array.push("text");
						return array;
					}
					if(i > keyCommands[firstWord].max){
						array.push("nothing");
						return array
					}
					if(keyCommands[firstWord][w].keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord][w].allowedParams !== undefined){
						array.push(...keyCommands[firstWord][w].allowedParams);
					}

					if(keyCommands[firstWord][w].words == true){
						array.push(...variable);
					}else if(keyCommands[firstWord][w].allowedWords !== false){
						array.push(...keyCommands[firstWord][w].allowedWords);
					}
					return array
			 	}
			}
		}else{
			continue loop2;
		}
	}
}
let activeIndex = 0;
function compareWord() {
    const currentWord = getWord();
    const wordArray = getArray();
    const similar = document.getElementById("helper");
    const similarWords = wordArray.filter(word => word.startsWith(currentWord));
    let complete = document.getElementsByClassName("autocomplete")[0];
    if(similarWords.length > 0) {
        complete.style.display = "block";
        similar.innerHTML = similarWords.map((word, index) => `<span class="${index === 0 ? 'active' : ''}" style="${index === 0 ? 'background-color: grey;' : ''}">${word}</span>`
).join("<br>");
    }else{
        complete.style.display = "none";
        similar.innerHTML = "nothing";
    }
    return similarWords;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Tab' && event.target.tagName === 'TEXTAREA') {
        event.preventDefault();
        const currentWord = getWord();
	const similar = document.getElementById("helper");
	similar.innerHTML = " ";
        const similarWords = compareWord();
	updateSpan();
        if (similarWords.length > 0) {
            const textarea2 = event.target;
            const caretPos = textarea2.selectionStart;
            const startPos = Math.max(textarea2.value.lastIndexOf(" ", caretPos - 1) + 1, textarea2.value.lastIndexOf("\n", caretPos - 1) + 1);
            const endPos = textarea2.value.indexOf(" ", caretPos);
            const remainingText = textarea2.value.substring(endPos === -1 ? caretPos : endPos);
            const autocompleteWord = document.getElementsByClassName("active")[0].textContent;
            textarea2.value = textarea2.value.substring(0, startPos) + autocompleteWord + remainingText;
	    activeIndex = 0
	    hightLightingErrors()
        }
    }
});

document.addEventListener('keydown', function(event) {
	if (event.altKey && event.key === 'z'){
		let complete = document.getElementsByClassName("autocomplete")[0];
		if(complete.style.display == "block"){
			complete.style.display = "none";
		}else{
			complete.style.display = "block";
		}
	}
});

function showing(line, num){
	let xOS
	if(num < 34){
		xOS = num * 10;
	}else{
		xOS = 340;
	}
    	let yOS = line * 16;
    	let complete = document.getElementsByClassName("autocomplete")[0];
    	complete.style.left = `${xOS}px`
    	complete.style.top = `calc(${yOS}px + 10vh)`
}

textarea.addEventListener('input', () => {
    const cursorPosition = textarea.selectionStart;
    const lines = textarea.value.substr(0, cursorPosition).split('\n');
    const currentLine = lines.length;
    const currentColumn = lines[lines.length - 1].length + 1;
    showing(currentLine, currentColumn);
});  
textarea.addEventListener("input", (compareWord));

function updateSpan() {
	let complete = document.getElementsByClassName("autocomplete")[0];
	let spans = complete.querySelectorAll("span");
	spans.forEach((span, index) => {
		if(index === activeIndex) {
			span.classList.add("active");
			span.style.backgroundColor = "grey";
			span.scrollIntoView({
        			behavior: "smooth",
        			block: "nearest",
      			});
		}else{
			span.classList.remove("active");
			span.style.backgroundColor = "rgb(31, 31, 31)"
				
		}
	});
  }

updateSpan();

document.addEventListener("keydown", function(event) {
	let complete = document.getElementsByClassName("autocomplete")[0];
	let spans = complete.querySelectorAll("span");
	if(complete.style.display == "block"){
		if (event.key === "ArrowUp") {
			event.preventDefault();
	        	activeIndex = Math.max(0, activeIndex - 1);
			updateSpan();
		}else if(event.key === "ArrowDown") {
		event.preventDefault();
		      	activeIndex = Math.min(spans.length - 1, activeIndex + 1);
		      	updateSpan();
		}
	}
});

