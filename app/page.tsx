import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Calendar, User } from 'lucide-react'

// Mock data for blog posts
const posts = [
  {
    id: 1,
    title: 'Next.js 15의 새로운 기능들',
    excerpt: 'Next.js 15에서 추가된 혁신적인 기능들과 성능 개선 사항을 자세히 알아봅니다.',
    author: '김철수',
    date: '2025년 1월 15일',
    category: '개발',
    readTime: '5분',
  },
  {
    id: 2,
    title: 'React Server Components 완벽 가이드',
    excerpt: 'React Server Components의 동작 원리와 실제 프로젝트 적용 방법을 단계별로 설명합니다.',
    author: '이영희',
    date: '2025년 1월 12일',
    category: 'React',
    readTime: '8분',
  },
  {
    id: 3,
    title: 'TypeScript 고급 타입 패턴',
    excerpt: 'TypeScript의 고급 타입 시스템을 활용한 안전하고 확장 가능한 코드 작성법.',
    author: '박민준',
    date: '2025년 1월 10일',
    category: 'TypeScript',
    readTime: '6분',
  },
  {
    id: 4,
    title: 'Tailwind CSS v4 살펴보기',
    excerpt: 'Tailwind CSS v4의 새로운 기능과 개선된 성능, 그리고 마이그레이션 가이드.',
    author: '정수진',
    date: '2025년 1월 8일',
    category: '디자인',
    readTime: '4분',
  },
  {
    id: 5,
    title: '모던 웹 개발 트렌드 2025',
    excerpt: '2025년 웹 개발 생태계의 주요 트렌드와 앞으로의 전망을 분석합니다.',
    author: '최동현',
    date: '2025년 1월 5일',
    category: '트렌드',
    readTime: '7분',
  },
  {
    id: 6,
    title: '효율적인 상태 관리 전략',
    excerpt: '대규모 애플리케이션에서 상태 관리를 효율적으로 하는 방법과 베스트 프랙티스.',
    author: '강지은',
    date: '2025년 1월 3일',
    category: '개발',
    readTime: '10분',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">개발 블로그</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/posts/new">
              <Button variant="ghost" size="sm">글쓰기</Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">로그인</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">회원가입</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              개발자를 위한<br />지식 공유 플랫폼
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
              최신 개발 트렌드와 기술 노하우를 공유하고 함께 성장하는 공간입니다
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-balance text-xl font-semibold leading-tight text-card-foreground">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span>{post.date}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 개발 블로그. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
