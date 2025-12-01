import Layout from "./Layout.jsx";

import Home from "./Home";

import Accessibility from "./Accessibility";

import AssistiveDevices from "./AssistiveDevices";

import Inclusion from "./Inclusion";

import About from "./About";

import Contact from "./Contact";

import Donate from "./Donate";

import Programs from "./Programs";

import AccessibilityGuides from "./AccessibilityGuides";

import DevicesInfo from "./DevicesInfo";

import InclusionTools from "./InclusionTools";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import RefundPolicy from "./RefundPolicy";

import Disclaimer from "./Disclaimer";

import Sitemap from "./Sitemap";

import ResearchReports from "./ResearchReports";

import BlogInsights from "./BlogInsights";

import CookiesPolicy from "./CookiesPolicy";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Accessibility: Accessibility,
    
    AssistiveDevices: AssistiveDevices,
    
    Inclusion: Inclusion,
    
    About: About,
    
    Contact: Contact,
    
    Donate: Donate,
    
    Programs: Programs,
    
    AccessibilityGuides: AccessibilityGuides,
    
    DevicesInfo: DevicesInfo,
    
    InclusionTools: InclusionTools,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    RefundPolicy: RefundPolicy,
    
    Disclaimer: Disclaimer,
    
    Sitemap: Sitemap,
    
    ResearchReports: ResearchReports,
    
    BlogInsights: BlogInsights,
    
    CookiesPolicy: CookiesPolicy,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Accessibility" element={<Accessibility />} />
                
                <Route path="/AssistiveDevices" element={<AssistiveDevices />} />
                
                <Route path="/Inclusion" element={<Inclusion />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/AccessibilityGuides" element={<AccessibilityGuides />} />
                
                <Route path="/DevicesInfo" element={<DevicesInfo />} />
                
                <Route path="/InclusionTools" element={<InclusionTools />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                
                <Route path="/Disclaimer" element={<Disclaimer />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
                <Route path="/ResearchReports" element={<ResearchReports />} />
                
                <Route path="/BlogInsights" element={<BlogInsights />} />
                
                <Route path="/CookiesPolicy" element={<CookiesPolicy />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}