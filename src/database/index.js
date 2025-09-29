// Configuração do banco de dados WatermelonDB
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

// Importação dos esquemas
import { schemas } from "./schemas";


// Importação dos modelos
import { User } from "../database/model/userModel";

// Importação das migrações
import { migrations } from "./migrations/usersMigrations";

// Criação do adaptador SQLite com o esquema e migrações
const adapter = new SQLiteAdapter({
  schema: schemas,
  migrations,
});

// Criação da instância do banco de dados
export const database = new Database({
  adapter,
  modelClasses: [User, ],
  actionsEnabled: true,
});

export default database;