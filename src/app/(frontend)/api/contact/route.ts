// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xyrvbmeprktnueoiqcxr.supabase.co',
  process.env.SUPABASE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, contact, services, message } = body;

    const { error } = await supabase.from('contacts').insert([
      { first_name, last_name, email, contact, services, message }
    ]);

    if (error) {
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
