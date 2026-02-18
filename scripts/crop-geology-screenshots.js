import sharp from "sharp";
import { mkdirSync } from "fs";

const IMAGE_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80fa7e09-34c8-43f1-928d-9782b6be5d6c-O1qPglB8aDahJaZDlhgdyhGIrrj7dN.png";

async function main() {
  mkdirSync("public/screens", { recursive: true });
  console.log("Fetching image...");
  const response = await fetch(IMAGE_URL);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const metadata = await sharp(buffer).metadata();
  const width = metadata.width;
  const height = metadata.height;
  console.log(`Image size: ${width}x${height}`);

  const halfW = Math.floor(width / 2);
  const halfH = Math.floor(height / 2);

  const quadrants = [
    { name: "geology-desktop-application-1", left: 0, top: 0, width: halfW, height: halfH },
    { name: "geology-desktop-application-2", left: halfW, top: 0, width: width - halfW, height: halfH },
    { name: "geology-desktop-application-3", left: 0, top: halfH, width: halfW, height: height - halfH },
    { name: "geology-desktop-application-4", left: halfW, top: halfH, width: width - halfW, height: height - halfH },
  ];

  for (const q of quadrants) {
    const outputPath = `public/screens/${q.name}.jpg`;
    await sharp(buffer)
      .extract({ left: q.left, top: q.top, width: q.width, height: q.height })
      .sharpen({ sigma: 0.8 })
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log(`Saved ${outputPath} (${q.width}x${q.height})`);
  }

  console.log("Done!");
}

main().catch(console.error);
