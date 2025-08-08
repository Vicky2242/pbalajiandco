import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ✅ Await params before using its properties
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src={service.imageUrl}
            alt={`${service.name} background`}
            fill
            className="object-cover"
            data-ai-hint={service.aiHint}
          />
          <div className="container px-4 md:px-6 relative z-20 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <service.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                {service.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                Detailed Overview
              </h2>
              <div className="mt-4 text-lg text-muted-foreground prose-lg">
                {typeof service.detailedDescription === "string" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: service.detailedDescription,
                    }}
                  />
                ) : (
                  <>
                    <p>{service.detailedDescription.intro}</p>
                    {service.detailedDescription.sections.map(
                      (section, index) => (
                        <div key={index} className="mt-6">
                          <h4 className="font-bold text-xl mt-4 mb-2">
                            {section.title}
                          </h4>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}