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

async function obtenerSolicitudes() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/solicitudes/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error(`Error al obtener las solicitudes: ${response.data.detail}`);
        }
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Error al obtener las solicitudes');
    }
}

async function obtenerSolicitudPorId(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/solicitudes/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error(`Error al obtener la solicitud con ID ${id}: ${response.data.detail}`);
        }
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error al obtener la solicitud con ID ${id}`);
    }
}

async function actualizarSolicitud(id, solicitudData) {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/solicitudes/${id}`, solicitudData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status !== 200) {
            throw new Error(`Error al actualizar la solicitud con ID ${id}: ${response.data.detail}`);
        }
        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error al actualizar la solicitud con ID ${id}`);
    }
}

export { registrarSolicitud, obtenerSolicitudes, obtenerSolicitudPorId, actualizarSolicitud };