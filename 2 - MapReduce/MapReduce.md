# MapReduce

MapReduce es un modelo de programación nacido en la necesidad de poder dividir una operación para ser ejecutada sobre 
multiples maquinas, y esta necesidad nace de los grandes volumenes de data que hay que computar. El nombre de este 
modelo esta inspirado en el par de funciones de programacion funcional: Map y Reduce.

## Alcance

No todos los problemas pueden ser abordados por este framework, sino que sólo aquellos que puedan ser segragados en el
par de operaciones map() y reduce(), estas funciones estan ambas definidas respectoa a data estructurada de la forma 
clave-valor. 

Los frameworks de MapReduce estan usualmente compuestos por una serie de tres operaciones:
* Map: cada nodo aplicara la funcion map sobre su coleccion de data
* Shuffle: se ordena la data de cada nodo a partir de la key generada por el map
* Reduce. procesa cada grupo de keys en paralelo.

Map

    input: <k1, v1>
    output: list (<k2, v2>)

Reduce

    input <k2, list(v2)>
    output: list (<k3, v3>)


### Ejemplo

Contar el numero de palabras dentro de una lista de documentos.

Si tengo cuatro documentos para dos computadoras y asigno dos a cada computadora

map va a devolver tuplas con la cantidad de veces que aparece la palabra en el documento, siendo la palabra la key y el
value la cantidad de veces que aparece en el documento.

pc1:
    
    input: document1, document2
    output: [<cat, 10>, <dog, 3>]
    
pc2:

    input: document3, document4
    output: [<cat, 44>, <dog, 5>]

shuffle:
este proceso va a ordenar los outputs de los resultados de la operacion map para ser usados por el proceso Reduce

    <cat, [<cat, 10>, <cat, 44>]>
    <dog, [<dog, 5>, <dog, 3>]>

reduce va a ser llamado por cada clave unica luego de ordenados los resultados del map. En este caso reduce se ejecutara
para las palabra cat en una maquina y para la palabra dog en la otra, retornando como resultado la suma de los mismos.

pc1:

    input: <cat, [<cat, 10>, <cat, 44>]>
    output: <cat, 54>

pc2: 

    input:  <dog, [<dog, 5>, <dog, 3>]>    
    output: <dog, 8>

final: 
    
    output: [<cat, 54>, <dog, 8>]
    
#### Node

Aca dejo un framework MapReduce para nodejs https://github.com/TeamMapR/d-mapreduce
    
