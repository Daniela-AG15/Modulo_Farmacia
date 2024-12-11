import axios from 'axios';

async function obtenerServiciosMedicos() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/servicios_medicos/", {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error("Error al obtener los servicios médicos");
        }
        return response.data;
    } catch (error) {
        console.error("Error al enviar la petición de servicios médicos al servidor: " + error);
        throw error;
    }
}

export { obtenerServiciosMedicos };