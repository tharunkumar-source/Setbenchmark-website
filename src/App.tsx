import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Direct imports for instant, synchronous page loading and SSR compatibility
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound/NotFound';
import About from '@/pages/About/About';
import Australia from '@/pages/Regions/Australia';
import BlogIndex from '@/pages/Blog/BlogIndex';
import AssessingDevelopers from '@/pages/Blog/AssessingDevelopers';
import CampusHiringGuide from '@/pages/Blog/CampusHiringGuide';
import FairCodingAssessment from '@/pages/Blog/FairCodingAssessment';
import PreventCheating from '@/pages/Blog/PreventCheating';
import HackerRankAlternatives from '@/pages/Compare/HackerRankAlternatives';
import Contact from '@/pages/Contact/Contact';
import Developers from '@/pages/Developers/Developers';
import India from '@/pages/Regions/India';
import Integrations from '@/pages/Integrations/Integrations';
import Privacy from '@/pages/Legal/Privacy';
import RefundPolicy from '@/pages/Legal/RefundPolicy';
import Terms from '@/pages/Legal/Terms';
import NewZealand from '@/pages/Regions/NewZealand';
import Pricing from '@/pages/Pricing/Pricing';
import ProductIndex from '@/pages/Product/ProductIndex';
import AIFluencyAssessments from '@/pages/Product/AIFluencyAssessments';
import AIInterviews from '@/pages/Product/AIInterviews';
import CodingAssessments from '@/pages/Product/CodingAssessments';
import LiveCodingInterviews from '@/pages/Product/LiveCodingInterviews';
import ProctoringIntegrity from '@/pages/Product/ProctoringIntegrity';
import QuestionLibrary from '@/pages/Product/QuestionLibrary';
import SkillsIntelligence from '@/pages/Product/SkillsIntelligence';
import SaudiArabia from '@/pages/Regions/SaudiArabia';
import Security from '@/pages/Security/Security';
import SkillTestsIndex from '@/pages/SkillTests/SkillTestsIndex';
import AWSTest from '@/pages/SkillTests/AWSTest';
import DataScienceTest from '@/pages/SkillTests/DataScienceTest';
import DSATest from '@/pages/SkillTests/DSATest';
import DevOpsTest from '@/pages/SkillTests/DevOpsTest';
import GolangTest from '@/pages/SkillTests/GolangTest';
import JavaTest from '@/pages/SkillTests/JavaTest';
import JavascriptTest from '@/pages/SkillTests/JavascriptTest';
import NodeJSTest from '@/pages/SkillTests/NodeJSTest';
import PythonTest from '@/pages/SkillTests/PythonTest';
import ReactTest from '@/pages/SkillTests/ReactTest';
import SQLTest from '@/pages/SkillTests/SQLTest';
import SystemDesignTest from '@/pages/SkillTests/SystemDesignTest';
import SolutionsIndex from '@/pages/Solutions/SolutionsIndex';
import CampusHiring from '@/pages/Solutions/CampusHiring';
import EnterpriseTechHiring from '@/pages/Solutions/EnterpriseTechHiring';
import ITServicesStaffing from '@/pages/Solutions/ITServicesStaffing';
import Startups from '@/pages/Solutions/Startups';
import UAE from '@/pages/Regions/UAE';
import FreeTrial from '@/pages/FreeTrial/FreeTrial';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/" element={<About />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/australia/" element={<Australia />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/" element={<BlogIndex />} />
        <Route path="/blog/assessing-developers-in-the-age-of-ai" element={<AssessingDevelopers />} />
        <Route path="/blog/assessing-developers-in-the-age-of-ai/" element={<AssessingDevelopers />} />
        <Route path="/blog/campus-hiring-coding-assessment-guide" element={<CampusHiringGuide />} />
        <Route path="/blog/campus-hiring-coding-assessment-guide/" element={<CampusHiringGuide />} />
        <Route path="/blog/how-to-design-a-fair-coding-assessment" element={<FairCodingAssessment />} />
        <Route path="/blog/how-to-design-a-fair-coding-assessment/" element={<FairCodingAssessment />} />
        <Route path="/blog/how-to-prevent-cheating-in-online-coding-tests" element={<PreventCheating />} />
        <Route path="/blog/how-to-prevent-cheating-in-online-coding-tests/" element={<PreventCheating />} />
        <Route path="/compare/hackerrank-alternatives" element={<HackerRankAlternatives />} />
        <Route path="/compare/hackerrank-alternatives/" element={<HackerRankAlternatives />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/demo" element={<Contact />} />
        <Route path="/demo/" element={<Contact />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/" element={<Developers />} />
        <Route path="/india" element={<India />} />
        <Route path="/india/" element={<India />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/integrations/" element={<Integrations />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/privacy/" element={<Privacy />} />
        <Route path="/legal/refund-policy" element={<RefundPolicy />} />
        <Route path="/legal/refund-policy/" element={<RefundPolicy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/terms/" element={<Terms />} />
        <Route path="/new-zealand" element={<NewZealand />} />
        <Route path="/new-zealand/" element={<NewZealand />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/" element={<Pricing />} />
        <Route path="/product" element={<ProductIndex />} />
        <Route path="/product/" element={<ProductIndex />} />
        <Route path="/product/ai-fluency-assessments" element={<AIFluencyAssessments />} />
        <Route path="/product/ai-fluency-assessments/" element={<AIFluencyAssessments />} />
        <Route path="/product/ai-interviews" element={<AIInterviews />} />
        <Route path="/product/ai-interviews/" element={<AIInterviews />} />
        <Route path="/product/coding-assessments" element={<CodingAssessments />} />
        <Route path="/product/coding-assessments/" element={<CodingAssessments />} />
        <Route path="/product/live-coding-interviews" element={<LiveCodingInterviews />} />
        <Route path="/product/live-coding-interviews/" element={<LiveCodingInterviews />} />
        <Route path="/product/proctoring-integrity" element={<ProctoringIntegrity />} />
        <Route path="/product/proctoring-integrity/" element={<ProctoringIntegrity />} />
        <Route path="/product/question-library" element={<QuestionLibrary />} />
        <Route path="/product/question-library/" element={<QuestionLibrary />} />
        <Route path="/product/skills-intelligence" element={<SkillsIntelligence />} />
        <Route path="/product/skills-intelligence/" element={<SkillsIntelligence />} />
        <Route path="/saudi-arabia" element={<SaudiArabia />} />
        <Route path="/saudi-arabia/" element={<SaudiArabia />} />
        <Route path="/security" element={<Security />} />
        <Route path="/security/" element={<Security />} />
        <Route path="/skill-tests" element={<SkillTestsIndex />} />
        <Route path="/skill-tests/" element={<SkillTestsIndex />} />
        <Route path="/skill-tests/aws" element={<AWSTest />} />
        <Route path="/skill-tests/aws/" element={<AWSTest />} />
        <Route path="/skill-tests/data-science" element={<DataScienceTest />} />
        <Route path="/skill-tests/data-science/" element={<DataScienceTest />} />
        <Route path="/skill-tests/data-structures-algorithms" element={<DSATest />} />
        <Route path="/skill-tests/data-structures-algorithms/" element={<DSATest />} />
        <Route path="/skill-tests/devops" element={<DevOpsTest />} />
        <Route path="/skill-tests/devops/" element={<DevOpsTest />} />
        <Route path="/skill-tests/golang" element={<GolangTest />} />
        <Route path="/skill-tests/golang/" element={<GolangTest />} />
        <Route path="/skill-tests/java" element={<JavaTest />} />
        <Route path="/skill-tests/java/" element={<JavaTest />} />
        <Route path="/skill-tests/javascript" element={<JavascriptTest />} />
        <Route path="/skill-tests/javascript/" element={<JavascriptTest />} />
        <Route path="/skill-tests/nodejs" element={<NodeJSTest />} />
        <Route path="/skill-tests/nodejs/" element={<NodeJSTest />} />
        <Route path="/skill-tests/python" element={<PythonTest />} />
        <Route path="/skill-tests/python/" element={<PythonTest />} />
        <Route path="/skill-tests/react" element={<ReactTest />} />
        <Route path="/skill-tests/react/" element={<ReactTest />} />
        <Route path="/skill-tests/sql" element={<SQLTest />} />
        <Route path="/skill-tests/sql/" element={<SQLTest />} />
        <Route path="/skill-tests/system-design" element={<SystemDesignTest />} />
        <Route path="/skill-tests/system-design/" element={<SystemDesignTest />} />
        <Route path="/solutions" element={<SolutionsIndex />} />
        <Route path="/solutions/" element={<SolutionsIndex />} />
        <Route path="/solutions/campus-hiring" element={<CampusHiring />} />
        <Route path="/solutions/campus-hiring/" element={<CampusHiring />} />
        <Route path="/solutions/enterprise-tech-hiring" element={<EnterpriseTechHiring />} />
        <Route path="/solutions/enterprise-tech-hiring/" element={<EnterpriseTechHiring />} />
        <Route path="/solutions/it-services-staffing" element={<ITServicesStaffing />} />
        <Route path="/solutions/it-services-staffing/" element={<ITServicesStaffing />} />
        <Route path="/solutions/startups" element={<Startups />} />
        <Route path="/solutions/startups/" element={<Startups />} />
        <Route path="/uae" element={<UAE />} />
        <Route path="/uae/" element={<UAE />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/free-trial/" element={<FreeTrial />} />
        <Route path="/signup" element={<FreeTrial />} />
        <Route path="/signup/" element={<FreeTrial />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
