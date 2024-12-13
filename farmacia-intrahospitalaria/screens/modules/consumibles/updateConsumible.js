import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const ActualizarConsumibleScreen = ({ navigation, route }) => {
    const { consumible } = route.params;
    const [nombre, setNombre] = useState(consumible.nombre);
    const [descripcion, setDescripcion] = useState(consumible.descripcion);
    const [cantidad, setCantidad] = useState(consumible.cantidad);
    const [tipo, setTipo] = useState(consumible.tipo);
    const [departamento, setDepartamento] = useState(consumible.departamento);
    const [estatus, setEstatus] = useState(consumible.estatus);

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

        Alert.alert('Consumible Actualizado', `Se ha actualizado el consumible: ${nombre}`);

        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Consumible</Text>
            </View>

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

            <TouchableOpacity style={styles.updateButton} onPress={handleActualizarConsumible}>
                <LinearGradient
                    colors={['#1C3150', '#4D6489']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.updateButtonText}>Actualizar</Text>
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
    updateButton: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    updateButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ActualizarConsumibleScreen;
