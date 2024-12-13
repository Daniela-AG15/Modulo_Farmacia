import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const AgregarLoteScreen = ({ navigation, route }) => {
    const [medicamento, setMedicamento] = useState('');
    const [personalM, setPersonalM] = useState('');
    const [clave, setClave] = useState('');
    const [estatus, setEstatus] = useState('');
    const [costo, setCosto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [ubicacion, setUbicacion] = useState('');

    const handleAgregarLote = () => {
        const newLote = {
            id: Date.now(),
            medicamento,
            personalM,
            clave,
            estatus,
            costo,
            cantidad,
            ubicacion,
        };

        navigation.navigate('Lotes', { newLote });

        Alert.alert('Lote Agregado', `Se ha agregado el lote de: ${medicamento}`);
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
                <Picker.Item label="Paracetamol" value="Paracetamol" />
                <Picker.Item label="Neproxina" value="Neproxina" />
                <Picker.Item label="Loratadina" value="Loratadina" />
            </Picker>

            {/* Selector de Personal Medico */}
            <Text style={styles.label}>Personal Medico</Text>
            <Picker
                selectedValue={personalM}
                onValueChange={(itemValue) => setPersonalM(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un médico" value="" />
                <Picker.Item label="Dr. Smith" value="Dr. Smith" />
                <Picker.Item label="Dr. Johnson" value="Dr. Johnson" />
                <Picker.Item label="Dr. Brown" value="Dr. Brown" />
            </Picker>

            {/* Clave */}
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
                <Picker.Item label="Seleccione un estatus" value="" />
                <Picker.Item label="Activo" value="Activo" />
                <Picker.Item label="Inactivo" value="Inactivo" />
            </Picker>

            {/* Costo */}
            <TextInput
                style={styles.input}
                placeholder="Costo"
                keyboardType="numeric"
                value={costo}
                onChangeText={setCosto}
            />

            {/* Cantidad */}
            <TextInput
                style={styles.input}
                placeholder="Cantidad"
                keyboardType="numeric"
                value={cantidad}
                onChangeText={setCantidad}
            />

            {/* Selector de Ubicación */}
            <Text style={styles.label}>Ubicación</Text>
            <Picker
                selectedValue={ubicacion}
                onValueChange={(itemValue) => setUbicacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una ubicación" value="" />
                <Picker.Item label="Área 1" value="Área 1" />
                <Picker.Item label="Área 2" value="Área 2" />
                <Picker.Item label="Área 3" value="Área 3" />
            </Picker>

            {/* Botón de agregar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAgregarLote}>
            <LinearGradient
                    colors={['#1C3150', '#4D6489']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.addButtonText}>Agregar</Text>
                </LinearGradient>
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
    buttonGradient: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    addButton: {
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
