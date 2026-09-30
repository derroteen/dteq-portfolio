import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />

      <section id="work" className="px-6 md:px-16">
        <p className="font-mono text-blue text-xs tracking-[0.3em] uppercase pt-20">
          Software & Web Projects
        </p>

        <CaseStudy
          index="01"
          title="Elite Kahoya Brothers — Members Portal"
          stampLabel="Delivered"
          stampTone="teal"
          before="The group was managing member records and loan tracking across paper and Excel sheets — hard to keep in sync, easy to lose history."
          built="A members portal with per-loan balance tracking, a digital passbook with brought-forward balances handled automatically, weekly sheet navigation, and secure member logins. From what I've seen since deployment, it's cut down the manual reconciliation work significantly."
          stack="Next.js, Supabase, deployed on Vercel with a custom domain"
          images={[
            "/images/ekb-hero.png",
            "/images/ekb-dashboard.png",
            "/images/ekb-weekly.png",
            "/images/ekb-about.png",
            "/images/ekb-services.png",
          ]}
          url="https://elitekahoyabrothers.com"
          linkLabel="View live site"
        />

        <CaseStudy
          index="02"
          title="Ugenya Association Eldoret — Member & Contribution Management"
          stampLabel="Delivered"
          stampTone="teal"
          before="The association tracked member contributions on paper across its branches, which made it hard to consolidate records or verify totals."
          built="A multi-branch portal where members log in and see their own contribution history, admins manage records through role-controlled access, and contribution sheets auto-calculate totals. It also generates monthly PDF reports for committee meetings."
          stack="Next.js, Supabase"
          images={["/images/uae-hero.png", "/images/uae-trust.png"]}
        />

        <CaseStudy
          index="03"
          title="MVCorner — Campus Marketplace & Study Resources"
          stampLabel="Live"
          stampTone="teal"
          before="Maseno University students relied on scattered WhatsApp groups and word of mouth to buy and sell items or find study materials."
          built="A two-in-one platform. It has a marketplace where students list products and contact buyers directly on WhatsApp or by call. It also has a study resources library organised by school and course, with M-Pesa and card payments through Paystack."
          stack="Next.js, Supabase"
          images={[
            "/images/mvcorner-hero.png",
            "/images/mvcorner-buysell.png",
            "/images/mvcorner-search.png",
            "/images/mvcorner-pdf-preview.png",
          ]}
          url="https://mvcorner.co.ke"
          linkLabel="Visit live site"
        />

        <CaseStudy
          index="04"
          title="Stocki360 — Inventory Management for Kenyan SMEs"
          stampLabel="Ready for Clients"
          stampTone="teal"
          before="Small businesses often track stock by hand or in spreadsheets, so overselling and missed restocking go unnoticed."
          built="A multi-business inventory system. It covers products with several barcodes (unit and bulk) scanned by USB scanner or phone camera, plus sales, purchases, suppliers and categories. Negative stock is blocked, every stock movement is logged with who made it, and each business's data is kept separate. Owners can invite a team with roles: admin, storekeeper and cashier. Complete and available to onboard its first businesses."
          stack="Next.js, Supabase"
          images={["/images/stocki360-landing.png"]}
        />

        <CaseStudy
          index="05"
          title="Spend Monitor — M-Pesa Budget Alerts (Personal Project)"
          stampLabel="Personal Project"
          stampTone="blue"
          before="Keeping to a budget meant scrolling through M-Pesa messages and adding up the day's spending by hand."
          built="An Android app that reads M-Pesa transaction messages, totals what you spend each day, and alerts you when you pass your budget. The message parser was tested against a large set of real transactions."
          stack="Expo (React Native), TypeScript, SQLite"
        />

        <CaseStudy
          index="06"
          title="Maseno Swift — Hyper-Local Campus Delivery"
          stampLabel="In Development"
          stampTone="blue"
          before="No dedicated delivery option existed for Maseno University students and hostels — everything ran informally."
          built="A campus delivery app with a runner financial dashboard, full Paystack checkout, M-Pesa STK push (sandbox-tested), and geofencing to specific hostels. Built and functional, not yet launched publicly while I focus on CampusVault."
          stack="React, Vite, Fastify, Prisma, Supabase"
        />
      </section>

      <About />
      <TechStack />
      <Contact />
    </main>
  );
}
