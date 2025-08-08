"use client";

import QRCode from "react-qr-code";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function VCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Balaji;P;;;
FN:PBalaji&Co
ORG:PBalaji&Co
TITLE:Chartered Accountant
TEL;TYPE=WORK,VOICE:9551124463
TEL;TYPE=CELL,VOICE:9123546660
EMAIL;TYPE=PREF,INTERNET:pbalaji&co@gmail.com
EMAIL;TYPE=WORK,INTERNET:cabalajip@gmail.com
URL;TYPE=LinkedIn:https://www.linkedin.com/in/pbalaji&co
ADR;TYPE=WORK:;;No. 125, PH Road;Maduravoyal;Chennai;600 095;India
END:VCARD`;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle>Scan to Save Contact</CardTitle>
        <CardDescription>
          Open your camera and point it at the QR code
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center p-6">
        <div className="bg-white p-4 rounded-md">
          <QRCode value={vCardData} size={200} />
        </div>
      </CardContent>
    </Card>
  );
}
