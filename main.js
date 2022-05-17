let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 
'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
'-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'Program',);

secretMessage.splice(7, 1, 'right');

secretMessage.shift();

secretMessage.splice(0, 1, 'Programming');

secretMessage.splice(6, 7,)
secretMessage.splice(8, 9,) 
secretMessage.splice(10, 'know');

console.log(secretMessage.join(' '));
