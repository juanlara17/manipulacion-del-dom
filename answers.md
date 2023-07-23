# Test Javascript Plazti

### Variables y Operaciones

**¿Qué es una variable y para qué sirve?**

Variable: Es la unidad de memoria destinada para el almacenamiento de algun tipo de dato

**¿Cuál es la diferencia entre declarar e inicializar una variable?**

Declarar: Reserva de un espacio en memoria para algun tipo de dato

Inicializar: Asignacion de un valor a esa variable

**¿Cuál es la diferencia entre sumar números y concatenar strings?**

Sumar numero: operacion matematica que conlleva un resultado por la suma de 2 o mas numero.

Concatenar string: Es el resultado de la union de 2 o mas caractares formando una cadena o frase.

**¿Cuál operador me permite sumar o concatenar?**

Operador suma (+)

1. **Determina el nombre y tipo de dato para almacenar en variables la siguiente información:**

**Nombre** → (String)
**Apellido** → ( String)
    
    **Nombre de usuario platzi** → (String)
    
    **Edad** → Decimal
    
    **Correo Electronico → String**
    
    **Mayor de Edad** → Boolean
    
    **Dinero Ahorrado** → Float
    
    **Deudas** → Float
    

1. **Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.**

```jsx
let nombre = "Juan";
let apellido = "Lara";
let usuario = "juanfecode";
let edad = 34;
let correo_electronico = "admin@admin.com"
let mayor_edad = true;
let dinero_ahorrado = 150.5;
let deudas = 50.5;
```

1. **Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**

```jsx
let nombre = "Juan";
let apellido = "Lara";
let dinero_ahorrado = 150.5;
let deudas = 50.5;

let nombre_completo = nombre + apellido;
let dinero_real = dinero_ahorrado - deudas;

console.log("Mi nombre completo es " + nombre_completo)
console.log("Mi dinero real es $" + dinero_real)
```

### Funciones

1. **Responde las siguientes preguntas en la sección de comentarios:**

**¿Qué es una función?**

Es un bloque de código que puedes ser invocada en un determinado punto de la ejecución del programa para realizar una tarea especifica.I

**¿Cuándo me sirve usar una función en mi código?**

Para hacer un operacion especifica reutilizable.

**¿Cuál es la diferencia entre parámetros y argumentos de una función?**

Parametros: Son los nombres que aparecen en la definicion de una funcion

Argumentos: Son los valores que pasamos y por tanto recibe una funcion

1. **Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:**

```jsx
const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

presentacion(name, lastname, nickname);

function presentacion(name, lastname, nickname) {
  const completeName = name + lastname;
	console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
```

### Condicionales

1. **Responde las siguientes preguntas en la sección de comentarios:**

**¿Qué es un condicional?**

Evalua el estado de una comparacion si es verdadero o false y dependiendo su resultado ejecuta una accion o no.

**Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**

- If: Evalua una unica condicion
- Else: Si la primaria condicion no cumple ejecuta la siguiente
- Switch: Evaluan multiplies condiciones

**¿Puedo combinar funciones y condicionales?**

Si

1. **Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:**
    
    ```jsx
    const tipoDeSuscripcion = "Basic";
    
    if (tipoDeSuscripcion = "Free" ) {
    	console.log("Solo puedes tomar los cursos gratis");
    }else if (tipoDeSuscripcion = "Basic") {
    	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if (tipoDeSuscripcion = "Expert") {
    	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if (tipoDeSuscripcion = "ExpertPlus") {
    	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
    ```
    
2. **Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).**
    
    ```js
    const tipoDeSuscripcion = "Basic";

    function conseguirTipoSuscripcion(suscripcion){
      if (suscripcion == "Free" ) {
    	  console.log("Solo puedes tomar los cursos gratis");
      return
      }
      if (suscripcion == "Basic") {
    	  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
      }
      if (suscripcion == "Expert") {
    	  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
      }
      if (suscripcion == "ExpertPlus") {
    	  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
      }
      console.log("Este tipo de suscripcion no exite!")
    }
    ```
    

### Ciclos

1. **Responde las siguientes preguntas en la sección de comentarios:**

**¿Qué es un ciclo?**

Permite la ejecucion de un codigo repetidas veces, hasta que se cumpla una condicion.

**¿Qué tipos de ciclos existen en JavaScript?**

- for
- while
- do-while

**Qué es un ciclo infinito y por qué es un problema?**

Es un cuando la ejecucion de un codigo queda en una repeticion infinita, lo que genera un saturacion a la memoria y al final un error obligando al navegador detenerse o interrumpa.

1. **Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:**

```jsx
let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

let i = 10;
while (i >= 2 ) {
	console.log("El valor de i es: " + i);
	i--;
}
```

1. **Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

```jsx
resultado = 0;
suma();

function suma(){
resultado = prompt('Por favor digite cual es el resultado de 2 + 2');
  if (resultado == 4){
  console.log("Felicitaciones, correcto!");
	}else {
	  suma();
	}
}
```

### Listas

1. **Responde las siguientes preguntas en la sección de comentarios:**

**Que es un array?**

Es tipo de dato que permite almacen un conjunto de datos permitiendo efectuar operaciones de recorrido y mutacion.

**Que es un objeto?**

Es un ente abstracto que permite representar una entidad del mundo real.

**¿Cuándo es mejor usar objetos o arrays?**

Se usa array cuando se necesita tener una coleccion de datos almacen en un variable. El objeto se emplea cuando se requiere representar algo del mundo real a codigo.

**¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**

Si

1. **Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.**

```jsx
let colores = ["azul", "verde", "rojo"];

primer_color(colores);

function primer_color(colores) {
	for (let i = 0; i < colores.length; i++){
		if(i === 0) {
			console.log(colores[i]);
		}
	}
}
```

1. **Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).**

```jsx
let colores = ["azul", "verde", "rojo"];

primer_color(colores);

function primer_color(colores) {
	for (let i = 0; i < colores.length; i++){		
			console.log(colores[i]);		
	}
}
```

1. **Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).**

```jsx
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

imprimir_objeto(myCar);

function imprimir_objeto(myCar) {
  const array = Object.values(myCar); 
	for (let i = 0; i < array.length; i++){		
			console.log(array[i]);		
	}
}
```
### Bonus

```js
const tiposDeSucripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
} 

function conseguirTipoSuscripcion(suscripcion) {
  if (tiposDeSucripciones[suscripcion]){
    console.log(tiposDeSucripciones[suscripcion])
    return;
  }
  console.warn("Este tipo de suscripcion no existe!")
}
```
