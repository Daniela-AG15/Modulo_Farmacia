import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MedicamentosScreen = ({ navigation, route }) => {
    const [medicamentos, setMedicamentos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMedicamentos, setFilteredMedicamentos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                { id: 1, nombre_Generico: 'Paracetamol', nombre_Comercial: 'Paracet', via_Administracion: 'Oral', presentacion: 'Comprimidos', cantidad: '50', tipo: 'Fármaco', volumen: '500', estatus: 'Activo' },
                { id: 2, nombre_Generico: 'Ibuprofeno', nombre_Comercial: 'Ibux', via_Administracion: 'Oral', presentacion: 'Comprimidos', cantidad: '30', tipo: 'Antiinflamatorio', volumen: '200', estatus: 'Inactivo' },
                { id: 3, nombre_Generico: 'Amoxicilina', nombre_Comercial: 'Amoxil', via_Administracion: 'Oral', presentacion: 'Cápsulas', cantidad: '20', tipo: 'Antibiótico', volumen: '100', estatus: 'Activo' },
                { id: 4, nombre_Generico: 'Metformina', nombre_Comercial: 'Glucophage', via_Administracion: 'Oral', presentacion: 'Comprimidos', cantidad: '60', tipo: 'Hipoglucemiante', volumen: '250', estatus: 'Inactivo' },
                { id: 5, nombre_Generico: 'Loratadina', nombre_Comercial: 'Clarityne', via_Administracion: 'Oral', presentacion: 'Jarabe', cantidad: '100', tipo: 'Antihistamínico', volumen: '150', estatus: 'Activo' }
            ];
            setMedicamentos(data);
            setFilteredMedicamentos(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = medicamentos.filter((item) =>
            item.nombre_Generico.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredMedicamentos(filtered);
    }, [searchQuery, medicamentos]);

    useEffect(() => {
        if (route.params?.newMedicamento) {
            setMedicamentos((prevMedicamentos) => [...prevMedicamentos, route.params.newMedicamento]);
        }
    }, [route.params?.newMedicamento]);

    const handleEdit = (item) => {
        navigation.navigate('ActualizarMedicamento', { medicamentoData: item });
    };

    const handleDelete = (id) => {
        Alert.alert('Eliminar Medicamento', `¿Seguro que deseas eliminar el medicamento con id: ${id}?`, [
            { text: 'Cancelar' },
            { text: 'Eliminar', onPress: () => {
                const updatedMedicamento = medicamentos.filter(item => item.id !== id);
                setMedicamentos(updatedMedicamento);
                setFilteredMedicamentos(updatedMedicamento);
            }}
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Medicamentos</Text>
            </View>
            {/* Barra de búsqueda */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar consumibles..."
                    placeholderTextColor="#A9A9A9"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Icon name="search-outline" size={24} color="#A9A9A9" />
            </View>

            {/* Lista de medicamentos */}
            <FlatList
                data={filteredMedicamentos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Nombre Generico: {item.nombre_Generico}</Text>
                        <Text style={styles.cardType}>Nombre Comercial: {item.nombre_Comercial}</Text>
                        <Text style={styles.cardType}>Administracion: {item.via_Administracion}</Text>
                        <Text style={styles.cardType}>Presentacion: {item.presentacion}</Text>
                        <Text style={styles.cardType}>Tipo: {item.tipo}</Text>
                        <Text style={styles.cardType}>Volumen: {item.volumen}</Text>
                        <Text style={styles.cardType}>Estatus: {item.estatus}</Text>

                        {/* Iconos de acción: Editar y Eliminar */}
                        <View style={styles.actionsContainer}>
                            <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionButton}>
                                <Icon name="pencil-outline" size={24} color="#003DA5" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionButton}>
                                <Icon name="trash-outline" size={24} color="#FF3B3B" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron consumibles.</Text>}
            />

            {/* Botón de agregar */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AgregarMedicamento')}
            >
                <Text style={styles.addButtonText}>+ Agregar</Text>
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
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 16,
        marginBottom: 16,
        marginTop: 20
    },
    searchInput: {
        flex: 1,
        height: 40,
        color: '#333',
    },
    listContent: {
        paddingBottom: 100,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003DA5',
    },
    cardType: {
        fontSize: 12,
        color: '#777',
        marginTop: 4,
    },
    actionsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        width: '20%',
    },
    actionButton: {
        padding: 8,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#003DA5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        color: '#777',
        marginTop: 20,
    },
});

export default MedicamentosScreen;
