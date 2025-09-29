import CryptoJS from 'crypto-js';
import Config from 'react-native-config';

const SECRET_KEY = Config.SECRET_KEY;

// Gera um hash seguro combinando a senha com uma chave secreta e o e-mail do usuário
export function generateHash(email, password) {
  const salted = SECRET_KEY + email + password;
  return CryptoJS.SHA256(salted).toString();
}

// Compara a senha fornecida com o hash armazenado
// Retorna true se a senha for válida, false caso contrário
export function compareHash(email, password, storedHash) {
  const hash = generateHash(email, password);
  return hash === storedHash;
}
