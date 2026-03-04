"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CartItem } from '@/lib/types';
import { MessageCircle, ShoppingBag, Sparkles, CreditCard, MapPin, User, Mail, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppCheckoutProps {
  items: CartItem[];
  total: number;
  savings: number;
  coupon?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function WhatsAppCheckout({ items, total, savings, coupon, open, onOpenChange, onSuccess }: WhatsAppCheckoutProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    note: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCheckout = () => {
    const businessPhone = "919876543210"; 
    const itemDetails = items.map(item => `- ${item.name} (Qty: ${item.quantity}, Price: ₹${item.price * item.quantity})`).join('\n');
    
    const message = `*New Order from Sumegha Handmades*\n\n` +
      `*CUSTOMER DETAILS:*\n` +
      `- Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Address: ${formData.address}\n` +
      `- Pincode: ${formData.pincode}\n\n` +
      `*ORDER SUMMARY:*\n${itemDetails}\n\n` +
      (coupon ? `*COUPON USED:* ${coupon.toUpperCase()}\n` : '') +
      `*TOTAL SAVINGS:* ₹${savings}\n` +
      `*TOTAL PAYABLE:* ₹${total}\n\n` +
      (formData.note ? `*NOTE FOR ARTIST:* ${formData.note}\n\n` : '') +
      `Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${businessPhone}?text=${encodedMessage}`, '_blank');
    onSuccess();
    onOpenChange(false);
  };

  const isFormValid = formData.name && formData.email && formData.address && formData.pincode;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] md:max-w-[850px] rounded-[2.5rem] border-none shadow-2xl overflow-hidden p-0 bg-background transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left: Form (Portrait on Mobile, Column on Desktop) */}
          <div className="p-6 md:p-10 space-y-6">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Delivery Details
              </DialogTitle>
              <DialogDescription className="text-muted-foreground font-light text-[10px] uppercase tracking-widest mt-1">
                Where should we send your treasures?
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-1">Full Name *</Label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="rounded-xl border-primary/5 bg-white shadow-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-1">Phone Number</Label>
                  <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="+91..." className="rounded-xl border-primary/5 bg-white shadow-sm" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-1">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" className="pl-11 rounded-xl border-primary/5 bg-white shadow-sm" />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-1">Full Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                  <Textarea id="address" value={formData.address} onChange={handleChange} placeholder="House no, Street, Landmark..." className="pl-11 rounded-xl border-primary/5 bg-white shadow-sm min-h-[100px] resize-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="pincode" className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-1">Pincode *</Label>
                  <Input id="pincode" value={formData.pincode} onChange={handleChange} placeholder="6-digit code" className="rounded-xl border-primary/5 bg-white shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary (Visible as Sidebar on Desktop) */}
          <div className="bg-primary/[0.03] p-6 md:p-10 border-t md:border-t-0 md:border-l border-primary/5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-headline text-xl font-black uppercase tracking-tight flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Order Summary
              </h3>

              <div className="space-y-3 max-h-[150px] overflow-y-auto scrollbar-hide pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-foreground/60">{item.name} x {item.quantity}</span>
                    <span className="text-foreground">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-primary/5">
                {coupon && (
                  <div className="flex justify-between items-center text-[10px] font-black text-green-600 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Ticket className="h-3 w-3" /> Coupon Applied</span>
                    <span>{coupon.toUpperCase()}</span>
                  </div>
                )}
                
                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex justify-between items-center">
                  <span className="text-[10px] font-black text-green-700 uppercase tracking-widest flex items-center">
                    <Sparkles className="h-3 w-3 mr-2 animate-pulse" />
                    You Save
                  </span>
                  <span className="font-black text-green-700 text-lg">₹{savings}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Total Payable</span>
                <span className="text-4xl font-black font-headline text-primary">₹{total}</span>
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full h-16 rounded-2xl gradient-primary text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]" 
                  onClick={handleCheckout}
                  disabled={!isFormValid}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Confirm on WhatsApp
                </Button>
                <div className="flex justify-center gap-4 opacity-30 grayscale items-center">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Safe & Secure Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
