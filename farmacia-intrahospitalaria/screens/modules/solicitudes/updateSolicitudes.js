import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ActualizarSolicitudScreen = ({ route, navigation }) => {
    const { solicitud } = route.params; // Los datos de la solicitud vienen como parámetro

    // Estados para los campos del formulario
    const [paciente, setPaciente] = useState('');
    const [medico, setMedico] = useState('');
    const [servicio, setServicio] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [situacion, setSituacion] = useState('');
    const [aprobacion, setAprobacion] = useState('');

    // Cargar los datos de la solicitud al montar el componente
    useEffect(() => {
        if (solicitud) {
            setPaciente(solicitud.paciente);
            setMedico(solicitud.medico);
            setServicio(solicitud.servicio);
            setPrioridad(solicitud.prioridad);
            setDescripcion(solicitud.descripcion);
            setSituacion(solicitud.situacion);
            setAprobacion(solicitud.aprobacion);
        }
    }, [solicitud]);

    const handleActualizarSolicitud = () => {
        const solicitudActualizada = {
            paciente,
            medico,
            servicio,
            prioridad,
            descripcion,
            situacion,
            aprobacion,
        };

        // Simulación de actualización
        Alert.alert('Solicitud Actualizada', `Se han actualizado los datos de la solicitud para el paciente: ${paciente}`);
        navigation.goBack(); // Regresar a la pantalla anterior
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Solicitud</Text>
            </View>

            {/* Paciente */}
            <TextInput
                style={styles.input}
                placeholder="Paciente"
                value={paciente}
                onChangeText={setPaciente}
            />

            {/* Médico */}
            <TextInput
                style={styles.input}
                placeholder="Médico"
                value={medico}
                onChangeText={setMedico}
            />

            {/* Servicio */}
            <Text style={styles.label}>Servicio</Text>
            <Picker
                selectedValue={servicio}
                onValueChange={(itemValue) => setServicio(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un servicio" value="" />
                <Picker.Item label="Consulta General" value="Consulta General" />
                <Picker.Item label="Urgencias" value="Urgencias" />
                <Picker.Item label="Laboratorio" value="Laboratorio" />
                <Picker.Item label="Imagenología" value="Imagenología" />
            </Picker>

            {/* Prioridad */}
            <Text style={styles.label}>Prioridad</Text>
            <Picker
                selectedValue={prioridad}
                onValueChange={(itemValue) => setPrioridad(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una prioridad" value="" />
                <Picker.Item label="Alta" value="Alta" />
                <Picker.Item label="Media" value="Media" />
                <Picker.Item label="Baja" value="Baja" />
            </Picker>

            {/* Descripción */}
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descripción"
                multiline
                value={descripcion}
                onChangeText={setDescripcion}
            />

            {/* Situación o Estatus */}
            <Text style={styles.label}>Situación</Text>
            <Picker
                selectedValue={situacion}
                onValueChange={(itemValue) => setSituacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una situación" value="" />
                <Picker.Item label="Pendiente" value="Pendiente" />
                <Picker.Item label="En Proceso" value="En Proceso" />
                <Picker.Item label="Completado" value="Completado" />
            </Picker>

            {/* Aprobación */}
            <Text style={styles.label}>Aprobación</Text>
            <Picker
                selectedValue={aprobacion}
                onValueChange={(itemValue) => setAprobacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un estado de aprobación" value="" />
                <Picker.Item label="Aprobado" value="Aprobado" />
                <Picker.Item label="Rechazado" value="Rechazado" />
                <Picker.Item label="Pendiente" value="Pendiente" />
            </Picker>

            {/* Botón de guardar cambios */}
            <TouchableOpacity style={styles.addButton} onPress={handleActualizarSolicitud}>
                <Text style={styles.addButtonText}>Actualizar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    input: {
        height: 45,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: '#FFF',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    picker: {
        height: 50,
        backgroundColor: '#FFF',
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#003DA5',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ActualizarSolicitudScreen;