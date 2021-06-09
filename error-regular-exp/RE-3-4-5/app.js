let re;
// Literal Character
re=/hello/;
re=/hello/i;

// Metacharacter symbols
// Must start with
re=/^h/i;
// Must end with
re=/ world$/i;
// Must start and end with
re=/^hello$/i;
// Matches any one character
re=/h.llo/i;
// Matches any characters 0 or more times
re=/h*lo/i;
// Optional character
re=/gre?a?y/;
// escape character
re=/gre?a?y\?/;



// Brackets[]-character sets
// Must be a or e
re=/gr[ae]y/;
// Must be G or F
re=/[GF]ray/;
// Matches anything except a G or F
re=/[^GF]ray/i;
// Matches any uppercase letter
re=/[A-Z]ray/;
// Matches any lowercase letter
re=/[a-z]ray/;
// Matches any letter
re=/[A-Z-a-z]ray/;
// Matches any number
re=/[0-9][A-Z]ray/;



// Braces{}- Quantifiers 
// must have {m} amt of times
re=/Hel{2}o/i;
// must have {m to n} amt of times
re=/Hel{2,4}o/i;
// must have atleast {m} amt of times
re=/Hel{2,}o/i;



// Paranthesis()- grouping
re=/^([0-9]x){3}$/i;



// Shorthand character classes
// word character- alphanumeric or _
re=/\w/;
// + = one or more word char
re=/\w+/;
// Non-word char
re=/\W/;
// digit
re=/\d/;
// digit
re=/\d+/;
// Non-digit
re=/\D/;
// white space char
re=/\s/;
// Non-white space char
re=/\S/;
// word boundary
re=/Hell\b/i;



// Assertions
// match x only if followed by y
re=/x(?=y)/;
// match x only if not followed by y
re=/x(?!y)/;



// string to match
const str='xly';

// log results
const result= re.exec(str);
console.log(result);


function reTest(re,str){
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  }else{
    console.log(`${str} does not match ${re.source}`);
  }
}


reTest(re,str);