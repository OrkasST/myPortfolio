/*
let textForEncryption = document.getElementById('encryptThis').value
	result = document.getElementById('encryptedText');
console.log(textForEncryption);
*/
const dictionary = [
	'a', //0
	'b', //1
	'c', //2
	'd', //3
	'e', //4
	'f', //5
	'g', //6
	'h', //7
	'i', //8
	'j', //9
	'k', //10
	'l', //11
	'm', //12
	'n', //13
	'o', //14
	'p', //15
	'q', //16
	'r', //17
	's', //18
	't', //19
	'u', //20
	'v', //21
	'w', //22
	'x', //23
	'y', //24
	'z', //25
	' ', //26
];


function encrypt () {
	console.log(dictionary);

	let textForEncryption = document.getElementById('encryptThis').value,
		keyWord = document.getElementById('keyWord').value,
		result = document.getElementById('encryptedText'),
		textArray = [],
		keyArray = [],
		length = textForEncryption.length,
		keyLength = keyWord.length,
		resultText = '';

	console.log('Text for encryption: ',textForEncryption);

	for(let i = 0; i < length; i++) {
		let str = textForEncryption[i].toLowerCase();
		console.log(str.toLowerCase());
        textArray.push(str);
        console.log(textArray[i]);

    } 

	console.log('Keyword: ', keyWord);
    for(let i = 0; i < keyLength; i++) {

        keyArray.push(keyWord[i]);
        console.log(keyArray[i]);

    } 

    console.log('Encrypting...');
    console.log('Keyword:');
    let keyPlusArray = [];
    for(let key = 0; key < keyLength; key++){
    	let keyPlus = 0;
    	while(keyArray[key] !== dictionary[keyPlus]) {
    		keyPlus++;
    	}
    	console.log(keyArray[key], ' = ', keyPlus)
    	keyPlusArray.push(keyPlus);
    }
    console.log(keyPlusArray);
    console.log('Text for encryption:');
    let encryptedKey = 0;
    for(let ind = 0; ind < textArray.length; ind++) {
    	let inner = 0;
    	let resultKey = 0;
    	while(textArray[ind] !== dictionary[inner]) {
    		inner++;
    	}
    	if (inner + keyPlusArray[encryptedKey] >= dictionary.length) {
    		resultKey = (keyPlusArray[encryptedKey] - (dictionary.length - 1 - inner)) - 1;
    	} else {
    		resultKey = inner + keyPlusArray[encryptedKey];
    	}
    	encryptedKey++;
    	if(encryptedKey === keyLength) {
    		encryptedKey = 0;
    	}
    	console.log(textArray[ind], ' = ', dictionary[inner], ' = ', dictionary[resultKey]);
    	textArray[ind] = dictionary[resultKey];
    }

    resultText = textArray.join(''); 
    result.innerHTML = resultText;

}