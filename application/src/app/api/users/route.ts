import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      {
        id: 1,
        name: 'user1',
      },
      {
        id: 2,
        name: 'user2',
      },
      {
        id: 3,
        name: 'user3',
      },
    ],
  });
}
