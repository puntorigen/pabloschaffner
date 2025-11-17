import { NextResponse } from 'next/server';
import { getFeaturedPosts } from '@/lib/blog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    
    const posts = getFeaturedPosts(lang);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

