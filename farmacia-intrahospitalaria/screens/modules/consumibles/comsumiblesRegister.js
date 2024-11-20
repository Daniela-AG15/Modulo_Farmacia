import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AgregarConsumibleScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [estatus, setEstatus] = useState('');

    // Simulación de agregar un consumible
    const handleAgregarConsumible = () => {
        // Aquí iría la lógica para agregar el consumible a la API o a un estado global.
        const newConsumible = {
            nombre,
            descripcion,
            cantidad,
            tipo,
            departamento,
            estatus,
        };

        Alert.alert('Consumible Agregado', `Se ha agregado el consumible: ${nombre}`);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registrar Consumible</Text>
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

            {/* Botón de agregar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAgregarConsumible}>
                <Text style={styles.addButtonText}>Agregar</Text>
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

export default AgregarConsumibleScreen;