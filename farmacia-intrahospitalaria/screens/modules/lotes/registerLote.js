import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AgregarLoteScreen = ({ navigation }) => {
    const [medicamento, setMedicamento] = useState('');
    const [personalM, setPersonalM] = useState('');
    const [clave, setClave] = useState('');
    const [estatus, setEstatus] = useState('');
    const [costo, setCosto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [ubicacion, setUbiacion] = useState('');

    // Simulación de agregar un consumible
    const handleAgregarLote = () => {
        const newConsumible = {
            medicamento,
            personalM,
            clave,
            estatus,
        };

        Alert.alert('Lote Agregado', `Se ha agregado el lote: ${medicamento}`);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registrar Lote</Text>
            </View>

            {/* Selector de Medicamento */}
            <Text style={styles.label}>Medicamento</Text>
            <Picker
                selectedValue={medicamento}
                onValueChange={(itemValue) => setMedicamento(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un medicamento" value="" />
                <Picker.Item label="Material" value="Material" />
                <Picker.Item label="Equipo" value="Equipo" />
                <Picker.Item label="Instrumento" value="Instrumento" />
            </Picker>

            {/* Selector de Personal Medico */}
            <Text style={styles.label}>Personal Medico</Text>
            <Picker
                selectedValue={personalM}
                onValueChange={(itemValue) => setPersonalM(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un medico" value="" />
                <Picker.Item label="Material" value="Material" />
                <Picker.Item label="Equipo" value="Equipo" />
                <Picker.Item label="Instrumento" value="Instrumento" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Clave"
                keyboardType="text"
                value={clave}
                onChangeText={setClave}
            />

            {/* Selector de Estatus */}
            <Text style={styles.label}>Estatus</Text>
            <Picker
                selectedValue={estatus}
                onValueChange={(itemValue) => setEstatus(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un tipo" value="" />
                <Picker.Item label="Activo" value="Activo" />
                <Picker.Item label="Inactivo" value="Inactivo" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Costo"
                keyboardType="numeric"
                value={costo}
                onChangeText={setCosto}
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
                placeholder="Ubicacion"
                keyboardType="text"
                value={ubicacion}
                onChangeText={setUbiacion}
            />

            {/* Botón de agregar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAgregarLote}>
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

export default AgregarLoteScreen;