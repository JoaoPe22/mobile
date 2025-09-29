import DeviceInfo from 'react-native-device-info';
import EncryptedStorage from 'react-native-encrypted-storage';
import api from '../services/api';
import { generateHash, compareHash } from '../utils/crypto';
import { database } from '../database';
import { Q } from '@nozbe/watermelondb';

export async function registerUser({ name, email, password }) {
    const deviceName = await DeviceInfo.getDeviceName();

    const response = await api.post('authorize/token', {
        email,
        password,
        deviceName
    });

    const token = response.data;


    // if(token === 200)

    await EncryptedStorage.setItem('token', token);

    const senha_hash = generateHash(email, password);
    const now = Date.now();

    await database.write(async () => {
        await database.get('users').create(user => {
            user.name = name;
            user.email = email;
            user.deviceName = deviceName;
            user.token = token;
            user.senha_hash = senha_hash;
            user.is_logged_in = true;
            user.created_at = now;
            user.updated_at = now;
        });
    });
}

// Login
export async function loginUser({ email, password }) {
    const users = await database.get('users').query(Q.where('email', email)).fetch();

    if (users.length === 0) {
        throw new Error('Usuário não encontrado');
    }

    const user = users[0];
    const isValid = compareHash(email, password, user.senha_hash);

    if (!isValid) {
        throw new Error('Senha incorreta');
    }

    await database.write(async () => {
        await user.update(u => {
            u.is_logged_in = true;
        });
    });
}
