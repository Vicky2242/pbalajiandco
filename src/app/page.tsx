
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowRight,
  ClipboardCheck,
  Landmark,
  Globe,
  Calculator,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import Image from 'next/image';
import {services} from '@/lib/services';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const featuredServices = services.slice(0, 6);

const stats = [
    {value: "10+", label: "Years Experience"},
    {value: "500+", label: "Clients Served"},
    {value: "100%", label: "Compliance Rate"},
    {value: "24/7", label: "Support Available"},
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <section className="w-full pt-10 pb-20 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 bg-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <Badge variant="outline" className="py-2 px-4 rounded-full bg-background border-primary/50 text-primary">
                  10+ Years of Professional Excellence
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                  Your Trusted Partner in <span className="text-primary">Financial Excellence</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  P. Balaji & Co. provides comprehensive chartered accountant services with expertise in audit, taxation, compliance, and business advisory. Serving clients across Chennai and beyond with personalized attention and professional excellence.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg">
                      <Link href="/contact">Schedule Consultation <ArrowRight className="ml-2" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-background">
                      <Link href="/services">Explore Services</Link>
                    </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Card className="w-full max-w-lg shadow-xl bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center space-y-6">
                        <Avatar className="h-22 w-24 mx-auto">
                            <AvatarImage src="/CA.jpg" alt="P. Balaji" data-ai-hint="person portrait" />
                            <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                                PB
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-xl">P. Balaji, F.C.A</p>
                            <p className="text-muted-foreground">Proprietor</p>
                            {/* <p className="text-muted-foreground text-sm">M.No: 236724</p> */}
                        </div>
                        <div className="grid grid-cols-2 gap-y-6 pt-4">
                            {stats.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                    <p className="text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              What We Do
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              P Balaji & Co. is a leading firm of chartered accountants, providing
              comprehensive solutions in auditing, taxation, and advisory
              services. Our commitment to excellence and a client-centric
              approach ensures that we deliver tailored strategies to help your
              business thrive. We combine deep industry knowledge with a
              proactive mindset to navigate financial complexities and unlock
              growth opportunities for our clients.
            </p>
          </div>
        </section>

        <section className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4">
              <h2 className="text-3xl font-bold">
                HAVE ANY <span className="text-primary">QUERY</span>
              </h2>
              <Button asChild>
                <Link href="/contact">CLICK HERE</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Our Core Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We offer a comprehensive suite of services to meet all your
                financial needs.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map(service => (
                <Card key={service.slug} className="group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <service.icon className="w-8 h-8 text-primary" />
                      <CardTitle>{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                    <Button
                      asChild
                      variant="ghost"
                      className="mt-4 p-0 h-auto text-primary hover:text-primary/80"
                    >
                      <Link href={`/services/${service.slug}`}>
                        Read more <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
