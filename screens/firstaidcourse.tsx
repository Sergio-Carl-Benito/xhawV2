// FirstAidCourse.tsx
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'firstaidcourse'>;

const FirstAidCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>First Aid Course</Text>
            
            <Text style={styles.label}>Fees: </Text>
            <Text style={styles.content}>R1500</Text>

            <Text style={styles.label}>Purpose: </Text>
            <Text style={styles.content}>To provide first aid awareness and basic life support</Text>

            <Text style={styles.label}>Content:</Text>
            <Text style={styles.content}>
                • Wounds and bleeding{"\n"}
                • Burns and fractures{"\n"}
                • Emergency scene management{"\n"}
                • Cardio-Pulmonary Resuscitation (CPR){"\n"}
                • Respiratory distress (Choking, blocked airway)
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

export default FirstAidCourse;
