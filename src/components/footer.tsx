import { Twitter, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/CA.jpg" width={60} height={60} alt="PBalaji&Co logo" data-ai-hint="company logo" />
              <span className="text-xl font-bold font-headline">P Balaji & Co.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in financial excellence and growth.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Useful Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="https://incometaxindia.gov.in/" target="_blank" className="text-muted-foreground hover:text-primary">Income Tax Dept.</Link></li>
              <li><Link href="https://www.cbic.gov.in/" target="_blank" className="text-muted-foreground hover:text-primary">Central Board of Excise & Customs.</Link></li>
              <li><Link href="https://www.incometax.gov.in/iec/foportal/" target="_blank" className="text-muted-foreground hover:text-primary">Tax Information Network.</Link></li>
              <li><Link href="https://www.mca.gov.in/content/mca/global/en/home.html" target="_blank" className="text-muted-foreground hover:text-primary">Ministry of Company Affairs.</Link></li>
              <li><Link href="https://www.epfindia.gov.in/site_en/index.php" target="_blank" className="text-muted-foreground hover:text-primary">Employees Provident Fund.</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>No. 125, PH Road,</li>
              <li>Maduravoyal, Chennai - 600 095.</li>
              <li className="pt-2"><a href="mailto:contact@ascend.com" className="hover:text-primary">pbalaji&co@gmail.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">9551124463</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* <Link href="/" target="_self" className="text-muted-foreground hover:text-primary"><Twitter /></Link> */}
              <Link href="https://www.linkedin.com/in/balaji-p-415338323/?trk=opento_sprofile_topcard" target="_blank" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              <Link href="https://www.facebook.com/Balaji.CMA" target="_blank" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} <Link href="/" className="font-semibold text-primary">P Balaji & Co.</Link> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}