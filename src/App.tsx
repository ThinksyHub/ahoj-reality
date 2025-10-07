import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Makleri from "./pages/AboutUs";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ponuka-nehnutelnosti" element={<Properties />} />
          <Route path="/o-nas" element={<AboutUs />} />
          <Route path="/referencie" element={<Referencie />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chcem-predat" element={<ChcemPredat />} />
          <Route path="/chcem-kupit" element={<ChcemKupit />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/homestaging" element={<Homestaging />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
