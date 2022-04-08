
const task1 = require("./module/task1");
const task2 = require("./module/task2");
const fs = require('fs');
const program = require('commander');
const valid = require("./module/valid");
const prompt = require('prompt-sync')();

const actions = async _ => {
    const { active,input, output} = program.opts();
    if(valid.isEmpty(input) && valid.isEmpty(output)){
        const word = prompt('enter the value   ');
       if(active == "task1"){
        console.log(task1.duplicateEncode(word));
          }
      if(active == "task2"){
         console.log(task2.multiplicationTable(word));  
       }

    }else{
    if(active == "task1"){
      fs.appendFileSync(output,
        task1.duplicateEncode(
            fs.readFileSync(input,"utf8")));
        }
    if(active == "task2"){
        fs.appendFileSync(output,
            task2.multiplicationTable(
                parseInt(
                    fs.readFileSync(input,"utf8"))).join(']['));  
     }
    }

}


program
   .option('-a, --active <filename>', 'An task name')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);