import { drizzle } from 'drizzle-orm/postgres-js';
// eslint-disable-next-line import/no-extraneous-dependencies
import postgres from 'postgres';
import * as schema from './schema';

const queryClient = postgres(process.env.DATABASE_URL!); // Use the DATABASE_URL from the environment variables
export const db = drizzle(queryClient, { schema });
