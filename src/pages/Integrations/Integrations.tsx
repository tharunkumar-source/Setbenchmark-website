import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import { FAQ } from '@/components/FAQ';

const RAW_CONTENT = `<section class="phero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><span aria-current="page">Integrations</span></li></ol></nav><div class="phero-grid"><div><div class="eyebrow">Integrations</div><h1 class="h1">Works with the tools your team already uses</h1><p class="lead">Send assessments from your ATS, schedule interviews from your calendar, sign in with SSO and get results where your team works.</p><div class="btns"><a class="btn btn-primary" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost">Book a demo</a></div></div><div class="shot"><img src="/images/product/AD06-Integrations.webp" alt="Integrations settings showing Greenhouse sync rules and connected apps" width="1440" height="900" loading="eager" decoding="async"/></div></div></div></section><section class="section"><div class="wrap"><div style="margin-bottom:48px"><div class="head"><h2 class="h2">Applicant tracking systems</h2></div><div class="grid g3"><div class="card"><h3 class="h3">Greenhouse</h3><p>Send assessments at a stage; scores, reports and decisions sync back.</p></div><div class="card"><h3 class="h3">Lever</h3><p>Trigger assessments from Lever and see results on the candidate.</p></div><div class="card"><h3 class="h3">Ashby</h3><p>Assessment results and report links in Ashby.</p></div><div class="card"><h3 class="h3">SmartRecruiters</h3><p>Invite candidates and sync results.</p></div></div></div><div style="margin-bottom:48px"><div class="head"><h2 class="h2">Scheduling and communication</h2></div><div class="grid g3"><div class="card"><h3 class="h3">Google Calendar</h3><p>Schedule live interviews with availability.</p></div><div class="card"><h3 class="h3">Microsoft 365 and Teams</h3><p>Calendar scheduling and Teams meetings.</p></div><div class="card"><h3 class="h3">Slack</h3><p>Alerts for completed assessments and reviews.</p></div></div></div><div style="margin-bottom:48px"><div class="head"><h2 class="h2">Identity and HR</h2></div><div class="grid g3"><div class="card"><h3 class="h3">Okta</h3><p>SAML single sign-on and SCIM provisioning.</p></div><div class="card"><h3 class="h3">Microsoft Entra ID and Google Workspace</h3><p>Single sign-on for your team.</p></div><div class="card"><h3 class="h3">Kombee HRMS</h3><p>Employee records for skills intelligence.</p></div></div></div><div style="margin-bottom:48px"><div class="head"><h2 class="h2">Developer tools</h2></div><div class="grid g3"><div class="card"><h3 class="h3">GitHub</h3><p>Use your repositories for repository tasks.</p></div><div class="card"><h3 class="h3">REST API and webhooks</h3><p>Create assessments, invite candidates and receive results in your own systems.</p></div></div></div><div style="margin-bottom:48px"><div class="head"><h2 class="h2">Coming in 2027</h2></div><div class="grid g3"><div class="card"><h3 class="h3">Workday Recruiting</h3><p>Push results and skills to Workday.</p></div><div class="card"><h3 class="h3">SAP SuccessFactors</h3><p>Recruiting and learning sync.</p></div><div class="card"><h3 class="h3">iCIMS</h3><p>Assessment results in iCIMS.</p></div></div></div></div></section><section class="section tight"><div class="wrap"><div class="cta"><div><h2 class="h2">See SetBenchmark with your own roles</h2><p>Start a 14-day free trial with 10 assessment attempts, or book a 30-minute demo with our team.</p></div><div class="btns"><a class="btn btn-lime" href="https://app.setbenchmark.com/signup">Start free trial</a><a href="/contact/" class="btn btn-ghost on-dark">Book a demo</a></div></div></div></section>`;

export const Integrations: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Integrations: ATS, Calendar, SSO and API | SetBenchmark"
        description="Connect SetBenchmark to Greenhouse, Lever, Ashby, SmartRecruiters, Google Calendar, Microsoft 365, Slack, Okta and GitHub, or use the REST API."
        canonical="https://www.setbenchmark.com/integrations"
        jsonLd={[{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.setbenchmark.com"}, {"@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://www.setbenchmark.com/integrations"}]}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which ATS does SetBenchmark integrate with?", "acceptedAnswer": {"@type": "Answer", "text": "Greenhouse, Lever, Ashby and SmartRecruiters today. Workday, SAP SuccessFactors and iCIMS are planned for 2027. You can connect other systems with the REST API and webhooks."}}, {"@type": "Question", "name": "Do integrations cost extra?", "acceptedAnswer": {"@type": "Answer", "text": "ATS, calendar and Slack integrations are included in Growth and Enterprise. SSO, SCIM and the API are included in Enterprise."}}]}, {"@context": "https://schema.org", "@type": "Organization", "name": "SetBenchmark", "legalName": "Kombee Technologies (India) Pvt. Ltd.", "url": "https://www.setbenchmark.com", "logo": "https://www.setbenchmark.com/brand/setbenchmark-mark-512.png", "sameAs": []}, {"@context": "https://schema.org", "@type": "WebSite", "name": "SetBenchmark", "url": "https://www.setbenchmark.com"}]}
      />
      <div dangerouslySetInnerHTML={{ __html: RAW_CONTENT }} />
      <FAQ
        topic="Integrations"
        items={[
      {
            "question": "Which ATS does SetBenchmark integrate with?",
            "answer": "Greenhouse, Lever, Ashby and SmartRecruiters today. Workday, SAP SuccessFactors and iCIMS are planned for 2027. You can connect other systems with the REST API and webhooks."
      },
      {
            "question": "Do integrations cost extra?",
            "answer": "ATS, calendar and Slack integrations are included in Growth and Enterprise. SSO, SCIM and the API are included in Enterprise."
      }
]}
      />
    </>
  );
};

export default Integrations;
