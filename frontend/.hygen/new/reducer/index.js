module.exports = {
  prompt: ({inquirer}) => {
    const questions = [
      {
        type: 'input',
        name: 'reducerName',
        message: 'What is the reducer name?'
      }
    ];
    return inquirer
      .prompt(questions)
      .then(answers => {
        let {reducerName} = answers;
        if (!reducerName.endsWith('Reducer')) {
          console.log('reducer name must end with "Reducer"');
          reducerName+= 'Reducer';
        }
        return {reducerName, sliceName: reducerName.replace('Reducer', '')};
      });
  }
};