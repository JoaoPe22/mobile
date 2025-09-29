import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Q } from '@nozbe/watermelondb';
import database from '../../database';
import { AuthContext } from '../../contexts/AuthContext';


export default function Home({ navigation }) {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await database.write(async () => {
        const usersCollection = database.get('users');
        const loggedUsers = await usersCollection
          .query(Q.where('is_logged_in', true))
          .fetch();

        for (const user of loggedUsers) {
          await user.update(u => {
            u.is_logged_in = false;
          });
        }
      });

      setIsAuthenticated(false);
    } catch (error) {
      console.error('Erro ao sair', error);
      Alert.alert('Erro ao sair', 'Não foi possível sair. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App! 🎉</Text>

      <View style={styles.button}>
        <Button title="Sair" onPress={handleLogout} />
      </View>

      <View style={styles.button}>
        <Button title="Ver usuários locais" onPress={() => navigation.navigate('UsersList')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  button: {
    marginTop: 12,
    width: '80%',
  },
});