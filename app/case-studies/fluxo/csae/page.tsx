import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const dynamic = "force-static"
export const revalidate = false

export const metadata = {
  title: "Child Safety Standards (CSAE) | Fluxo — Reptilians",
  description: "Child Safety Standards (CSAE) for Fluxo by Reptilians",
}

export default function FluxoCsaePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">Child Safety Standards (CSAE)</h1>
          <p className="mt-2 text-muted-foreground">Effective date: [DATE] · Last updated: [DATE]</p>
          <p className="mt-4 text-muted-foreground">Contact (CSAE): <a href="mailto:hey@reptilians.band" className="text-accent hover:underline">hey@reptilians.band</a></p>

          <div className="prose prose-neutral dark:prose-invert mt-12 max-w-none">
            <p>
              Reptilians has <strong>zero tolerance</strong> for any content, behavior, or activity involving <strong>child sexual abuse and exploitation (CSAE)</strong>, including <strong>child sexual abuse material (CSAM)</strong>.
            </p>

            <p>
              These standards apply to all Reptilians products, including our mobile applications and websites (the “Services”).
            </p>

            <hr />

            <h2>1) Prohibited content and behavior</h2>
            <p>We strictly prohibit any content or conduct that involves, promotes, depicts, facilitates, or attempts to engage in CSAE/CSAM, including (but not limited to):</p>
            <ul>
              <li>Any <strong>sexual content involving minors</strong> or content that sexualizes a minor in any way</li>
              <li>Any <strong>CSAM</strong> (images, videos, audio, text, or links), including attempted sharing, requests, or instructions to obtain it</li>
              <li><strong>Grooming</strong>, coercion, manipulation, or sexual communication with a minor</li>
              <li><strong>Sextortion</strong> or threats to obtain sexual content or favors from a minor</li>
              <li><strong>Trafficking</strong>, solicitation, or facilitation of exploitation of minors</li>
              <li>Any attempt to <strong>exchange</strong>, <strong>sell</strong>, <strong>distribute</strong>, or <strong>store</strong> CSAM</li>
              <li>Content that provides <strong>instructions</strong> for exploiting minors or evading detection</li>
              <li>Any content that includes <strong>links</strong> to CSAE/CSAM, or directs users to where it can be found</li>
            </ul>

            <hr />

            <h2>2) How to report concerns</h2>
            <p>If you see content or behavior that may involve CSAE/CSAM, please report it immediately.</p>

            <h3>In-app reporting</h3>
            <p>If the relevant app includes a “Report” / “Feedback” feature, use it to submit a report directly from within the app.</p>

            <h3>Email reporting</h3>
            <p>You can also email us at <strong><a href="mailto:hey@reptilians.band" className="text-accent hover:underline">hey@reptilians.band</a></strong> with:</p>
            <ul>
              <li>the name of the app and the screen where you found the issue</li>
              <li>the username/profile (if applicable)</li>
              <li>screenshots or links (do <strong>not</strong> attach or forward illegal content)</li>
              <li>any additional context that can help us investigate quickly</li>
            </ul>
            <p>If you believe a child is in immediate danger, contact your local emergency services.</p>

            <hr />

            <h2>3) Our response and enforcement</h2>
            <p>When we receive a report, we may take actions including:</p>
            <ul>
              <li>removing or restricting access to violating content</li>
              <li>suspending or permanently terminating accounts involved</li>
              <li>preventing repeat offenders from re-registering where feasible</li>
              <li>preserving relevant logs and account information for investigation</li>
              <li>cooperating with law enforcement or relevant authorities <strong>where required by law</strong></li>
            </ul>
            <p>We may act immediately based on credible reports or signals, with or without prior notice to the user.</p>

            <hr />

            <h2>4) No user rights to illegal content</h2>
            <p>Users have <strong>no right</strong> to upload, store, share, or request CSAE/CSAM through our Services. Attempts to do so are a severe violation of our policies and may result in immediate account termination.</p>

            <hr />

            <h2>5) Child safety point of contact</h2>
            <p>For child safety and CSAE-related questions or reports, contact: <strong><a href="mailto:hey@reptilians.band" className="text-accent hover:underline">hey@reptilians.band</a></strong></p>

            <hr />

            <h2>6) Updates to this policy</h2>
            <p>We may update these standards from time to time. The “Last updated” date above reflects the most recent revision. Continued use of the Services after an update indicates acceptance of the updated standards.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
