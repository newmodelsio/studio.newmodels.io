import type { Metadata } from "next";
import "./globals.css";
import DistortionEffect from "./compoments/DistortionEffect";


export const metadata: Metadata = {
  title: "NEW MODELS STUDIO",
  description: "NEW MODELS STUDIO, LED BY CAROLINE BUSTA & @LILINTERNET, SPECIALIZES IN ANALYZING & COMMUNICATING THE EVOLUTION OF NETWORKED MEDIA. KNOWN FOR THEIR INFLUENTIAL TEXTS AND LECTURES, THEY PROVIDE CREATIVE CONSULTING, NARRATIVE STRATEGY, AND COPYWRITING FOR AN INTERNATIONAL LIST OF ARTISTS, INSTITUTIONS, AND BRANDS. THEY ARE CO-FOUNDERS OF THE AUDIO MAGAZINE & COMMUNITY NEWMODELS.IO",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <DistortionEffect />
        {children}
      </body>
    </html>
  );
}
