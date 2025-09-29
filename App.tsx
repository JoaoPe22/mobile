// Importando bibliotecas React
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import Login from './src/features/Auth/Login';
import Register from './src/features/Auth/Register';
import Home from './src/screens/Home';
import UsersList from './src/ListMagrations/UsersList';

import { AuthProvider, AuthContext } from './src/contexts/AuthContext';

// Criando o stack navigator
const Stack = createNativeStackNavigator();

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="UsersList" component={UsersList} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
