
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Legal from "./pages/Legal";
import Consultation from "./pages/Consultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/whitepapers" element={<Resources />} /> */}
          {/* <Route path="/guides" element={<Resources />} /> */}
          {/* <Route path="/toolkit" element={<Resources />} /> */}
          {/* <Route path="/training" element={<Resources />} /> */}
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />
          <Route path="/data-protection" element={<Legal />} />
          <Route path="/compliance" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter >
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
