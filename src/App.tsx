import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Referencie from "./pages/Referencie";
import Blog from "./pages/Blog";
import ChcemPredat from "./pages/ChcemPredat";
import ChcemKupit from "./pages/ChcemKupit";
import PropertyDetail from "./pages/PropertyDetail";
import Cennik from "./pages/Cennik";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import ScrollToTop from "./lib/ScrollToTop";
import Homestaging from "./pages/Homestaging";
import EtickyKodex from "./pages/EtickyKodex";
import Gdpr from "./pages/Gdpr";
import Cookies from "./pages/Cookies";
import ObchodnePodmienky from "./pages/ObchodnePodmienky";
import VseobecnePodmienky from "./pages/VseobecnePodmienky";
import Kariera from "./pages/Kariera";
import BlogDetail from "@/pages/BlogDetail.tsx";
import {useEffect, useState} from "react";
import Login from "@/components/Login.tsx";
import CoockiesPopup from "@/components/CoockiesPopup.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isAdmin");
    if (stored === "true") setIsAdmin(true);
  }, []);

  const handleLogin = () => setIsAdmin(true);

  return (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster/>
      <Sonner/>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/ponuka-nehnutelnosti" element={<Properties/>}/>
          <Route path="/o-nas" element={<AboutUs/>}/>
          <Route path="/referencie" element={<Referencie/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/chcem-predat" element={<ChcemPredat/>}/>
          <Route path="/chcem-kupit" element={<ChcemKupit/>}/>
          <Route path="/property/:id" element={<PropertyDetail/>}/>
          <Route path="/cennik" element={<Cennik/>}/>
          <Route path="/homestaging" element={<Homestaging/>}/>
          <Route path="/eticky-kodex" element={<EtickyKodex/>}/>
          <Route path="/gdpr" element={<Gdpr/>}/>
          <Route path="/obchodne-podmienky" element={<ObchodnePodmienky/>}/>
          <Route path="/vseobecne-podmienky" element={<VseobecnePodmienky/>}/>
          <Route path="/cookies" element={<Cookies/>}/>
          <Route path="/kariera" element={<Kariera/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>
          {/* Admin route */}
          <Route
              path="/admin"
              element={isAdmin ? <Admin/> : <Login onLogin={handleLogin}/>}
          />
        </Routes>
        <CoockiesPopup/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>)
};

export default App;
