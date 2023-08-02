// imports all commands and his settings
import {keyCommands, keywords} from "../scripts/ObjectsMlog.mjs"

const textarea = document.getElementById('codeInput');
const code = textarea.value.trim();
const lines = code.split('\n');

let syntaxHelper = () => {
  for (let iteration1 = 0; iteration1 < lines.length; iteration1++){
		let words = lines[iteration1].split(' ');
    firstWord = words[0];
    secondWord = words[1];
    
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
				lines[iteration1] = words.join(' ');
				continue MainLoop;
			}
			if(words[iteration2].startsWith("<")){
				continue MainLoop;
			}

      let output = document.getElementById("suggestions");
      output.value = commandToFind.syntax;
    }
    
  }
}
