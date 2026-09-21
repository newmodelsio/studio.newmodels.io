import type { Metadata } from "next";
import "./globals.css";
import DistortionEffect from "./compoments/DistortionEffect";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NEW MODELS STUDIO",
  description: "NEW MODELS STUDIO, LED BY CAROLINE BUSTA & @LILINTERNET, SPECIALIZES IN ANALYZING & COMMUNICATING THE EVOLUTION OF NETWORKED MEDIA. KNOWN FOR THEIR INFLUENTIAL TEXTS AND LECTURES, THEY PROVIDE CREATIVE CONSULTING, NARRATIVE STRATEGY, AND COPYWRITING FOR AN INTERNATIONAL LIST OF ARTISTS, INSTITUTIONS, AND BRANDS. THEY ARE CO-FOUNDERS OF THE AUDIO MAGAZINE & COMMUNITY NEWMODELS.IO",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <DistortionEffect />
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-F5JDCZV673`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'analytics_storage': 'granted',
              'wait_for_update': 500,
            });
            gtag('js', new Date());
            gtag('config', 'G-F5JDCZV673');
        `}
        </Script>
      </body>
    </html>
  );
}
