/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timeRemaining) {
  if(timeRemaining == 0){
    return 'Lasagna is done.';
  }else if(timeRemaining > 0){
    return 'Not done, please wait.';
  }else{
    return 'You forgot to set the timer.';
  }
}

export function preparationTime(layers,estTime = 2){
  return layers.length * estTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  let item;
  
  for (let i = 0; i < layers.length; i++) {
    item = layers[i];
    switch(item){
      case "noodles":
        noodles += 50;
        break
      case "sauce":
        sauce += 0.2;
        break;
      default:
        break;
    }
  }
  return({
      noodles : noodles,
      sauce : sauce
    });
}

export function addSecretIngredient(fList,mList) {
  mList.push(fList[fList.length - 1]);
  console.log(mList);
}

export function scaleRecipe(recipe, count) {
  console.log(recipe);
  console.log(count);
  let newRecipe = {};
  let portionCount = count / 2;

  for (let ingredient in recipe) {
    console.log(ingredient+" : "+ newRecipe[ingredient]);
    newRecipe[ingredient] = recipe[ingredient] * portionCount;
    console.log(ingredient+" : "+ newRecipe[ingredient]);
  }
  return newRecipe;
}



