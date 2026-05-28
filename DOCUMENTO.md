# Hotel El Dorado - Documento Final

## Porque este proyecto
Llevo unos meses desarrollando una aplicacion web para un
negocio familiar de hoteleria que tiene mi madre. El hotel se
llama El Dorado y quise aprovechar meter la misma dinamica al
proyecto final, las estructuras de datos que vimos en clase.
En este proyecto meti la mayoria de cosas vistas en clases,
no quise sobrecargar el proyecto final con lo que ya tengo
pero si le implemente muchas cosas pa que se vea bonito y
que se note que le meti empeño.

## Que hace la pagina
Es una plataforma web donde se puede ver la info del hotel,
las habitaciones organizadas por piso, los lugares turisticos
que hay cerca y tiene un sistema de login real con Firebase.
Ya adentro se puede manejar la recepcion de los huespedes,
ver el historial de reservas, buscar huespedes por nombre
y un chat en tiempo real para atencion.

## Que use para hacerlo
- React con Vite
- SASS para los estilos
- Firebase para el login, registro y el chat
- React Router para las paginas

## Las estructuras de datos

### Pila
La use en el historial de reservas porque necesito que la
reserva mas nueva salga de primeras como pasa en cualquier
historial. Eso es LIFO, el ultimo que entra sale primero.

### Cola
La use en la recepcion, es la fila de los huespedes que van
llegando al hotel. El que llego primero se atiende primero
como en cualquier fila. Eso es FIFO.

### Arbol
La use para las habitaciones. El hotel tiene pisos y cada
piso tiene tipos de cuartos entonces queda como un arbol
con ramas. El hotel es la raiz, los pisos son las ramas y
los cuartos son las hojas.

### Trie
La use para buscar huespedes por nombre. Uno va escribiendo
y le va saliendo los que coinciden, como un autocompletado.
El Trie sirve para eso porque busca por letras.

### Grafo
La use para los lugares turisticos cerca del hotel.
Cada lugar esta conectado con otros y no hay jerarquia
como en un arbol, es mas como un mapa de sitios.
