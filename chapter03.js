/*
/^Percial/  match letter P E R C I V A L from the start of the string  
// /[1-9][0-9]star/ Match non-zore digit, followed by any # of digits 
// /\bpercival\b/i ///match percival as a word and case sensitive 

Methods : search(), match(), test(), split(), replace()




*/

let text = "tests : 1,18,300,-4";
let pattern = /\d+/g;
console.log(pattern.test(text));

/*
NB:: when JS interpreter starts , it create a new global object and gives it initial set of properties that define the following
 
global constants : NULL , Undefined, Infinity
global functions : isNaN(), parseInt(), eval()
Constructor functions : Date(), RegExp(), String(), Object(), Array()
Global Objects : Math and JSON
*/
