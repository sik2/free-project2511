import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PostForm } from '@/components/post-form'

// Mock post data
const post = {
  id: 1,
  title: 'Next.js 15의 새로운 기능들',
  category: '개발',
  content: 'Next.js 15에서 추가된 혁신적인 기능들과 성능 개선 사항을 자세히 알아봅니다.',
}

export default function EditPostPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/posts/${post.id}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              돌아가기
            </Button>
          </Link>
        </div>
      </header>

      {/* Form */}
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-8 text-foreground">글 수정</h1>
          <PostForm initialData={post} isEdit />
        </div>
      </main>
    </div>
  )
}
