
"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Sparkles } from 'lucide-react';
import { CartItem, Product } from '@/lib/types';
import { cn } from '@/lib/utils';
import productsData from "@/lib/products.json";

interface OrderConfirmationProps {
  items: CartItem[];
  total: number;
  savings: number;
  coupon?: string;
  customerDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    pincode: string;
  };
  onOpenChange: (open: boolean) => void;
}

const generateInvoiceHTML = (order: OrderConfirmationProps) => {
  const allProducts = productsData.products as Product[];

  // Recalculate totals to prevent client-side manipulation
  let verifiedSubtotal = 0;
  const verifiedItems = order.items.map(item => {
    const product = allProducts.find(p => p.id === item.id);
    if (!product) return { ...item, sale_price: 0, total: 0 }; // Should not happen
    const itemTotal = product.sale_price * item.quantity;
    verifiedSubtotal += itemTotal;
    return { ...item, sale_price: product.sale_price, total: itemTotal };
  });

  const discountAmount = order.coupon ? (verifiedSubtotal * 0.10) : 0; // Assuming 10% for Resin Artologyy10
  const verifiedTotal = verifiedSubtotal - discountAmount;

  const today = new Date();

  return `
    <html>
      <head>
        <title>Invoice - Resin Artologyy</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 2rem; color: #333; background-color: #fafafa; }
          .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); font-size: 16px; line-height: 24px; background-color: #fff; }
          .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
          .header h1 { font-size: 2rem; color: #d62828; margin: 0; }
          .details { display: flex; justify-content: space-between; margin-bottom: 2rem; }
          .details div { font-size: 0.9rem; }
          .item-table { width: 100%; text-align: left; border-collapse: collapse; }
          .item-table th, .item-table td { padding: 8px; border-bottom: 1px solid #ddd; }
          .item-table th { background-color: #f2f2f2; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; }
          .totals { margin-top: 2rem; text-align: right; }
          .totals div { margin-bottom: 0.5rem; }
          .totals .grand-total { font-size: 1.5rem; font-weight: bold; color: #d62828; }
          .footer { text-align: center; margin-top: 2rem; font-size: 0.8rem; color: #777; }
        </style>
      </head>
      <body>
        <div class="invoice-box">
          <div class="header">
            <h1>Resin Artologyy</h1>
            <div>
              Invoice #${Math.floor(Math.random() * 10000)}<br>
              Date: ${today.toLocaleDateString()}<br>
            </div>
          </div>
          <div class="details">
            <div>
              <strong>Billed To:</strong><br>
              ${order.customerDetails.name}<br>
              ${order.customerDetails.address}<br>
              ${order.customerDetails.pincode}<br>
              ${order.customerDetails.email}
            </div>
            <div>
              <strong>From:</strong><br>
              Resin Artologyy<br>
              Hyderabad, India<br>
              hello@resinartologyy.com
            </div>
          </div>
          <table class="item-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${verifiedItems.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.sale_price.toFixed(2)}</td>
                  <td>₹${item.total.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="totals">
            <div>Subtotal: ₹${verifiedSubtotal.toFixed(2)}</div>
            ${discountAmount > 0 ? `<div>Coupon Discount: -₹${discountAmount.toFixed(2)}</div>` : ''}
            <div>Shipping: FREE</div>
            <div class="grand-total">Total: ₹${verifiedTotal.toFixed(2)}</div>
          </div>
          <div class="footer">
            Thank you for your purchase!
          </div>
        </div>
      </body>
    </html>
  `;
};


export function OrderConfirmation(props: OrderConfirmationProps) {
  const [isSparkling, setIsSparkling] = useState(false);

  useEffect(() => {
    setIsSparkling(true);
    const timer = setTimeout(() => setIsSparkling(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadInvoice = () => {
    const invoiceHtml = generateInvoiceHTML(props);
    const blob = new Blob([invoiceHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'invoice.html';
    a.click();
    URL.revokeObjectURL(url);
  };
  
  const handlePrintInvoice = () => {
    const invoiceHtml = generateInvoiceHTML(props);
    const printWindow = window.open('', '_blank');
    printWindow?.document.write(invoiceHtml);
    printWindow?.document.close();
    printWindow?.focus();
    setTimeout(() => {
        printWindow?.print();
    }, 500);
  }

  return (
    <Dialog open={true} onOpenChange={props.onOpenChange}>
      <DialogContent className="sm:max-w-md p-8 text-center rounded-[2.5rem] relative overflow-hidden">
        {isSparkling && (
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <Sparkles 
                key={i} 
                className={cn(
                  "absolute h-8 w-8 text-primary animate-bounce opacity-70",
                  "animate-in fade-in zoom-in-50 duration-1000"
                )}
                style={{
                  top: `${Math.random() * 90 + 5}%`,
                  left: `${Math.random() * 90 + 5}%`,
                  animationDelay: `${Math.random() * 800}ms`,
                }}
              />
            ))}
          </div>
        )}
        <div className="relative z-10 space-y-6">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border-4 border-green-500/20">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <div className="space-y-2">
            <DialogTitle className="text-3xl font-black font-display uppercase tracking-tight">Thank You!</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Your order has been sent to the artist. You'll be contacted shortly on WhatsApp to finalize payment and details.
            </DialogDescription>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-4 text-left text-xs space-y-2">
             <p><strong>Order for:</strong> {props.customerDetails.name}</p>
             <p><strong>Total Amount:</strong> <span className="font-bold text-primary">₹{props.total}</span></p>
          </div>

          <Button 
            className="w-full h-12 rounded-xl gradient-primary text-xs font-bold uppercase tracking-widest group"
            onClick={handlePrintInvoice}
          >
            <Download className="mr-2 h-4 w-4" />
            Download / Print Invoice
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
