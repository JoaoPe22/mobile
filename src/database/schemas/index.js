import { appSchema } from "@nozbe/watermelondb";

import { userSchema } from "./userSchema";

export const schemas = appSchema({
    // Definição do esquema da base de dados
    version: 6,
    tables: [userSchema],
});