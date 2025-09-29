import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, Touchable, TouchableOpacity } from 'react-native';
import { registerUser } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Register({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);

    async function handleRegister() {
        try {
            await registerUser({ name, email, password });
            setIsAuthenticated(true);
            Alert.alert('Sucesso!', 'Conta criada e salva localmente');
        } catch (error) {
            console.error('Erro ao registrar:', error.message);
            Alert.alert('Erro ao registrar', error.message || 'Erro desconhecido');
        }
    }

    return (
        
        <View style={styles.safeArea}>

            <View style={styles.headerBackground}>
                <Image
                    source={require('../../assets/logo_letra_branca.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.formCard}>
                <Text style={styles.title}>Cadastrar Usuário</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor='#888'
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#888'
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    placeholderTextColor='#888'
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            {/* Link de para login caso já tenha conta */ }
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerLink}>Já possui uma conta? Entre</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text>@2025 - Bsy Resíduos</Text>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    headerBackground: {
        width: '100%',
        height: 220,
        backgroundColor: '#025159',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 160,
        height: 150,
    },
    formCard: {
        backgroundColor: '#ffffff',
        width: '85%',
        marginTop: -50,
        padding: 24,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#f4f4f4',
        padding: 14,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#027373',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerLink: {
        color: '#027373',
        fontSize: 14,
        marginTop: 24,
        textDecorationLine: 'underline',
    },

    footer: {
        position: "absolute",
        bottom: 20
    }

});