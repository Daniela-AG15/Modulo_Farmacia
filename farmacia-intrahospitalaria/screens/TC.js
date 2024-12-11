import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TerminosYCondicionesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Términos y Condiciones</Text>
            </View>
            <ScrollView style={styles.content}>
                <Text style={styles.title}>Términos y Condiciones</Text>
                <Text style={styles.sectionTitle}>1. Condiciones de Uso de los Servicios</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.paragraph}>. Medicamentos Controlados:</Text> Se deben seguir estrictamente las normativas locales e internacionales para la dispensación de medicamentos controlados, incluyendo la verificación de identidad y registro del paciente.
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.paragraph}>. Caducidad de la Prescripción:</Text> Las prescripciones tienen una vigencia de 30 días, después de lo cual deberán ser renovadas por un médico autorizado.
                </Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.paragraph}>. Entrega de Medicamentos:</Text> El paciente o su representante autorizado debe estar presente para recibir los medicamentos. No se realizarán entregas a terceros sin la documentación legal adecuada.
                </Text>
                <Text style={styles.sectionTitle}>2. Responsabilidad del Paciente</Text>
                <Text style={styles.paragraph}>
                    . Los pacientes deben seguir las instrucciones proporcionadas por el médico y el personal farmacéutico en relación con la dosificación y uso de los medicamentos.
                </Text>
                <Text style={styles.paragraph}>
                    . El hospital no se hace responsable del mal uso o incumplimiento de las indicaciones sobre los medicamentos una vez entregados.
                </Text>
                <Text style={styles.paragraph}>
                    . En caso de reacciones adversas, el paciente debe notificar de inmediato al personal médico.
                </Text>
            </ScrollView>
            <Text style={styles.footer}>Todos los derechos reservados por Privilege Care</Text>
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
        padding: 16,
        marginTop: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 12,
        color: '#333',
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 8,
        color: '#555',
    },
    footer: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 12,
        color: '#999',
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingTop: 8,
    },
});

export default TerminosYCondicionesScreen;
