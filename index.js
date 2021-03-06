const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  var temp_kittens = kittens;
  temp_kittens.push(name);
}

function destructivelyPrependKitten(name){
  var temp2_kittens = kittens;
  temp2_kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
