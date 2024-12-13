    import axios from 'axios';

    async function obtenerPersonas() {
        try {
            const response = await axios.get("http://127.0.0.1:8000/personal_medico/", {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status !== 200) {
                throw new Error("Error al obtener las personas");
            }

            return response.data;
        } catch (error) {
            console.error("Error al enviar la petición de personas al servidor: " + error);
            throw error;
        }
    }

    export { obtenerPersonas };
