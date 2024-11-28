import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const sections = [
        { title: 'Consumibles', icon: 'medkit-outline', route: 'Consumibles' },
        { title: 'Medicamentos', icon: 'thermometer-outline', route: 'Medicamentos' },
        { title: 'Lotes', icon: 'cube-outline', route: 'Lotes' },
        { title: 'Solicitudes', icon: 'clipboard-outline', route: 'Solicitudes' },
        { title: 'Dispensación', icon: 'document-text-outline', route: 'Dispensacion' },
        { title: 'Graficas', icon: 'bar-chart-outline', route: 'Graficas' },
    ];

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Farmacia Intrahospitalaria</Text>
            </View>

            {/* Secciones */}
            <View style={styles.sectionsContainer}>
                {sections.map((section, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => navigation.navigate(section.route)}
                    >
                        <Icon name={section.icon} size={50} color="#003DA5" style={styles.cardIcon} />
                        <Text style={styles.cardText}>{section.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 16,
        marginTop: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    sectionsContainer: {
        flex: 1,
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '40%', // Menor ancho para más espacio entre tarjetas
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
        margin: 8, // Espaciado entre tarjetas
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardIcon: {
        marginBottom: 8,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    logoutButton: {
        width: '50%',
        backgroundColor: '#FF3B3B',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default HomeScreen;