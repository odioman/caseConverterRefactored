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

function snakeCaseToCamelCaseConverter(snakeCase) {
  const finalArr = [];
  const snakeCaseSplit = snakeCase.map(string => string.split('_'))
  console.log(snakeCaseSplit)
  for (let i = 0; i <snakeCaseSplit.length; i++) {
    const joinWordArr = [];
    for (let j=1; j<snakeCaseSplit[i].length; j++) {
      const capitalLetter = snakeCaseSplit[i][j][0].toUpperCase();
      console.log(capitalLetter);
      const restOfWord = snakeCaseSplit[i][j].slice(1);
      console.log(restOfWord);
      const joinWord = capitalLetter + restOfWord
      console.log(joinWord);
      joinWordArr.push(joinWord)
      console.log(joinWordArr)
    }
    joinWordArr.unshift(snakeCaseSplit[i][0])
    console.log(joinWordArr)
    const camelCase = joinWordArr.join('');
    console.log("camelCase: ", camelCase);
    finalArr.push(camelCase);
    console.log(finalArr)
  }
  return finalArr;
}

//console.log(snakeCaseToCamelCaseConverter(snakeCase));

const kebabCaseObj = { key1: 'value-1', key2: 'value-two'}

function kebabCaseToSnakeCaseConverter(kebabCaseObj) {
  const strSplit = Object.values(kebabCaseObj).map(string => string.split('-'));
  const strJoin = strSplit.map(string => string.join('_'));
  kebabCaseObj['key1'] = strJoin[0];
  kebabCaseObj['key2'] = strJoin[1];
  //console.log(kebabCaseObj);
  return kebabCaseObj
}

console.log(kebabCaseToSnakeCaseConverter(kebabCaseObj));

const kebabCaseObj = { key1: 'value-1', key2: 'value-two'}

function kebabCaseToSnakeCaseConverter(kebabCaseObj) {
  const strSplitAndJoin = Object.values(kebabCaseObj)
    .map(string => string.split('-'))
    .map(string => string.join('_'));
  console.log(strSplitAndJoin)
  const newObj = {};
  for (const property in strSplitAndJoin) {
     console.log(`key${Number(property)+1}: ${strSplitAndJoin[property]}`);
    return `key${Number(property)+1}: ${strSplitAndJoin[property]}`;
  }
  return newObj
}

console.log(kebabCaseToSnakeCaseConverter(kebabCaseObj));
