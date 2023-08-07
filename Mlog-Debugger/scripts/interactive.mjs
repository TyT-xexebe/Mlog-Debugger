// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"
import {variables} from "../scripts/HightLighting-Errors.mjs"
console.log("started...")
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
    console.log(`current word: ${currentWord}`)
    return currentWord;
}

let getArray = () => {
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
		console.log(`first: ${firstWord} | second: ${secondWord} | line: ${line}`)
		if(keyCommands.hasOwnProperty(firstWord)){
			if(keyCommands[firstWord].hasOwnProperty("someVariants")){
				if(keyCommands[firstWord].hasOwnProperty(secondWord)){
					subCommandRead = 1;
				}else{
					subCommandRead = 0;
					let obj5 = Object.keys(keyCommands[firstWord]);
					array.push(...obj5);
					console.log("returned keyCommands")
					return array
				}
			}else{
				subCommandRead = 0;
			}
				if(subCommandRead == 1){
					commandToFind = keyCommands[firstWord][secondWord];
				}else{
					commandToFind = keyCommands[firstWord];
				}
				console.log(`sub: ${subCommandRead} | ${typeof commandToFind}`);
				if(typeof commandToFind === "undefined"){
					let obj3 = Object.keys(keyCommands[firstWord]);
					array.push(...obj3);
					console.log("returned keyCommands")
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
			console.log("returned keyCommands")
			return array
		}
		console.log(`currWord: ${currentWord} | subCommandRead: ${subCommandRead}`);
		if(words[i] == currentWord){
			if(i == 0){
				let obj1 = Object.keys(keyCommands);
				array.push(...obj1);
				console.log("returned keyCommands")
				return array
			}
			if(i == 1){
				if(subCommandRead == 1){
					let obj2 = Object.keys(keyCommands[firstWord]);
					array.push(...obj2);
					console.log("returned subCommands")
					return array
				}else{
					if(keyCommands[firstWord].w1.keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord].w1.allowedParams == true){
						array.push(...keyCommands[firstWord].w1.allowedParams);
					}

					if(keyCommands[firstWord].w1.words == true){
						array.push(...variables);
					}else if(keyCommands[firstWord].w1.allowedWords !== false){
						array.push(...keyCommands[firstWord].w1.allowedWords);
					}
					console.log(`w1: ${array}`)
					return array
				}
			}else{
				let w = `w${i}`
				console.log(`wWord: ${w}`);
				if(subCommandRead == 1){
					if(keyCommands[firstWord][secondWord][w].keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord][secondWord][w].allowedParams == true){
						array.push(...keyCommands[firstWord][secondWord][w].allowedParams);
					}

					if(keyCommands[firstWord][secondWord][w].words == true){
						array.push(...variables);
					}else if(keyCommands[firstWord][secondWord][w].allowedWords !== false){
						array.push(...keyCommands[firstWord][secondWord][w].allowedWords);
					}
					console.log(`${w}: ${array}`)
					return array
				}else{
					if(keyCommands[firstWord][w].keywords == true){
						array.push(...keywords);
					}else if(keyCommands[firstWord][w].allowedParams == true){
						array.push(...keyCommands[firstWord][w].allowedParams);
					}

					if(keyCommands[firstWord][w].words == true){
						array.push(...variables);
					}else if(keyCommands[firstWord][w].allowedWords !== false){
						array.push(...keyCommands[firstWord][w].allowedWords);
					}
					console.log(`${w}: ${array}`)
					return array
				}
			}	
		}else{
			continue loop2;
		}
	}
}

function compareWord() {
    const currentWord = getWord();
    const wordArray = getArray();
	console.log(`currt: ${currentWord} | wordArray ${wordArray}`)
    const similar = document.getElementById("helper");
    const similarWords = wordArray.filter(word => word.startsWith(currentWord));
    console.log(`similarWords: ${similarWords} | wordArray: ${wordArray}`)
    if (similarWords.length > 0) {
        similar.textContent = similarWords.join("\n");
    } else {
        similar.textContent = "nothing";
    }
	return similarWords
}
document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' && event.target.tagName === 'TEXTAREA') {
        event.preventDefault();

        const currentWord = getWord();
        const similarWords = compareWord();

        if (similarWords.length > 0) {
            const textarea = event.target;
            const caretPos = textarea.selectionStart;
            const startPos = textarea.value.lastIndexOf("\n", caretPos - 1) + 1;
            const endPos = textarea.value.indexOf("\n", caretPos);

            const remainingText = endPos === -1 ? "" : textarea.value.substring(endPos);
            const autocompleteWord = similarWords[0];

            const newText = textarea.value.substring(0, startPos) + autocompleteWord + remainingText;
            textarea.value = newText;
            textarea.selectionStart = startPos + autocompleteWord.length;
            textarea.selectionEnd = startPos + autocompleteWord.length;
        }
    }
});


textarea.addEventListener("input", (compareWord));
