import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LotesScreen = ({ navigation, route }) => {
    const [lotes, setLotes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLotes, setFilteredLotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                { id: 1, medicamento: 'Paracetamol',personalM: 'Dr. Smith',  clave: 'A123', estatus: 'Activo', costo: '$10', cantidad: '50', precio: '$12', ubicacion: 'Superior'},
                { id: 2, medicamento: 'Neproxina',personalM: 'Dr. Johnson',   clave: 'B456', estatus: 'Inactivo', costo: '$15', cantidad: '21', precio: '$23', ubicacion: 'Superior',},
                { id: 3, medicamento: 'Loratadina',personalM: 'Dr. Brown',   clave: 'C789', estatus: 'Activo', costo: '$12', cantidad: '30', precio: '$14', ubicacion: 'Superior',},
            ];
            setLotes(data);
            setFilteredLotes(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = lotes.filter((item) =>
                item.medicamento.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredLotes(filtered);
        } else {
            setFilteredLotes(lotes);
        }
    }, [searchQuery, lotes]);

    useEffect(() => {
        if (route.params?.newLote) {
            setLotes((prevLotes) => [...prevLotes, route.params.newLote]);
        }
    }, [route.params?.newLote]);

    const handleEdit = (item) => {
        navigation.navigate('ActualizarLote', { loteData: item });
    };

    const handleDelete = (id) => {
        Alert.alert('Eliminar Lote', `¿Seguro que deseas eliminar el lote con id: ${id}?`, [
            { text: 'Cancelar' },
            { text: 'Eliminar', onPress: () => {
                const updatedLote = lotes.filter(item => item.id !== id);
                setLotes(updatedLote);
                setFilteredLotes(updatedLote);
            }} 
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Inventario Medicamentos</Text>
            </View>
            {/* Barra de búsqueda */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar lotes..."
                    placeholderTextColor="#A9A9A9"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <Icon name="search-outline" size={24} color="#A9A9A9" />
            </View>

            {/* Lista de lotes */}
            <FlatList
                data={filteredLotes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.medicamento}</Text>
                        <Text style={styles.cardType}>{item.personalM}</Text>
                        <Text style={styles.cardType}>{item.medicamento}</Text>
                        <Text style={styles.cardType}>{item.cantidad}</Text>
                        <Text style={styles.cardType}>Precio: {item.precio}</Text>
                        <Text style={styles.cardType}>Ubicación: {item.ubicacion}</Text>

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
                ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron lotes.</Text>}
            />

            {/* Botón de agregar */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AgregarLote')}
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

export default LotesScreen;
