export function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const $addPerson = 'ADD_PERSON';
export const addPerson = makeActionCreator($addPerson, 'person');
