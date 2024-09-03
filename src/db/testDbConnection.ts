// src/db/testDbConnection.ts

import { db } from './index'; // Adjust the path if necessary
import { usersTable } from './schema'; // Assuming you have a usersTable in your schema

export async function testDbConnection() {
  try {
    // Attempt to fetch a single record from the users table
    const result = await db.select().from(usersTable).limit(1).execute();
    console.log('Database connection successful:', result);
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}
