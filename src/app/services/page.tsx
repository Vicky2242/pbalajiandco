import Link from 'next/link';
import {services} from '@/lib/services';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ArrowRight, Briefcase} from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src="/image-3.jpg"
            alt="Services background"
            fill
            className="object-cover"
            data-ai-hint="business services"
          />
          <div className="container px-4 md:px-6 relative z-20 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <Briefcase className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Our Services
              </h1>
              <p className="mt-6 text-xl text-primary-foreground/80">
                We offer a comprehensive range of financial and advisory services to meet the needs of our diverse clients.
              </p>
            </div>
          </div>
        </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <Card key={service.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <service.icon className="w-10 h-10 text-primary" />
                  <CardTitle>{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <Button asChild variant="ghost" className="mt-4 p-0 h-auto justify-start text-primary hover:text-primary/80 self-start">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
