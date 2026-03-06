import { useState } from "react";
import { Navigate, Outlet, Link, useLocation } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, FileText, Package, Globe, Settings, LogOut, BookOpen, Menu, X } from "lucide-react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "primesky2025";

const AdminLayout = () => {
  const { t } = useLang();
  const location = useLocation();
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("admin_auth") === "true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem("admin_auth", "true");
      setAuthed(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <img src="/logo_prime.png" alt="Logo" className="h-16 mx-auto mb-4" />
              <h1 className="text-2xl font-bold">{t.admin.login}</h1>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input placeholder={t.admin.username} value={username} onChange={(e) => setUsername(e.target.value)} required />
              <Input type="password" placeholder={t.admin.password} value={password} onChange={(e) => setPassword(e.target.value)} required />
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-primary text-primary-foreground font-semibold h-11">{t.admin.login}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: t.admin.dashboard },
    { path: "/admin/content", icon: FileText, label: t.admin.manageContent },
    { path: "/admin/packages", icon: Package, label: t.admin.managePackages },
    { path: "/admin/visa", icon: Globe, label: t.admin.manageVisa },
    { path: "/admin/bookings", icon: BookOpen, label: t.admin.manageBookings },
    { path: "/admin/settings", icon: Settings, label: t.admin.settings },
  ];

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <img src="/logo_prime.png" alt="Logo" className="h-8" />
            <span className="font-bold text-sm">Prime Sky Admin</span>
          </div>
        </div>
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                (item.path === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(item.path))
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-sidebar-border">
          <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            {t.admin.logout}
          </Button>
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent mt-1">
              <Globe className="w-4 h-4" />
              {t.nav.home}
            </Button>
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 sticky top-0 z-30">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="font-semibold text-lg">
            {menuItems.find((m) => (m.path === "/admin" ? location.pathname === "/admin" : location.pathname.startsWith(m.path)))?.label || t.admin.dashboard}
          </h2>
        </header>
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
