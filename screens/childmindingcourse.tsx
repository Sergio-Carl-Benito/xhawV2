// ChildMindingCourse.tsx
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'childmindingcourse'>;

const ChildMindingCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Child Minding Course</Text>

            <Text style={styles.label}>Fees: </Text>
            <Text style={styles.content}>R750</Text>

            <Text style={styles.label}>Purpose: </Text>
            <Text style={styles.content}>To provide basic child and baby care</Text>

            <Text style={styles.label}>Content:</Text>
            <Text style={styles.content}>
                • Birth to six-month old baby needs{"\n"}
                • Seven-month to one year old needs{"\n"}
                • Toddler needs{"\n"}
                • Educational toys
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

export default ChildMindingCourse;
