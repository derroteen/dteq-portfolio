import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="work" className="px-6 md:px-16">
        <p className="font-mono text-brass text-xs tracking-[0.3em] uppercase pt-20">
          Selected work
        </p>

        <CaseStudy
          index="01"
          title="Ugenya Association Eldoret — Member & Contribution Management"
          stampLabel="Demo — Pending Approval"
          stampTone="red"
          before="A four-branch community association was tracking member contributions on paper across branches, making it hard to consolidate records or verify totals."
          built="A demo of a multi-branch portal where members log in once and see their contributions across branches, admins manage their branch independently, and the system auto-calculates running totals — no manual tallying. Presenting to the committee for approval this week."
          stack="Next.js, Supabase"
          images={["/images/uae-hero.png"]}
        />

        <CaseStudy
          index="02"
          title="Elite Kahoya Brothers — Members Portal"
          stampLabel="Delivered"
          stampTone="green"
          before="The group was managing member records and loan tracking across paper and Excel sheets — hard to keep in sync, easy to lose history."
          built="A members portal with per-loan balance tracking, a digital passbook with brought-forward balances handled automatically, weekly sheet navigation, and secure member logins. From what I've seen since deployment, it's cut down the manual reconciliation work significantly."
          stack="Next.js, Supabase, deployed on Vercel with a custom domain"
          images={[
            "/images/ekb-hero.png",
            "/images/ekb-about.png",
            "/images/ekb-services.png",
          ]}
        />

        <CaseStudy
          index="03"
          title="CampusVault (MVcorner) — Campus Marketplace & Study Resources"
          stampLabel="In Testing"
          stampTone="brass"
          before="Maseno University students relied on scattered WhatsApp groups and word-of-mouth to buy/sell items or find study materials — no central place to look."
          built="A two-in-one platform: a marketplace where students post products and connect directly with buyers via WhatsApp, plus a notes and study resource sharing section. Currently in testing ahead of public launch."
          stack="Next.js, Supabase"
          images={[
            "/images/mvcorner-hero.png",
            "/images/mvcorner-resources.png",
            "/images/mvcorner-marketplace.png",
          ]}
        />

        <CaseStudy
          index="04"
          title="Maseno Swift — Hyper-Local Campus Delivery"
          stampLabel="In Development"
          stampTone="brass"
          before="No dedicated delivery option existed for Maseno University students and hostels — everything ran informally."
          built="A campus delivery app with a runner financial dashboard, full Paystack checkout, M-Pesa STK push (sandbox-tested), and geofencing to specific hostels. Built and functional, not yet launched publicly while I focus on CampusVault."
          stack="React, Vite, Fastify, Prisma, Supabase"
        />
      </section>

      <About />
      <Contact />
    </main>
  );
}
