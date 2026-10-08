async function ObtenerPosts(page = 1, limit = 10) {

    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

    const resultado = await fetch(url);

    if (!resultado.ok) {
        throw new Error("Problemas al mostrar los posts");
    }

    const datosJson = await resultado.json();

    return datosJson;
}

export { ObtenerPosts, BuscarPosts }

async function BuscarPosts(busqueda = "") {

    const url = `https://jsonplaceholder.typicode.com/posts?title_like=${busqueda}`;

    const resultado = await fetch(url);

    if (!resultado.ok) {
        throw new Error("Problemas al buscar los posts");
    }

    const datosJson = await resultado.json();

    return datosJson;
}