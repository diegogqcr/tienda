
//Carpeta de servicios -Cualquier solicitud http la vamos hacer aca.

//generalmente vamos hacer una funcion para hacer el feching de los datos
//y apartir de esa info a otras funciones para manipular la info recibida
//requeste hace el llamado a la api
//items almacena los datos  o el json que trae la peticion request.json

export async function getItems(){
    const request = await fetch('http://localhost:3000/api/items')
    const items = await request.json();

    return items;
}
//primera funcion para traer los datos del api y almacenarlos en items
//Creando una funcion getLastestItems que me nuestra los 3 items primeros
export async function getLastestItems(){
    const items = await getItems();

    return items.slice(0,3);//primeros 3 items
}

