import axios from 'axios';

async function registrarSolicitud(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/solicitudes/', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error(`Error al registrar la solicitud: ${response.data.detail}`);
        }
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Error al registrar la solicitud');
    }
}

export { registrarSolicitud };