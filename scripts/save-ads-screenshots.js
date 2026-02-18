import sharp from "sharp";
import { mkdirSync } from "fs";

const screens = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ads-1-dashboard-Iu2LZcfAJnw2vdkL66Y5DiTWr4TlEq.png",
    output: "public/screens/advertising-management-platform-1.jpg",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ads-2-campaign-management-esBPMnbDFVnm9TPbhP0Cl1QA1KuuW9.png",
    output: "public/screens/advertising-management-platform-2.jpg",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ads-3-automation-rules-T4NMLlOy1Np4UZBGpCjjaKjnKGS7y3.png",
    output: "public/screens/advertising-management-platform-3.jpg",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ads-4-audience-targeting-NKRTDghEtn6kOtx0MYf0JzoWhL6D1O.png",
    output: "public/screens/advertising-management-platform-4.jpg",
  },
];

async function main() {
  mkdirSync("public/screens", { recursive: true });

  for (const screen of screens) {
    console.log(`Fetching ${screen.output}...`);
    const res = await fetch(screen.url);
    const buffer = Buffer.from(await res.arrayBuffer());

    await sharp(buffer)
      .resize(1536, 1024, { fit: "cover" })
      .sharpen({ sigma: 1.2 })
      .jpeg({ quality: 90 })
      .toFile(screen.output);

    console.log(`Saved ${screen.output}`);
  }

  console.log("Done! All 4 ads screenshots saved.");
}

main().catch(console.error);
