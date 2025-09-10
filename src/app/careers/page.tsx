
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const jobOpenings = [
    {
        title: "CA Articleship Student",
        description: "We are looking for dedicated and motivated students to join our CA Articleship program. Gain hands-on experience in auditing, taxation, and corporate finance under the guidance of experienced professionals.",
        responsibilities: [
            "Assisting in statutory and tax audits.",
            "Preparing tax returns and financial statements.",
            "Conducting research on tax and corporate law.",
            "Liaising with clients and regulatory authorities."
        ]
    },
    {
        title: "Paid Assistant",
        description: "Join our team as a Paid Assistant and support our firm's daily operations. This role is ideal for individuals looking to build a career in accounting and finance.",
        responsibilities: [
            "Handling bookkeeping and accounting tasks.",
            "Assisting with TDS and GST compliance.",
            "Managing documentation and filing.",
            "Providing administrative support to the team."
        ]
    }
];


export default function CareersPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src="/career_1.png"
            alt="Careers background"
            fill
            className="object-cover"
            data-ai-hint="office team working"
          />
          <div className="container px-4 md:px-6 relative z-20 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Briefcase className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Join Our Team
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80">
                We are always looking for talented individuals to join our growing firm. Explore our current openings below.
              </p>
            </div>
          </div>
        </section>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Current Openings</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Become a part of a dynamic and professional environment where you can grow your skills and make a real impact.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jobOpenings.map(job => (
            <Card key={job.title} className="flex flex-col">
              <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.responsibilities.map(resp => (
                        <li key={resp}>{resp}</li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <p className="text-sm text-muted-foreground">
                  Click 'Apply Now' to send your resume via email. We will connect with you shortly.
                </p>
                 <Button asChild>
                  <a href={`mailto:cabalajip@gmail.com?subject=Application for ${job.title}`}>
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
