// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const copyOfCats = [...cats]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
cats;

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
cats;

function destructivelyRemoveLastCat(name) {
    cats.pop("Ralph");
}
cats;

function destructivelyRemoveFirstCat(name){
    cats.shift("Bob");
}

function appendCat(name) {
    return [...cats, name];
}
  
appendCat("Broom");
  
  
function prependCat(name) {
    return [name, ...cats];
}
  
prependCat("Arnold");
  
function removeLastCat() {
    return cats.slice(0,2)
}
  
removeLastCat();
  
function removeFirstCat() {
    return cats.slice(1);
}
  
removeFirstCat();

