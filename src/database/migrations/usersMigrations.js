import { schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [

    {
      toVersion: 6,
      steps: [
        {
          type: 'add_columns',
          table: 'users',
          columns: [
            { name: 'deviceName', type: 'string' }
          ]
        }
      ]
    },

    {
      toVersion: 5,
      steps: [
        {
          type: 'add_columns',
          table: 'users',
          columns: [
            { name: 'senha_hash', type: 'string' }
          ]
        }
      ]
    },

    {
      toVersion: 4,
      steps: [
        {
          type: 'add_columns',
          table: 'users',
          columns: [
            { name: 'is_logged_in', type: 'boolean' }
          ]
        }
      ]
    },
    
    {
      toVersion: 3,
      steps: [
        {
          type: 'add_columns',
          table: 'users',
          columns: [
            { name: 'name', type: 'string' }
          ]
        }
      ]
    },
    {
      toVersion: 2,
      steps: [
        {
          type: 'add_columns',
          table: 'users',
          columns: [
            { name: 'token', type: 'string' }
          ]
        }
      ]
    },
    
  ]
});
