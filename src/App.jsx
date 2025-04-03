
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SchoolSearch from "./pages/SchoolSearch";
import Leaderboard from "./pages/Leaderboard";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import StudentDashboard from "./pages/student/StudentDashboard";
import VolunteerDashboard from "./pages/volunteer/VolunteerDashboard";
import SchoolDashboard from "./pages/school/SchoolDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schools" element={<SchoolSearch />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Student Portal Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          
          {/* Volunteer Portal Routes */}
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          
          {/* School Admin Portal Routes */}
          <Route path="/school/dashboard" element={<SchoolDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
