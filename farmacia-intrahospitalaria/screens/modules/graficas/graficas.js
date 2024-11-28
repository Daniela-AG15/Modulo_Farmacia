import React, { useRef } from 'react';
import { ScrollView, Text, Dimensions, StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const DashboardCharts = () => {
    const screenWidth = Dimensions.get('window').width;
    const chartRef = useRef(null);

    // Gráfico de prioridad de estatus (como pie chart)
    const pieChartData = [
        { name: 'Urgente', population: 10, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Alta', population: 15, color: '#FFA500', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Moderada', population: 5, color: '#FFFF00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Emergente', population: 20, color: '#008000', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Normal', population: 50, color: '#0000FF', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    ];

    // Datos para el gráfico de estado de solicitudes (como pie chart)
    const pieChartEstadoSolicitudesData = [
        { name: 'Registrada', population: 50, color: '#FF0000', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Programada', population: 10, color: '#FFA500', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Cancelada', population: 20, color: '#FFFF00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Reprogramada', population: 30, color: '#008000', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'En Proceso', population: 100, color: '#0000FF', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Realizada', population: 60, color: '#FF6347', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    ];

    // Gráfico de estatus de medicamentos (como pie chart)
    const pieChartMedicamentosEstatusData = [
        { name: 'Activo', population: 40, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Inactivo', population: 10, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    ];

    // Gráfico de tipos de consumibles (como pie chart)
    const pieChartConsumiblesTipoData = [
        { name: 'Material', population: 20, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Equipo', population: 25, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        { name: 'Instrumento', population: 10, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    ];

    const chartConfig = {
        backgroundGradientFrom: '#FFFFFF',
        backgroundGradientTo: '#FFFFFF',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        decimalPlaces: 0,
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Gráficas</Text>
            </View>
            <ScrollView style={styles.containerG}>
                {/* Gráfico de dona de prioridades */}
                <Text style={styles.title}>Prioridades Solicitudes</Text>
                <PieChart
                    data={pieChartData}
                    width={screenWidth - 20}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                    ref={chartRef}
                />

                {/* Gráfico de dona de estado de solicitudes */}
                <Text style={styles.title}>Estado de Solicitudes</Text>
                <PieChart
                    data={pieChartEstadoSolicitudesData}
                    width={screenWidth - 20}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />

                {/* Gráfico de dona de estatus de medicamentos */}
                <Text style={styles.title}>Estatus de Medicamentos</Text>
                <PieChart
                    data={pieChartMedicamentosEstatusData}
                    width={screenWidth - 20}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                    ref={chartRef}
                />

                {/* Gráfico de dona de tipos de consumibles */}
                <Text style={styles.title}>Tipo de Consumibles</Text>
                <PieChart
                    data={pieChartConsumiblesTipoData}
                    width={screenWidth - 20}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    containerG: {
        flex: 1,
        padding: 10,
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
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default DashboardCharts;