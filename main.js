const snakeCase = ['snake_case', 'another_example', 'can_be_many_words'];

function snakeCaseToPascalCase(snakeCase) {
  const joinWordArr = [];
 const snakeCaseSplit = snakeCase.map(string => string.split('_'));
  console.log(snakeCaseSplit)
  for (let i = 0; i < snakeCaseSplit.length; i++) {
     for (let j = 0; j < snakeCaseSplit[i].length; j++) {
       const capitalLetter = snakeCaseSplit[i][j][0].toUpperCase();
       console.log(capitalLetter)
       const restOfWord = snakeCaseSplit[i][j].slice(1);
       console.log(restOfWord);
       const joinWord = capitalLetter + restOfWord;
       console.log(joinWord);
       return joinWord
     }
    joinWordArr.push(joinWord)
    console.log(joinWordArr)
 
    }
  
  }