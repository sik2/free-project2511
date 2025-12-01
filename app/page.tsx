"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { BookOpen, Calendar, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .then(({ data }) => {
        setPosts(data);
      });
  }, []);

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
              <Button variant="ghost" size="sm">
                글쓰기
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                로그인
              </Button>
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
              개발자를 위한
              <br />
              지식 공유 플랫폼
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
          {posts.map((post: any) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <h3 className="text-balance text-xl font-semibold leading-tight text-card-foreground">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                    {post.content}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.user_id}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
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
  );
}
