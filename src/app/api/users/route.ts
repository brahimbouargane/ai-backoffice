// src/app/api/users/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { db } from 'src/db';
import { usersTable } from 'src/db/schema';

export async function GET() {
  try {
    console.log('Fetching users...');
    const users = await db.select().from(usersTable).execute();
    console.log('Fetched users:', users);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newUser = await req.json();
    console.log('Creating new user:', newUser);
    const insertedUser = await db.insert(usersTable).values(newUser).returning().execute();
    console.log('Inserted user:', insertedUser);
    return NextResponse.json(insertedUser[0], { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
