import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const ActualizarDispensacionScreen = ({ route, navigation }) => {
    const { dispensacion } = route.params; 

    const [recetaId, setRecetaId] = useState('');
    const [medicoId, setMedicoId] = useState('');
    const [solicitudId, setSolicitudId] = useState('');
    const [estatus, setEstatus] = useState('');
    const [tipo, setTipo] = useState('');
    const [totalMedicamentosEntregados, setTotalMedicamentosEntregados] = useState('');
    const [total, setTotal] = useState('');
    const [costos, setCostos] = useState('');

    useEffect(() => {
        if (dispensacion) {
            setRecetaId(dispensacion.recetaId);
            setMedicoId(dispensacion.medicoId);
            setSolicitudId(dispensacion.solicitudId);
            setEstatus(dispensacion.estatus);
            setTipo(dispensacion.tipo);
            setTotalMedicamentosEntregados(dispensacion.totalMedicamentosEntregados);
            setTotal(dispensacion.total);
            setCostos(dispensacion.costos);
        }
    }, [dispensacion]);

    const handleActualizarDispensacion = () => {
        const dispensacionActualizada = {
            recetaId,
            medicoId,
            solicitudId,
            estatus,
            tipo,
            totalMedicamentosEntregados,
            total,
            costos,
        };

        Alert.alert('Dispensación Actualizada', `Se han actualizado los datos de la dispensación con receta ID: ${recetaId}`);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Actualizar Dispensación</Text>
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

            {/* Botón de guardar cambios */}
            <TouchableOpacity style={styles.addButton} onPress={handleActualizarDispensacion}>
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
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ActualizarDispensacionScreen;