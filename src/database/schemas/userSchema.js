import { tableSchema } from '@nozbe/watermelondb';

export const userSchema = tableSchema({
  // Definição do esquema da tabela de usuários
  name: 'users',
  columns: [
    { name: 'name', type: 'string', isIndexed: true },
    { name: 'email', type: 'string', isIndexed: true },
    { name: 'deviceName', type: 'string', isIndexed: true },
    { name: 'token', type: 'string', isIndexed: true },
    { name: 'senha_hash', type: 'string', isIndexed: true },
    { name: 'is_logged_in', type: 'boolean', isIndexed: true },
    { name: 'created_at', type: 'number', isIndexed: true },
    { name: 'updated_at', type: 'number', isIndexed: true }
  ]
});
