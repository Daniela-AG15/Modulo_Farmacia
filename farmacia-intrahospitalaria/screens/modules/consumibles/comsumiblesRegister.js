import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AgregarConsumibleScreen = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [tipo, setTipo] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [estatus, setEstatus] = useState('');

    // Simulación de agregar un consumible
    const handleAgregarConsumible = () => {
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

            {/* Selector de Tipo */}
            <Text style={styles.label}>Tipo</Text>
            <Picker
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un tipo" value="" />
                <Picker.Item label="Material" value="Material" />
                <Picker.Item label="Equipo" value="Equipo" />
                <Picker.Item label="Instrumento" value="Instrumento" />
            </Picker>

            {/* Selector de Departamento */}
            <Text style={styles.label}>Departamento</Text>
            <Picker
                selectedValue={departamento}
                onValueChange={(itemValue) => setDepartamento(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un departamento" value="" />
                <Picker.Item label="Farmacia" value="Farmacia" />
                <Picker.Item label="Urgencias" value="Urgencias" />
                <Picker.Item label="Laboratorio" value="Laboratorio" />
            </Picker>

            {/* Selector de Estatus */}
            <Text style={styles.label}>Estatus</Text>
            <Picker
                selectedValue={estatus}
                onValueChange={(itemValue) => setEstatus(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un estatus" value="" />
                <Picker.Item label="Activo" value="Activo" />
                <Picker.Item label="Inactivo" value="Inactivo" />
            </Picker>

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

export default AgregarConsumibleScreen;