// Hook personalizado para buscar usuários do banco de dados WatermelonDB

// Importações react
import { useEffect, useState } from 'react'
import { database } from '../database'

export function useUsers() {
  const [users, setUsers] = useState([])

  // Observa mudanças na tabela de usuários e atualiza o estado
  useEffect(() => {
    const subscription = database
      .get('users')
      .query()
      .observe()
      .subscribe((records) => {
        setUsers(records)
      })

    // Limpa a inscrição ao desmontar o componente
    return () => subscription.unsubscribe()
  }, [])

  return users
}
