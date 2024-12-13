import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeDispensacion = ({ navigation }) => {
    const [dispensaciones, setDispensaciones] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDispensaciones, setFilteredDispensaciones] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                { id: 1, medicamento: 'Paracetamol', cantidad: '20', estatus: 'Pendiente' },
                { id: 2, medicamento: 'Ibuprofeno', cantidad: '10', estatus: 'Entregado' },
                { id: 3, medicamento: 'Amoxicilina', cantidad: '30', estatus: 'Rechazado' },
            ];
            setDispensaciones(data);
            setFilteredDispensaciones(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = dispensaciones.filter((item) =>
            item.medicamento.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDispensaciones(filtered);
    }, [searchQuery, dispensaciones]);

    const handleEdit = (item) => {
        navigation.navigate('ActualizarDispensacion', { dispensacionData: item });
    };

    const handleDelete = (id) => {
        Alert.alert('Eliminar Dispensación', `¿Seguro que deseas eliminar la dispensación con ID: ${id}?`, [
            { text: 'Cancelar' },
            { 
                text: 'Eliminar', 
                onPress: () => {
                    const updatedDispensaciones = dispensaciones.filter(item => item.id !== id);
                    setDispensaciones(updatedDispensaciones);
                    setFilteredDispensaciones(updatedDispensaciones);
                }
            }
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Dispensaciones</Text>
            </View>

            {/* Barra de búsqueda */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar dispensaciones..."
                    placeholderTextColor="#A9A9A9"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Icon name="search-outline" size={24} color="#A9A9A9" />
            </View>

            {/* Lista de dispensaciones */}
            <FlatList
                data={filteredDispensaciones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Medicamento: {item.medicamento}</Text>
                        <Text style={styles.cardDetails}>Cantidad: {item.cantidad}</Text>
                        <Text style={styles.cardDetails}>Estatus: {item.estatus}</Text>

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
                ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron dispensaciones.</Text>}
            />

            {/* Botón de agregar */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AgregarDispensacion')}
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
    cardDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
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

export default HomeDispensacion;