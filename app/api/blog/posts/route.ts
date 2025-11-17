import { NextResponse } from 'next/server';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';
    
    const posts = getAllPosts(lang);
    const categories = getAllCategories(lang);
    
    return NextResponse.json({ posts, categories });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

