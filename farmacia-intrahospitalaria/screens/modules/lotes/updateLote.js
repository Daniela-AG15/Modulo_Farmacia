import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ActualizarLoteScreen = ({ route, navigation }) => {
    const { lote } = route.params;

    const [medicamento, setMedicamento] = useState(lote?.medicamento || '');
    const [personalM, setPersonalM] = useState(lote?.personalM || '');
    const [clave, setClave] = useState(lote?.clave || '');
    const [estatus, setEstatus] = useState(lote?.estatus || '');
    const [costo, setCosto] = useState(lote?.costo?.toString() || '');
    const [cantidad, setCantidad] = useState(lote?.cantidad?.toString() || '');
    const [ubicacion, setUbicacion] = useState(lote?.ubicacion || '');

    const handleActualizarLote = () => {
        const updatedLote = {
            id: lote.id,
            medicamento,
            personalM,
            clave,
            estatus,
            costo,
            cantidad,
            ubicacion,
        };

        Alert.alert('Lote Actualizado', `Se ha actualizado el lote: ${medicamento}`);
        navigation.goBack(); // Regresar a la pantalla anterior
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Lote</Text>
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

            {/* Selector de Personal Médico */}
            <Text style={styles.label}>Personal Médico</Text>
            <Picker
                selectedValue={personalM}
                onValueChange={(itemValue) => setPersonalM(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un médico" value="" />
                <Picker.Item label="Material" value="Material" />
                <Picker.Item label="Equipo" value="Equipo" />
                <Picker.Item label="Instrumento" value="Instrumento" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Clave"
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
                <Picker.Item label="Seleccione un estatus" value="" />
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
                placeholder="Ubicación"
                value={ubicacion}
                onChangeText={setUbicacion}
            />

            {/* Botón de actualizar */}
            <TouchableOpacity style={styles.addButton} onPress={handleActualizarLote}>
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

export default ActualizarLoteScreen;