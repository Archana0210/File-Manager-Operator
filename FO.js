// we are creating a file manager


let inputArr = process.argv.slice(2);

let command = inputArr[0] //tree ,organise, help

//js me input array ke form me jaata hai that is process.argv Array

//switch(command){
   // case'tree':
    //console.log('Tree Implemented')
    //break;
   // case'organize':
   // console.log('organize Implemented')
   // break;
   // case 'help':
   // console.log('Help Implemented')
   // break;
    //default:
   // console.log('PLEASE ENTER A VALID COMMAND')
   // break;
//}
switch(command){
    case'tree':
    console.log('Tree Implemented')
    break;
    case'organize':
    console.log('organize Implemented')
    break;
    case 'help':
    helpfn()
    break;
    default:
    console.log('PLEASE ENTER A VALID COMMAND')
    break;
}
function helpfn(){
    console.log(`List of all the commands
               1) Tree command - node FO.js tree <dirname>
               2) Organize command - node FO.js organize <dirname>
               3) Help command - node FO.js help`)
}