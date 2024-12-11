import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ConsumiblesScreen = ({ navigation, route }) => {
    const [consumibles, setConsumibles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredConsumibles, setFilteredConsumibles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = [
                    { id: 1, nombre: 'Gasas', descripcion: 'Gasas estériles', cantidad: 100, tipo: 'Médico', departamento: 'Farmacia', estatus: 'Activo' },
                    { id: 2, nombre: 'Jeringas', descripcion: 'Jeringas de 5ml', cantidad: 50, tipo: 'Instrumental', departamento: 'Urgencias', estatus: 'Activo' },
                    { id: 3, nombre: 'Guantes', descripcion: 'Guantes desechables', cantidad: 200, tipo: 'Protección', departamento: 'Laboratorio', estatus: 'Inactivo' },
                ];
                setConsumibles(data);
                setFilteredConsumibles(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                Alert.alert('Error', 'No se pudo obtener la lista de consumibles.');
            }
        };
    
        fetchData();
    }, []); // Sin dependencias ya que solo quieres que se ejecute una vez
    

    useEffect(() => {
        const filtered = consumibles.filter((item) =>
            item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredConsumibles(filtered);
    }, [searchQuery, consumibles]);

    useEffect(() => {
        if (route.params?.newConsumible) {
            const newConsumible = route.params.newConsumible;
            // Validar que el nuevo consumible tenga propiedades definidas antes de agregarlo
            if (newConsumible && newConsumible.nombre && newConsumible.descripcion) {
                // Verificar si el nuevo consumible ya existe en el array
                const existingConsumible = consumibles.find(item => item.id === newConsumible.id);
                if (!existingConsumible) {
                    setConsumibles((prevConsumibles) => [
                        ...prevConsumibles,
                        newConsumible,
                    ]);
                    setFilteredConsumibles((prevFiltered) => [
                        ...prevFiltered,
                        newConsumible,
                    ]);
                } else {
                    console.warn('El consumible ya está registrado.');
                }
            } else {
                console.warn('New consumible data is incomplete or invalid.');
            }
        }
    }, [route.params?.newConsumible]);

    const handleEdit = (item) => {
        navigation.navigate('ActualizarConsumible', { consumible: item });
    };

    const handleDelete = (id) => {
        Alert.alert('Eliminar Consumible', `¿Seguro que deseas eliminar el consumible con id: ${id}?`, [
            { text: 'Cancelar' },
            { text: 'Eliminar', onPress: () => {
                const updatedConsumibles = consumibles.filter(item => item.id !== id);
                setConsumibles(updatedConsumibles);
                setFilteredConsumibles(updatedConsumibles);
            }} 
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Consumibles</Text>
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

            {/* Lista de consumibles */}
            <FlatList
                data={filteredConsumibles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.nombre}</Text>
                        <Text style={styles.cardDescription}>{item.descripcion}</Text>
                        <Text style={styles.cardDescription}>Cantidad: {item.cantidad}</Text>
                        <Text style={styles.cardDescription}>Tipo: {item.tipo}</Text>
                        <Text style={styles.cardDescription}>Departamento: {item.departamento}</Text>
                        <Text style={styles.cardDescription}>Estatus: {item.estatus}</Text>

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
                onPress={() => navigation.navigate('AgregarConsumible')}
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

export default ConsumiblesScreen;
