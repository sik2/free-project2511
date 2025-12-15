'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { BookOpen } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    } else {
      console.log(data);
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">개발 블로그</span>
        </Link>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">로그인</CardTitle>
            <CardDescription>
              아이디와 비밀번호를 입력하여 로그인하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">아이디</Label>
              <Input
                id="username"
                type="text"
                placeholder="아이디를 입력하세요"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" size="lg"
              onClick={handleLogin}
            >
              로그인
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              계정이 없으신가요?
              <Link href="/signup" className="text-primary hover:underline font-medium">
                회원가입
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
