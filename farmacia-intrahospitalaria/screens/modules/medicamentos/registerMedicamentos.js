import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AgregarMedicamentoScreen = ({ navigation }) => {
    const [nombreC, setnombreC] = useState('');
    const [nombreG, setnombreG] = useState('');
    const [viaAdministracion, setviaAdministracion] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [tipo, setTipo] = useState('');
    const [volumen, setVolumen] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [estatus, setEstatus] = useState('');

    // Simulación de agregar un consumible
    const handleAgregarLote = () => {
        const newMedicamento = {
            nombreC,
            nombreG,
            viaAdministracion,
            presentacion,
            tipo,
            volumen,
            cantidad,
            estatus
        };

        Alert.alert('Medicamento Agregado', `Se ha agregado el medicamento: ${nombreC, nombreG}`);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registrar Medicamento</Text>
            </View>

            {/* Nombre Comercial */}
            <TextInput
                style={styles.input}
                placeholder="Nombre Comercial"
                keyboardType="text"
                value={nombreC}
                onChangeText={setnombreC}
            />
            {/* Nombre Generico */}
            <TextInput
                style={styles.input}
                placeholder="Nombre Generico"
                keyboardType="text"
                value={nombreG}
                onChangeText={setnombreG}
            />

            {/* Selector de Vía de Administración */}
            <Text style={styles.label}>Vía de Administración</Text>
            <Picker
                selectedValue={viaAdministracion}
                onValueChange={(itemValue) => setviaAdministracion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una vía" value="" />
                <Picker.Item label="Oral" value="Oral" />
                <Picker.Item label="Intravenosa" value="Intravenosa" />
                <Picker.Item label="Intramuscular" value="Intramuscular" />
                <Picker.Item label="Subcutánea" value="Subcutánea" />
            </Picker>

            {/* Selector de Presentación */}
            <Text style={styles.label}>Presentación</Text>
            <Picker
                selectedValue={presentacion}
                onValueChange={(itemValue) => setPresentacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una presentación" value="" />
                <Picker.Item label="Comprimidos" value="Comprimidos" />
                <Picker.Item label="Cápsulas" value="Cápsulas" />
                <Picker.Item label="Jarabe" value="Jarabe" />
                <Picker.Item label="Inyección" value="Inyección" />
            </Picker>

            {/* Selector de Tipo */}
            <Text style={styles.label}>Tipo</Text>
            <Picker
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un tipo" value="" />
                <Picker.Item label="Analgésico" value="Analgésico" />
                <Picker.Item label="Antibiótico" value="Antibiótico" />
                <Picker.Item label="Antiinflamatorio" value="Antiinflamatorio" />
                <Picker.Item label="Antihistamínico" value="Antihistamínico" />
            </Picker>

            {/* Volumen */}
            <TextInput
                style={styles.input}
                placeholder="Volumen"
                keyboardType="text"
                value={volumen}
                onChangeText={setVolumen}
            />

            {/* Cantidad */}
            <TextInput
                style={styles.input}
                placeholder="Cantidad"
                keyboardType="numeric"
                value={cantidad}
                onChangeText={setCantidad}
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

export default AgregarMedicamentoScreen;