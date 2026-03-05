import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MessageSquare, BookOpen, School, Lightbulb, MessageCircle } from "lucide-react";

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: MessageSquare },
    { path: "/debates", label: "Events", icon: BookOpen },
    { path: "/learn", label: "Learn", icon: Lightbulb },
    { path: "/schools", label: "Schools", icon: School },
    { path: "/feedback", label: "Feedback", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200/60 bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-smooth">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-[#1e3a5f] text-white p-2.5 rounded-lg transition-smooth group-hover:bg-[#2d5270]">
                <MessageSquare className="size-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold text-[#1e3a5f] block leading-none">
                  ISD Initiative
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Inter-School Debate
                </span>
              </div>
            </Link>
            
            <nav className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-lg transition-smooth ${
                      isActive
                        ? "bg-[#f7f5f0] text-[#1a3a52] font-medium"
                        : "text-gray-600 hover:bg-[#fafaf8] hover:text-[#1a3a52]"
                    }`}
                  >
                    <Icon className="size-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200/60 bg-[#fafaf8] py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1a3a52] text-white p-2 rounded-lg">
                  <MessageSquare className="size-5" />
                </div>
                <span className="font-serif text-lg font-semibold text-[#1a3a52]">
                  ISD Initiative
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A student-led academic platform fostering critical thinking and intellectual collaboration among public school students.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1a3a52] mb-4">Platform</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li>
                  <Link to="/debates" className="hover:text-[#1a3a52] transition-smooth">
                    Debate Events
                  </Link>
                </li>
                <li>
                  <Link to="/learn" className="hover:text-[#1a3a52] transition-smooth">
                    Learning Center
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className="hover:text-[#1a3a52] transition-smooth">
                    Participating Schools
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="hover:text-[#1a3a52] transition-smooth">
                    Share Feedback
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#1a3a52] mb-4">Initiative</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Supporting equal opportunity, accessibility, and academic integrity through structured debate for all public school students.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200/60 mt-10 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Inter-School Debate (ISD) Initiative · Fostering Critical Thinking and Communication
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}