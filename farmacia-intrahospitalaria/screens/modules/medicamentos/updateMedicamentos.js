import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ActualizarMedicamentoScreen = ({ route, navigation }) => {
    const { medicamentoData } = route.params; 

    const [nombre_Comercial, setnombre_Comercial] = useState(medicamentoData?.nombre_Comercial || '');
    const [nombre_Generico, setnombre_Generico] = useState(medicamentoData?.nombre_Generico || '');
    const [via_Administracion, setvia_Administracion] = useState(medicamentoData?.via_Administracion || '');
    const [presentacion, setPresentacion] = useState(medicamentoData?.presentacion || '');
    const [tipo, setTipo] = useState(medicamentoData?.tipo || '');
    const [volumen, setVolumen] = useState(medicamentoData?.volumen || '');
    const [cantidad, setCantidad] = useState(medicamentoData?.cantidad?.toString() || '');
    const [estatus, setEstatus] = useState(medicamentoData?.estatus || '');

    const handleActualizarMedicamento = () => {
        const updatedMedicamento = {
            id: medicamentoData.id,
            nombre_Comercial,
            nombre_Generico,
            via_Administracion,
            presentacion,
            tipo,
            volumen,
            cantidad,
            estatus,
        };

        Alert.alert('Medicamento Actualizado', `Se ha actualizado el medicamento: ${nombre_Comercial}`);
        navigation.goBack(); // Regresa a la pantalla anterior
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Medicamento</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Nombre Comercial"
                value={nombre_Comercial}
                onChangeText={setnombre_Comercial}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre Generico"
                value={nombre_Generico}
                onChangeText={setnombre_Generico}
            />

            <Text style={styles.label}>Vía de Administración</Text>
            <Picker
                selectedValue={via_Administracion}
                onValueChange={(itemValue) => setvia_Administracion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una vía" value="" />
                <Picker.Item label="Oral" value="Oral" />
                <Picker.Item label="Intravenosa" value="Intravenosa" />
                <Picker.Item label="Intramuscular" value="Intramuscular" />
                <Picker.Item label="Subcutánea" value="Subcutánea" />
            </Picker>

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

            <TextInput
                style={styles.input}
                placeholder="Volumen"
                value={volumen}
                onChangeText={setVolumen}
            />
            <TextInput
                style={styles.input}
                placeholder="Cantidad"
                keyboardType="numeric"
                value={cantidad}
                onChangeText={setCantidad}
            />

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

            <TouchableOpacity style={styles.addButton} onPress={handleActualizarMedicamento}>
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

export default ActualizarMedicamentoScreen;