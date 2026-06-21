function reverse(array) {
  const novo = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    novo.push(array[i]);
  }
  
  return novo;
}


const listaTeste = [1, 2, 3, 4];
console.log(reverse(listaTeste));