import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useUsers } from '../hooks/useUsers';

export default function UsersList() {
    const users = useUsers();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuários no banco local:</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>Email: {item.email}</Text>
                        <Text style={styles.device}>Dispositivo: {item.deviceName}</Text>
                        <Text style={styles.token}>Token: {item.token}</Text>
                        <Text style={styles.senhaHash}>Senha (hash): {item.senha_hash}</Text>
                        <Text style={styles.date}>Criado em: {new Date(item.created_at).toLocaleString()}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    userItem: { marginBottom: 10, padding: 10, backgroundColor: '#eee', borderRadius: 5 },
    name: { fontWeight: 'bold' },
    email: { color: '#666' },
    device: { color: '#666' },
    date: { color: '#666' },
    token: { color: '#666' },        
    senhaHash: { color: '#666' },
});
