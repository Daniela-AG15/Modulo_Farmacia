// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { registrarSolicitud } from '../../../services/solicitud';
// import { obtenerPersonas } from '../../../services/pacientes';
// import { obtenerServiciosMedicos } from '../../../services/servicios';
// //import { registrarSolicitud } from '../../../services/CRUD';

// const RegisterSolicitudesScreen = ({ navigation }) => {
//     const [personas, setPersonas] = useState([]);
//     const [medicos, setMedicos] = useState([]);
//     const [servicios, setServicios] = useState([]);
//     const [selectedPersona, setSelectedPersona] = useState('');
//     const [selectedMedico, setSelectedMedico] = useState('');
//     const [selectedServicio, setSelectedServicio] = useState('');
//     const [form, setForm] = useState({
//         Prioridad: '',
//         Descripcion: '',
//         Estatus: '',
//         Estatus_Aprobacion: '',
//         Fecha_Registro: new Date().toISOString(),
//         Fecha_Actualizacion: new Date().toISOString()
//     });

//     useEffect(() => {
//         obtenerPersonas();
//         fetchPersonas();
//         fetchServiciosMedicos();
//     }, []);

//     const fetchPersonas = async () => {
//         try {
//             const data = obtenerPersonas();
//             //setPersonas(data.filter(persona => persona.Titulo !== 'Dr.' && persona.Titulo !== 'Dra.'));
//             //setMedicos(data.filter(persona => persona.Titulo === 'Dr.' || persona.Titulo === 'Dra.'));
//         } catch (error) {
//             console.error(`Error fetching personas: ${error}`);
//         }
//     };

//     const fetchServiciosMedicos = async () => {
//         try {
//             const data = await obtenerServiciosMedicos();
//             setServicios(data);
//         } catch (error) {
//             console.error(`Error fetching servicios: ${error}`);
//         }
//     };

//     const resetForm = () => {
//         setSelectedPersona('');
//         setSelectedMedico('');
//         setSelectedServicio('');
//         setForm({
//             Prioridad: '',
//             Descripcion: '',
//             Estatus: '',
//             Estatus_Aprobacion: '',
//             Fecha_Registro: new Date().toISOString(),
//             Fecha_Actualizacion: new Date().toISOString()
//         });
//     };

//     const handleSubmit = async () => {
//         try {
//             const solicitud = {
//                 Paciente_ID: selectedPersona ? Number(selectedPersona) : undefined,
//                 Medico_ID: selectedMedico ? Number(selectedMedico) : undefined,
//                 Servicio_ID: selectedServicio ? Number(selectedServicio) : undefined,
//                 ...form
//             };

//             await registrarSolicitud(solicitud);
//             Alert.alert('Solicitud registrada', `La solicitud para ${selectedPersona} ha sido registrada con éxito.`);
//             resetForm();
//             navigation.goBack();
//         } catch (error) {
//             console.error(`Error al registrar solicitud: ${error}`);
//             Alert.alert('Error', 'Hubo un error al registrar la solicitud.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Registrar Solicitud</Text>
//             </View>

//             {/* Paciente */}
//             <Text style={styles.label}>Paciente</Text>
//             <Picker
//                 selectedValue={selectedPersona}
//                 onValueChange={(itemValue) => setSelectedPersona(itemValue)}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione un paciente" value="" />
//                 {personas.map(persona => (
//                     <Picker.Item key={persona.ID} label={`${persona.Nombre} ${persona.Primer_Apellido} ${persona.Segundo_Apellido}`} value={persona.ID} />
//                 ))}
//             </Picker>

//             {/* Médico */}
//             <Text style={styles.label}>Médico</Text>
//             <Picker
//                 selectedValue={selectedMedico}
//                 onValueChange={(itemValue) => setSelectedMedico(itemValue)}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione un médico" value="" />
//                 {medicos.map(medico => (
//                     <Picker.Item key={medico.ID} label={`${medico.Titulo} ${medico.Nombre} ${medico.Primer_Apellido} ${medico.Segundo_Apellido}`} value={medico.ID} />
//                 ))}
//             </Picker>

//             {/* Servicio */}
//             <Text style={styles.label}>Servicio</Text>
//             <Picker
//                 selectedValue={selectedServicio}
//                 onValueChange={(itemValue) => setSelectedServicio(itemValue)}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione un servicio" value="" />
//                 {servicios.map(servicio => (
//                     <Picker.Item key={servicio.ID} label={servicio.Nombre} value={servicio.ID} />
//                 ))}
//             </Picker>

//             {/* Prioridad */}
//             <Text style={styles.label}>Prioridad</Text>
//             <Picker
//                 selectedValue={form.Prioridad}
//                 onValueChange={(itemValue) => setForm({ ...form, Prioridad: itemValue })}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione una prioridad" value="" />
//                 <Picker.Item label="Urgente" value="Urgente" />
//                 <Picker.Item label="Alta" value="Alta" />
//                 <Picker.Item label="Moderada" value="Moderada" />
//                 <Picker.Item label="Emergente" value="Emergente" />
//                 <Picker.Item label="Normal" value="Normal" />
//             </Picker>

//             {/* Descripción */}
//             <TextInput
//                 style={[styles.input, styles.textArea]}
//                 placeholder="Descripción"
//                 multiline
//                 value={form.Descripcion}
//                 onChangeText={(text) => setForm({ ...form, Descripcion: text })}
//             />

//             {/* Situación */}
//             <Text style={styles.label}>Situación o Estatus</Text>
//             <Picker
//                 selectedValue={form.Estatus}
//                 onValueChange={(itemValue) => setForm({ ...form, Estatus: itemValue })}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione una situación" value="" />
//                 <Picker.Item label="Registrada" value="Registrada" />
//                 <Picker.Item label="Programada" value="Programada" />
//                 <Picker.Item label="Cancelada" value="Cancelada" />
//                 <Picker.Item label="Reprogramada" value="Reprogramada" />
//                 <Picker.Item label="En_Proceso" value="En_Proceso" />
//                 <Picker.Item label="Realizada" value="Realizada" />
//             </Picker>

//             {/* Aprobación */}
//             <Text style={styles.label}>Aprobación</Text>
//             <Picker
//                 selectedValue={form.Estatus_Aprobacion}
//                 onValueChange={(itemValue) => setForm({ ...form, Estatus_Aprobacion: itemValue })}
//                 style={styles.picker}
//             >
//                 <Picker.Item label="Seleccione un estado de aprobación" value="" />
//                 <Picker.Item label="Aprobado" value="true" />
//                 <Picker.Item label="Rechazado" value="false" />
//             </Picker>

//             {/* Botón para enviar el formulario */}
//             <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
//                 <Text style={styles.addButtonText}>Registrar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5F5F5',
//         padding: 16,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     headerTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     input: {
//         height: 45,
//         borderColor: '#DDD',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//         fontSize: 16,
//         backgroundColor: '#FFF',
//     },
//     textArea: {
//         height: 80,
//         textAlignVertical: 'top',
//     },
//     picker: {
//         height: 50,
//         backgroundColor: '#FFF',
//         borderColor: '#DDD',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 20,
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 8,
//         color: '#333',
//     },
//     addButton: {
//         backgroundColor: '#003DA5',
//         paddingVertical: 12,
//         paddingHorizontal: 30,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     addButtonText: {
//         color: '#FFF',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default RegisterSolicitudesScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const AgregarSolicitudScreen = ({ navigation }) => {
    const [paciente, setPaciente] = useState('');
    const [medico, setMedico] = useState('');
    const [servicio, setServicio] = useState('');
    const [prioridad, setPrioridad] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [situacion, setSituacion] = useState('');
    const [aprobacion, setAprobacion] = useState('');
    const handleAgregarSolicitud = () => {
        const nuevaSolicitud = {
            paciente,
            medico,
            servicio,
            prioridad,
            descripcion,
            situacion,
            aprobacion,
        };
        Alert.alert('Solicitud Registrada', `Se ha registrado la solicitud para el paciente: ${paciente}`);
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            {/* Título */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Registrar Solicitud</Text>
            </View>
            {/* Paciente */}
            <Text style={styles.label}>Paciente</Text>
            <Picker
                selectedValue={paciente}
                onValueChange={(itemValue) => setPaciente(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un paciente" value="" />
                <Picker.Item label="Carlos Martin Hernandez de Jesus" value="Carlos Martin Hernandez de Jesus" />
                <Picker.Item label="Sergio Ramirez Ortega" value="Sergio Ramirez Ortega" />
                <Picker.Item label="Rafael Torres Guitierrez" value="Rafael Torres Guitierrez" />
                <Picker.Item label="Panfila Sanchez Ortega" value="Panfila Sanchez Ortega" />
            </Picker>
            {/* Médico */}
            <Text style={styles.label}>Medico</Text>
            <Picker
                selectedValue={medico}
                onValueChange={(itemValue) => setMedico(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un paciente" value="" />
                <Picker.Item label="Dr. Hernández" value="Dr. Hernández" />
                <Picker.Item label="Dr. Gomez" value="Dr. Gomez" />
                <Picker.Item label="Dr. Perez" value="Dr. perez" />
                <Picker.Item label="Dr. Ramirez" value="Dr. Ramirez" />
            </Picker>
            {/* Servicio */}
            <Text style={styles.label}>Servicio</Text>
            <Picker
                selectedValue={servicio}
                onValueChange={(itemValue) => setServicio(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un servicio" value="" />
                <Picker.Item label="Consulta General" value="Consulta General" />
                <Picker.Item label="Urgencias" value="Urgencias" />
                <Picker.Item label="Laboratorio" value="Laboratorio" />
                <Picker.Item label="Imagenología" value="Imagenología" />
            </Picker>
            {/* Prioridad */}
            <Text style={styles.label}>Prioridad</Text>
            <Picker
                selectedValue={prioridad}
                onValueChange={(itemValue) => setPrioridad(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una prioridad" value="" />
                <Picker.Item label="Alta" value="Alta" />
                <Picker.Item label="Media" value="Media" />
                <Picker.Item label="Baja" value="Baja" />
            </Picker>
            {/* Descripción */}
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descripción"
                multiline
                value={descripcion}
                onChangeText={setDescripcion}
            />
            {/* Situación o Estatus */}
            <Text style={styles.label}>Situación</Text>
            <Picker
                selectedValue={situacion}
                onValueChange={(itemValue) => setSituacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione una situación" value="" />
                <Picker.Item label="Pendiente" value="Pendiente" />
                <Picker.Item label="En Proceso" value="En Proceso" />
                <Picker.Item label="Completado" value="Completado" />
            </Picker>
            {/* Aprobación */}
            <Text style={styles.label}>Aprobación</Text>
            <Picker
                selectedValue={aprobacion}
                onValueChange={(itemValue) => setAprobacion(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Seleccione un estado de aprobación" value="" />
                <Picker.Item label="Aprobado" value="Aprobado" />
                <Picker.Item label="Rechazado" value="Rechazado" />
                <Picker.Item label="Pendiente" value="Pendiente" />
            </Picker>
            {/* Botón de agregar */}
            <TouchableOpacity style={styles.addButton} onPress={handleAgregarSolicitud}>
                <LinearGradient
                    colors={['#1C3150', '#4D6489']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Text style={styles.addButtonText}>Registrar</Text>
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
    textArea: {
        height: 80,
        textAlignVertical: 'top',
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
export default AgregarSolicitudScreen;