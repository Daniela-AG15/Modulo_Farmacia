import axios from 'axios';

function obtenerPersonas() {
    try {
        const response = axios.get("https://127.0.0.1:8000/persons/", {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error("Error al obtener las personas");
        }
        //const response = axios.get("https://pokeapi.co/api/v2/pokemon/");
        console.info("Datos: " + response.data);
        return response.data;
    } catch (error) {
        console.error("Error al enviar la petición de personas al servidor: " + error);
        throw error;
    }
}

export { obtenerPersonas };