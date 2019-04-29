# Ejercicio

Queremos escribir un kmer counter usando MapReduce.

La idea es si el genoma es: ACACACAGT

Y nosotros estamos contando 3-mers, la funcion map dara como resultado

    ACA   1
    CAC   1
    ACA   1
    CAC   1
    ACA   1
    CAG   1
    AGT   1

La funcion shuffle los ordenara para que las keys queden junstas

    ACA   1
    ACA   1
    ACA   1
    CAC   1
    CAC   1
    CAG   1
    AGT   1

Y nuestro reducer retornara

    ACA   3
    CAC   2
    CAG   1
    AGT   1
