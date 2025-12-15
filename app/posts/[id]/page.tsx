'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Edit } from 'lucide-react'
import { DeletePostDialog } from '@/components/delete-post-dialog'
import { supabase } from '@/lib/supabase'
import { Spinner } from '@/components/ui/spinner'

type Post = {
  id: number
  title: string
  content: string
  created_at: string
  updated_at: string
}

export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', params.id)
          .single()

        if (error) {
          console.error('Error fetching post:', error)
          setError('게시글을 불러오는데 실패했습니다.')
        } else {
          setPost(data)
        }
      } catch (err) {
        console.error('Unexpected error:', err)
        setError('예상치 못한 오류가 발생했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchPost()
    }
  }, [params.id])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="size-16" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                목록으로
              </Button>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">
              {error || '게시글을 찾을 수 없습니다.'}
            </h1>
            <Link href="/">
              <Button>홈으로 돌아가기</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

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
              <h1 className="text-balance text-4xl font-bold mb-4 text-card-foreground">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.created_at).toLocaleDateString('ko-KR')}
                </span>
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
