import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar, User, Edit } from 'lucide-react'
import { DeletePostDialog } from '@/components/delete-post-dialog'

// Mock post data
const post = {
  id: 1,
  title: 'Next.js 15의 새로운 기능들',
  content: `
# Next.js 15의 주요 업데이트

Next.js 15는 웹 개발의 새로운 표준을 제시하는 혁신적인 업데이트입니다.

## 1. 향상된 성능

새로운 컴파일러와 최적화 기법으로 빌드 시간이 40% 단축되었습니다.

## 2. 개선된 개발자 경험

- 더 빠른 Hot Module Replacement
- 향상된 에러 메시지
- 새로운 디버깅 도구

## 3. React Server Components

완전히 통합된 Server Components 지원으로 더욱 강력한 서버 사이드 렌더링이 가능합니다.

## 결론

Next.js 15는 모던 웹 개발의 필수 도구로 자리잡을 것입니다.
  `,
  author: '김철수',
  date: '2025년 1월 15일',
  category: '개발',
  readTime: '5분',
}

export default function PostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              목록으로
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Link href={`/posts/${post.id}/edit`}>
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                수정
              </Button>
            </Link>
            <DeletePostDialog postId={post.id} />
          </div>
        </div>
      </header>

      {/* Post Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-balance text-4xl font-bold mb-4 text-card-foreground">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span>{post.date}</span>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="whitespace-pre-line text-pretty leading-relaxed">
                  {post.content}
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  )
}
