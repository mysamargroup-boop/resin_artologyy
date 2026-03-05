
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, ShoppingCart, Users, Gem } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { title: "Total Revenue", value: "₹1,25,430", icon: BarChart3, change: "+12.5%" },
    { title: "New Orders", value: "32", icon: ShoppingCart, change: "+5.2%" },
    { title: "New Customers", value: "18", icon: Users, change: "+8.1%" },
    { title: "New Products", value: "4", icon: Gem, change: "+1" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">An overview of your store's performance.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium uppercase tracking-wider">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black">{stat.value}</div>
              <p className="text-xs text-green-500 font-bold">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for recent orders table */}
            <div className="text-center py-12 text-muted-foreground">Recent orders will appear here.</div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for top products list */}
            <div className="text-center py-12 text-muted-foreground">Top selling products will appear here.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
