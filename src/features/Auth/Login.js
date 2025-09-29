import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { loginUser } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);

    async function handleLogin() {
        try {
            await loginUser({ email, password });
            setIsAuthenticated(true);
            Alert.alert('Sucesso!', 'Login realizado com sucesso');
        } catch (error) {
            Alert.alert('Erro', error.message || 'Erro desconhecido');
        }
    }

    return (

        <View style={styles.safeArea}>
            <View style={styles.headerBackground}>
                <Image
                    source={require('../../assets/logo_letra_branca.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            {/* Formulário */}
            <View style={styles.formCard}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            {/* Link de registro */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerLink}>Não tem conta? Registre-se</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text>@2025 - Bsy Resíduos</Text>
            </View>
        </View>

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