import { NextRequest, NextResponse } from 'next/server';
import { config } from 'dotenv';
import axios from 'axios';

config({ path: '.env' });

export async function GET(req: NextRequest) {
  try {
    const url = `${process.env.AI_API_URL}/ok`;

    // Call the external AI service, assuming it expects a POST request
    const response = await axios.post(
      url,
      {}, // An empty object as the body, since it's a POST request with no payload
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Check if the response contains the expected data
    if (!response.data || !response.data.message) {
      throw new Error('Unexpected response format from AI service');
    }

    // Return the AI's output from the external service
    return NextResponse.json({ message: response.data.message }, { status: 200 });
  } catch (error) {
    console.error('Error interacting with AI service:', error.message);
    return NextResponse.json({ error: 'Failed to interact with AI service' }, { status: 500 });
  }
}
