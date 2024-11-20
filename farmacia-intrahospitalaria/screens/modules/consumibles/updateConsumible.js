import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ActualizarConsumibleScreen = ({ route, navigation }) => {
    // Recibiendo los datos del consumible que se va a actualizar
    const { consumible } = route.params;

    const [nombre, setNombre] = useState(consumible?.nombre || '');
    const [descripcion, setDescripcion] = useState(consumible?.descripcion || '');
    const [cantidad, setCantidad] = useState(consumible?.cantidad || '');
    const [tipo, setTipo] = useState(consumible?.tipo || '');
    const [departamento, setDepartamento] = useState(consumible?.departamento || '');
    const [estatus, setEstatus] = useState(consumible?.estatus || '');

    // Simulación de actualizar un consumible
    const handleActualizarConsumible = () => {
        const updatedConsumible = {
            id: consumible.id,
            nombre,
            descripcion,
            cantidad,
            tipo,
            departamento,
            estatus,
        };

        // Aquí iría la lógica para actualizar el consumible en la API o en un estado global.
        Alert.alert('Consumible Actualizado', `Se ha actualizado el consumible: ${nombre}`);

        navigation.goBack(); // Volver a la pantalla anterior
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Consumible</Text>
            </View>

            {/* Formulario */}
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={descripcion}
                onChangeText={setDescripcion}
            />
            <TextInput
                style={styles.input}
                placeholder="Cantidad"
                keyboardType="numeric"
                value={cantidad}
                onChangeText={setCantidad}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo"
                value={tipo}
                onChangeText={setTipo}
            />
            <TextInput
                style={styles.input}
                placeholder="Departamento"
                value={departamento}
                onChangeText={setDepartamento}
            />
            <TextInput
                style={styles.input}
                placeholder="Estatus"
                value={estatus}
                onChangeText={setEstatus}
            />

            {/* Botón de actualizar */}
            <TouchableOpacity style={styles.addButton} onPress={handleActualizarConsumible}>
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
        marginBottom: 30
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
    backButton: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 16,
        color: '#003DA5',
        fontWeight: 'bold',
    },
});

export default ActualizarConsumibleScreen;