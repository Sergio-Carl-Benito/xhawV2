import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image, TouchableOpacity, Linking } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'contactdetails'>;

const venues = [
    { 
        id: 'venue1', 
        name: 'Venue 1: 123 Old Johannesburg Rd, Louwlardia, Centurion', 
        imgSrc: require('../img/venue1map.png'), 
        link: 'https://maps.app.goo.gl/ErhpLcWTHDx6bmkQ9',
        accessibilityLabel: 'Venue 1 map location'
    },
    { 
        id: 'venue2', 
        name: 'Venue 2: 456 Main Rd, Bryanston, Sandton', 
        imgSrc: require('../img/venue2map.png'), 
        link: 'https://maps.app.goo.gl/xAYD6ubgdZrfnL396',
        accessibilityLabel: 'Venue 2 map location'
    },
    { 
        id: 'venue3', 
        name: 'Venue 3: 3 Elm Rd, Riverclub, Sandton', 
        imgSrc: require('../img/venue3map.png'), 
        link: 'https://maps.app.goo.gl/rAbqigZbNtXhZWQXA',
        accessibilityLabel: 'Venue 3 map location'
    }
];


const ContactDetails: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [selectedVenue, setSelectedVenue] = useState(venues[0].id);

    const handleVenueChange = (itemValue: string) => {
        setSelectedVenue(itemValue);
    };

    const handleSubmit = () => {
        if (!name || !email || !message) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        console.log('Submitted:', { name, email, message, venue: selectedVenue });
        setName('');
        setEmail('');
        setMessage('');
    };

    const selectedVenueData = venues.find(v => v.id === selectedVenue);

    const handleImagePress = (url: string) => {
        Linking.openURL(url).catch(() => {
            Alert.alert('Error', 'Failed to open the link.');
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Contact Us</Text>

            <Text style={styles.subtitle}>Get in Touch</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Message"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
            />
            <Text style={styles.label}>Select Venue:</Text>
            <Picker
                selectedValue={selectedVenue}
                style={styles.picker}
                onValueChange={handleVenueChange}
            >
                {venues.map(venue => (
                    <Picker.Item key={venue.id} label={venue.name} value={venue.id} />
                ))}
            </Picker>
            <Button title="Submit" onPress={handleSubmit} />

            <View style={styles.contactInfo}>
                <Text style={styles.infoTitle}>Contact Information</Text>
                <Text>Phones: (012) 345-6789</Text>
                <Text>Email: contact@Empoweringnation.com</Text>
            </View>

            <View style={styles.imageContainer}>
                <Text style={styles.imageTitle}>Map to Venue</Text>
                {selectedVenueData && (
                    <TouchableOpacity onPress={() => handleImagePress(selectedVenueData.link)}>
                        <Image
                            source={selectedVenueData.imgSrc}
                            style={styles.venueImage}
                        />
                    </TouchableOpacity>
                )}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: 'blue',

    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        color: 'red',

    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        marginVertical: 5,
    },
    picker: {
        width: '100%',
        height: 50,
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    contactInfo: {
        marginTop: 20,
        alignItems: 'flex-start',
        width: '100%',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imageContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    imageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    venueImage: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
});

export default ContactDetails;
