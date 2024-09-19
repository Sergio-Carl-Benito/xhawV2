import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'mainscreen'>;

const Homepage: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo at the top */}
            <Image
                source={require('../img/Logo.png')} 
                style={styles.logo}
                accessibilityLabel="Homepage Logo"
            />

            <Text style={styles.title}>Welcome to Empowering the Nation</Text>
            <Text style={styles.description}>
                Welcome to Empowering the Nation! Since our launch in 2018, our mission has been to transform the lives of domestic workers and gardeners in Johannesburg. We understand that many have never had the opportunity to gain formal skills, unlike our parents and grandparents. That's why we offer practical training that opens doors. Our six-month and six-week courses are designed to help them become more skilled professionals, secure better jobs, and perhaps even start their own businesses. By joining our program, they gain valuable skills that not only improve their career prospects but also contribute positively to their community.
            </Text>

            {/* Navigation Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.blueButton]}
                    onPress={() => navigation.navigate('summaryofsixmonthscourse')}
                >
                    <Text style={styles.buttonText}>Six-Month Course Overview</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.redButton]}
                    onPress={() => navigation.navigate('summaryofsixweekscourse')}
                >
                    <Text style={styles.buttonText}>Six-Week Course Overview</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        gap: 10,
    },
    button: {
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    blueButton: {
        backgroundColor: 'blue',
    },
    redButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Homepage;
