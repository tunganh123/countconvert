const countconvert = (input) => {
  const listconvert = {
    aw: "ă",
    aa: "â",
    dd: "đ",
    ee: "ê",
    oo: "ô",
    ow: "ơ",
    w: "ư",
  };
  let count = 0;
  for (let index = 0; index < input.length; index++) {
    let character = input[index];
    let nextcharacter = input[index + 1];
    let combine = character + nextcharacter;
    if (listconvert.hasOwnProperty(combine)) {
      count++;
      index++;
      continue;
    }
    if (listconvert.hasOwnProperty(character)) {
      count++;
    }
  }
  return count;
};
