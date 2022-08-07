let ololo = confirm('Start test with three favorit words!');
let word;
let final = '';

if(!ololo) alert('Try again!!!');
if(ololo) {

    let numberOperation = 3;

    for(let operation = 1; operation <= numberOperation; operation++) {

        let testWhile = false;
        
        do {
            word = prompt(`need enter three words for program! word #${operation}`)

            if(word) {
                word = word.trim();
                testWhile = false;

                for(let letter=0; letter<word.length; letter++) {
                    
                    let letterAlone = word[letter]; // take simbol of index

                    // console.log(letterAlone);

                    let letterNumber = +word[letter]; //nan - letter, number - number

                    // console.log(letterNumber);

                    let testNaNNumber = isNaN(letterNumber); // check if nan is true, if Number - false

                    // console.log(testNaNNumber);

                    if(testNaNNumber === false) {
                        testWhile = true;
                        // console.log(testWhile);
                    } 
                }
            }
        } while(!word || word === '' || testWhile);

        let fontKey = true;
        let fontStyle;
        let bigLetter;

        do {

            fontKey = true;

            fontStyle = prompt(`Enter font style for word '${word}: uppercase or lowercase or capitalize`)
            
            if(fontStyle) {
                
                fontStyle = fontStyle.trim();
                fontStyle = fontStyle.toLowerCase();

                if(fontStyle === 'uppercase') {
                    fontKey = false;
                    word = word.toUpperCase();
                } else if(fontStyle === 'lowercase') {
                    fontKey = false;
                    word = word.toLowerCase();
                } else if(fontStyle === 'capitalize') {
                    fontKey = false;
                    word = word[0].toUpperCase() + word.slice(1);
                }
            }
        } while(fontKey);

        final += word; // concat word1 + word2 + word3 => one long word

        // console.log(final);

        if(operation === numberOperation) {
            final += '';
        } else {
            final += ' ';
        }
    }
}

console.log(`total word - ❤ ${final} ❤`);