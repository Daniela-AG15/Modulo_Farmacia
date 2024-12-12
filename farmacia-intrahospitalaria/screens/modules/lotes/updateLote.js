import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const ActualizarLoteScreen = ({ route, navigation }) => {
    const { loteData } = route.params;

    const [medicamento, setMedicamento] = useState(loteData?.medicamento || '');
    const [personalM, setPersonalM] = useState(loteData?.personalM || '');
    const [clave, setClave] = useState(loteData?.clave || '');
    const [estatus, setEstatus] = useState(loteData?.estatus || '');
    const [costo, setCosto] = useState(loteData?.costo?.toString() || '');
    const [cantidad, setCantidad] = useState(loteData?.cantidad?.toString() || '');
    const [ubicacion, setUbicacion] = useState(loteData?.ubicacion || '');

    const handleActualizarLote = () => {
        const updatedLote = {
            id: loteData.id,
            medicamento,
            personalM,
            clave,
            estatus,
            costo,
            cantidad,
            ubicacion,
        };
        Alert.alert('Lote Actualizado', `Se ha actualizado el lote: ${medicamento}`);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Lote</Text>
            </View>

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

            <Text style={styles.label}>Personal Médico</Text>
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

            <TextInput
                style={styles.input}
                placeholder="Clave"
                value={clave}
                onChangeText={setClave}
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

            <TouchableOpacity style={styles.addButton} onPress={handleActualizarLote}>
            <LinearGradient
                    colors={['#1C3150', '#4D6489']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.addButtonText}>Actualizar</Text>
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

export default ActualizarLoteScreen;
