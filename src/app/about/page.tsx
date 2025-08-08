import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Award, CheckCircle, Shield, Users } from "lucide-react";

const keyAchievements = [
    { label: "Established", value: "2016" },
    { label: "FRN", value: "016394S" },
    { label: "Membership", value: "236724" },
    { label: "Specialization", value: "Multi-sector" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src="/image-1.jpg"
            alt="About us background"
            fill
            className="object-cover"
            data-ai-hint="office background"
          />
          <div className="container px-4 md:px-6 relative z-20 text-center text-white">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-primary" />
                </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                About P. Balaji & Co.
              </h1>
              <p className="mt-4 text-xl text-primary-foreground/80">Your Trusted Partner in Financial Excellence!</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground">
                    Established in 2016, we have built a reputation for excellence in chartered accountancy services, serving diverse clients with integrity, expertise, and innovation.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                           <Award className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>Professional Excellence</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Committed to the highest standards of technical knowledge in Foreign Exchange Laws, Income Tax, and Corporate Laws.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                           <Users className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>Diverse Clientele</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                           Serving private companies, government organizations, NGOs, and international clients with specialized expertise.
                        </p>
                    </CardContent>
                </Card>
                 <Card className="text-center">
                    <CardHeader className="items-center">
                        <div className="p-3 bg-primary/10 rounded-full">
                           <Shield className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>Complete Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                           One-stop shop covering all aspects of operations - from audit and compliance to business registration and advisory.
                        </p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-12 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">Our Mission</h2>
                        <p className="text-muted-foreground mb-6">
                            To provide comprehensive financial and regulatory solutions to our clients, ensuring their compliance with relevant laws and regulations while optimizing their financial operations. We strive to be the most trusted CA firm in Chennai and beyond.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span>Integrity in all our dealings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span>Excellence in service delivery</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span>Innovation in our approach</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <span>Client-centric solutions</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="/ser.png"
                            alt="Our Mission"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="team working"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
