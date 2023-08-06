// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"
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
    const text = textarea.value;
    const caretPos = textarea.selectionStart;
    const startPos = text.lastIndexOf(" ", caretPos - 1) + 1;
    const endPos = text.indexOf(" ", caretPos);
    const currentWord = text.substring(startPos, endPos === -1 ? text.length : endPos);
    return currentWord;
}

let getArray = () => {
        const text = textarea.value;
        const caretPos = textarea.selectionStart;
        const startPos = text.lastIndexOf("\n", caretPos - 1) + 1;
        const endPos = text.indexOf("\n", caretPos);
        const line = text.substring(startPos, endPos === -1 ? text.length : endPos);
	let words = line.split(" ");
	loop2:for(let i = 0; i < words.length; i++){
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
					continue loop2;
				}
				if(words[iteration1].startsWith("<")){
					continue loop2;
				}
		}
		curentWord = getWord();
		if(words[i] == currentWord){
			if(i == 1){
				let array = Object.keys(keyCommands);
				return array
			}
			if(i == 2){
				if(subCommandRead == 1){
					let array = Object.keys(keyCommands[firstWord]);
					return array
				}else{
					let array = [];
					if(keyCommands[firstWord].w2.keywords == true){
						array[...keywords];
					}else if(keyCommands[firstWord].w2.allowedParams == true){
						array[...keyCommands[firstWord].w2.allowedParams];
					}

					if(keyCommands[firstWord].w2.words == true){
						array[...vars];
					}else if(keyCommands[firstWord].w2.allowedWords !== false){
						array[...keyCommands[firstWord].w2.allowedWords]
					}
					return array
				}
			}

			if(i > 2){
				let w = `w${i}`
				let array = [];
				if(keyCommands[firstWord][w].keywords == true){
					array[...keywords];
				}else if(keyCommands[firstWord][w].allowedParams == true){
					array[...keyCommands[firstWord][w].allowedParams];
				}

				if(keyCommands[firstWord][w].words == true){
					array[...vars];
				}else if(keyCommands[firstWord][w].allowedWords !== false){
					array[...keyCommands[firstWord][w].allowedWords]
				}
				return array
			}
		}
}

function compareWord() {
    const currentWord = getWord();
    const wordArray = getArray();
    const similar = document.getElementById("helper");
    const similarWords = wordArray.filter(word => word.startsWith(currentWord));
    if (similarWords.length > 0) {
        similar.textContent = similarWords.join(", ");
    } else {
        similar.textContent = "nothing";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Tab' && event.target.tagName === 'TEXTAREA') {
        const currentWord = getWord();
        const similarWords = getArray();
        if (similarWords.length > 0) {
            const textarea2 = event.target;
            const caretPos = textarea2.selectionStart;
            const startPos = textarea2.value.lastIndexOf(" ", caretPos - 1) + 1;
            const endPos = textarea2.value.indexOf(" ", caretPos);
            const remainingText = textarea2.value.substring(endPos === -1 ? textarea2.value.length : endPos);
            const autocompleteWord = similarWords[0];
            textarea2.value = textarea2.value.substring(0, startPos) + autocompleteWord + remainingText;
        }
    }
});
