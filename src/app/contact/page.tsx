import { VCard } from "./vcard";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 448 512"
      {...props}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
       <section className="relative w-full py-20 md:py-28 lg:py-20 bg-card">
          {/* <div className="absolute inset-0 bg-black/25 z-10" />
          <Image
            src="https://placehold.co/1200x800.png"
            alt="Contact us background"
            fill
            className="object-cover"
            data-ai-hint="contact center"
          /> */}
          <div className="container px-4 md:px-6 relative z-20 text-center text-gray-600">
            <div className="max-w-3xl mx-auto">
                <MessageCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Get In Touch
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Ready to take your business to the next level? Contact us today for a consultation and discover how we can help you achieve your financial goals.
              </p>
            </div>
          </div>
        </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.557070881157!2d80.16867529999999!3d13.0638416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526143a62a7a61%3A0x3c074c74f92e6506!2s125%2C%20Poonamallee%20High%20Rd%2C%20Anna%20Nagar%2C%20Pallavan%20Nagar%2C%20Maduravoyal%2C%20Chennai%2C%20Tamil%20Nadu%20600095!5e0!3m2!1sen!2sin!4v1754628741420!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col items-center md:items-start gap-8">
            <VCard />
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-bold mb-6 font-headline">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Office Address</h3>
                            <p className="text-muted-foreground">No.125, P H Road</p>
                            <p className="text-muted-foreground">Maduravoyal, Chennai - 600 095</p>
                            <p className="text-muted-foreground">Tamil Nadu, India</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Phone Numbers</h3>
                            <p className="text-muted-foreground">+91 95511 24463</p>
                            <p className="text-muted-foreground">+91 91235 46660</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Email Addresses</h3>
                            <p className="text-muted-foreground">pbalajiandco@gmail.com</p>
                            <p className="text-muted-foreground">cabalajip@gmail.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Business Hours</h3>
                            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
                            <p className="text-muted-foreground">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                 <Button asChild className="mt-8 bg-green-500 hover:bg-green-600 text-white">
                    <a href="https://wa.me/9551124463" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                    </a>
                </Button>
            </div>
            <div>
                 <Card>
                    <CardContent className="p-8">
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
