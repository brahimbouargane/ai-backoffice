// src/app/api/test-connection/route.ts

import { NextResponse } from 'next/server';
import { testDbConnection } from 'src/db/testDbConnection';

export async function GET() {
  const isConnected = await testDbConnection();

  if (isConnected) {
    return NextResponse.json({ message: 'Database connection is healthy' }, { status: 200 });
  }
  return NextResponse.json({ message: 'Failed to connect to the database' }, { status: 500 });
}
