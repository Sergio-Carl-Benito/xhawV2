// GardenMaintenanceCourse.tsx
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'gardenmaintenancecourse'>;

const GardenMaintenanceCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Garden Maintenance Course</Text>

            <Text style={styles.label}>Fees: </Text>
            <Text style={styles.content}>R750</Text>

            <Text style={styles.label}>Purpose: </Text>
            <Text style={styles.content}>To provide basic knowledge of watering, pruning, and planting in a domestic garden.</Text>

            <Text style={styles.label}>Content:</Text>
            <Text style={styles.content}>
                • Water restrictions and the watering requirements of indigenous and exotic plants{"\n"}
                • Pruning and propagation of plants{"\n"}
                • Planting techniques for different plant types
            </Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Calculate Total Fees"
                    onPress={() => navigation.navigate('calculatetotalfees')}
                />
                <Button
                    title="Contact Us"
                    onPress={() => navigation.navigate('contactdetails')}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'blue',

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default GardenMaintenanceCourse;
