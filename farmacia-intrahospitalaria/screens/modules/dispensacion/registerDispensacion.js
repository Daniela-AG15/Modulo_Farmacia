import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AgregarDispensacionScreen = ({ navigation }) => {
    const [recetaId, setRecetaId] = useState('');
    const [medicoId, setMedicoId] = useState('');
    const [solicitudId, setSolicitudId] = useState('');
    const [estatus, setEstatus] = useState('');
    const [tipo, setTipo] = useState('');
    const [totalMedicamentosEntregados, setTotalMedicamentosEntregados] = useState('');
    const [total, setTotal] = useState('');
    const [costos, setCostos] = useState('');

    const handleAgregarDispensacion = () => {
        const nuevaDispensacion = {
            recetaId,
            medicoId,
            solicitudId,
            estatus,
            tipo,
            totalMedicamentosEntregados,
            total,
            costos,
        };

        Alert.alert('Dispensación Registrada', `Se ha registrado la dispensación con ID: ${recetaId}`);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registrar Dispensación</Text>
            </View>

            {/* Receta ID */}
            <Text style={styles.label}>Receta</Text>
            <Picker
                selectedValue={recetaId}
                onValueChange={(itemValue) => setRecetaId(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una receta" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
            </Picker>

            {/* Médico ID */}
            <Text style={styles.label}>Medico</Text>
            <Picker
                selectedValue={medicoId}
                onValueChange={(itemValue) => setMedicoId(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un medico" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
            </Picker>

            {/* Solicitud ID */}
            <Text style={styles.label}>Solicitud</Text>
            <Picker
                selectedValue={solicitudId}
                onValueChange={(itemValue) => setSolicitudId(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una solicitud" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
            </Picker>

            {/* Estatus */}
            <Text style={styles.label}>Estatus</Text>
            <Picker
                selectedValue={estatus}
                onValueChange={(itemValue) => setEstatus(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un estatus" value="" />
                <Picker.Item label="Pendiente" value="Pendiente" />
                <Picker.Item label="En Proceso" value="En Proceso" />
                <Picker.Item label="Completada" value="Completada" />
            </Picker>

            {/* Tipo */}
            <Text style={styles.label}>Tipo</Text>
            <Picker
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un tipo" value="" />
                <Picker.Item label="Medicamento" value="Medicamento" />
                <Picker.Item label="Servicio" value="Servicio" />
            </Picker>

            {/* Total Medicamentos Entregados */}
            <TextInput
                style={styles.input}
                placeholder="Total Medicamentos Entregados"
                keyboardType="numeric"
                value={totalMedicamentosEntregados}
                onChangeText={setTotalMedicamentosEntregados}
            />

            {/* Total */}
            <TextInput
                style={styles.input}
                placeholder="Total"
                keyboardType="numeric"
                value={total}
                onChangeText={setTotal}
            />

            {/* Costos */}
            <TextInput
                style={styles.input}
                placeholder="Costos"
                keyboardType="numeric"
                value={costos}
                onChangeText={setCostos}
            />

            {/* Botón de agregar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAgregarDispensacion}>
                <Text style={styles.addButtonText}>Registrar</Text>
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

export default AgregarDispensacionScreen;