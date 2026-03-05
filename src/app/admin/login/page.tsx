
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Gem, Loader2, LogIn } from 'lucide-react';
import { FirebaseClientProvider } from '@/firebase/client-provider';

function AdminLoginPageContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setEmail('admin@example.com');
      setPassword('password');
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful",
        description: "Welcome back, Admin!",
      });
      router.push('/admin');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message || "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isUserLoading) {
     return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (user) {
    router.replace('/admin');
    return null;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-3 p-4 bg-card shadow-sm rounded-full border border-border">
          <Gem className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-black font-display uppercase tracking-wider text-foreground">
          Resin Artologyy
        </h1>
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Admin Panel</p>
      </div>

      <Card className="w-full max-w-sm rounded-2xl shadow-2xl border-primary/10 bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-black uppercase tracking-tight">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-lg"
              />
            </div>
            <Button type="submit" className="w-full h-12 rounded-lg gradient-primary text-sm font-bold uppercase tracking-widest" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <FirebaseClientProvider>
      <AdminLoginPageContent />
    </FirebaseClientProvider>
  )
}
