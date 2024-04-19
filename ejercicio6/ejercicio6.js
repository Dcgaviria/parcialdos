
/*Dado el siguiente array: let frutas = ['manzana', 'plátano', 'pera',
'naranja'], utiliza el método asociado a los arrays para eliminar el primer
elemento, el último elemento e inserta al inicio del array el valor de nueva-fruta */
let frutas = ['manzana', 'plátano', 'pera', 'naranja'];

frutas.shift();
frutas.pop();

frutas.unshift('nueva-fruta');
console.log(frutas);

