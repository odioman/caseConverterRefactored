const snakeCase = ['snake_case', 'another_example', 'can_be_many_words'];

function snakeCaseToPascalCase(snakeCase) {
 const finalArr = [];
 const snakeCaseSplit = snakeCase.map(string => string.split('_'));
  console.log(snakeCaseSplit)
  for (let i = 0; i < snakeCaseSplit.length; i++) {
    const joinWordArr = [];
     for (let j = 0; j < snakeCaseSplit[i].length; j++) {
       const capitalLetter = snakeCaseSplit[i][j][0].toUpperCase();
       console.log(capitalLetter)
       const restOfWord = snakeCaseSplit[i][j].slice(1);
       console.log(restOfWord);
       const joinWord = capitalLetter + restOfWord;
       console.log(joinWord);
       joinWordArr.push(joinWord) 
     }
       const pascalCase = joinWordArr.join('');
       console.log('pascalCase: ', pascalCase)
       finalArr.push(pascalCase);
       console.log("finalArr: ", finalArr); 
    }
    return finalArr
}