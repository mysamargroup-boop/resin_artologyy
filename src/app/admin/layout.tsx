
"use client";

import { use, Suspense, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarInset, SidebarHeader, SidebarFooter } from '@/components/ui/sidebar';
import { Home, Package, Users, ShoppingCart, BarChart3, Settings, LifeBuoy, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isUserLoading && !user && pathname !== '/admin/login') {
      router.replace('/admin/login');
    }
  }, [user, isUserLoading, router, pathname]);

  if (pathname === '/admin/login') {
    return <Suspense>{children}</Suspense>;
  }

  if (isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', icon: Home, href: '/admin' },
    { name: 'Products', icon: Package, href: '/admin/products' },
    { name: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
    { name: 'Customers', icon: Users, href: '/admin/customers' },
    { name: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  return (
    <Suspense>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className="border-b border-border/20 p-4">
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-black font-display uppercase tracking-wider text-foreground whitespace-nowrap">
                Resin Artologyy
              </h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    href={item.href}
                    asChild
                  >
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t border-border/20 p-4 space-y-4">
             <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton href="/admin/support" asChild>
                    <a href="/admin/support">
                      <LifeBuoy />
                      <span>Support</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout}>
                    <LogOut />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary/50">
                  <AvatarImage src={user.photoURL || `https://avatar.vercel.sh/${user.uid}.png`} alt="Admin" />
                  <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{user.displayName || "Admin"}</span>
                  <span className="text-xs text-muted-foreground">{user.email}</span>
                </div>
              </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-lg px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1">
              <h2 className="text-xl font-bold uppercase tracking-widest">{pathname.split('/').pop() || 'Dashboard'}</h2>
            </div>
            {/* Add header actions here */}
          </header>
          <main className="flex-1 p-6">
            {children}
            <Toaster />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Suspense>
  );
}
