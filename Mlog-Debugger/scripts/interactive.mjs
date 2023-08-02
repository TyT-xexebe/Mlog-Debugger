// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"
console.log("started...")
const textarea = document.getElementById('codeInput');
const code = textarea.value.trim();
const lines = code.split('\n');

let syntaxHelper = () => {
  let cursorPos = textarea.selectionStart;
  let text = textarea.value;
  let startOfLine = text.lastIndexOf('\n', cursorPos - 1) + 1;
  let endOfLine = text.indexOf('\n', cursorPos);
  if (endOfLine === -1) {
    endOfLine = text.length;
  }
  let lineText = text.substring(startOfLine, endOfLine);
  console.log(lineText)
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
			if(words[iteration2].startsWith("<")){
				continue loop;
			}
	console.log(commandToFind.syntax)
      let output = document.getElementById("suggestions");
      output.value = commandToFind.syntax;
    }
    
  }
}
textarea.addEventListener("input", (syntaxHelper));
