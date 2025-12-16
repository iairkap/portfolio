const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "../public");

// Imágenes críticas a optimizar (PERF-002A)
const criticalImages = [
  {
    input: "Cyberpunk-Poster-Photo-Effect.png",
    output: "Cyberpunk-Poster-Photo-Effect.webp",
    quality: 80,
    maxWidth: 1200,
  },
  {
    input: "Screenshot 2023-07-14 at 18.34 1.png",
    output: "screenshot-portfolio.webp",
    quality: 80,
    maxWidth: 1200,
  },
  {
    input: "thumbnail.png",
    output: "thumbnail.webp",
    quality: 80,
    maxWidth: 800,
  },
  {
    input: "montaje.jpeg",
    output: "montaje.webp",
    quality: 80,
    maxWidth: 1200,
  },
  {
    input: "linkedin pub.png",
    output: "linkedin-pub.webp",
    quality: 80,
    maxWidth: 1200,
  },
  {
    input: "talent-tech-hub.png",
    output: "talent-tech-hub.webp",
    quality: 80,
    maxWidth: 1200,
  },
];

async function optimizeImage(config) {
  const inputPath = path.join(publicDir, config.input);
  const outputPath = path.join(publicDir, config.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skip: ${config.input} (not found)`);
    return;
  }

  try {
    const inputStats = fs.statSync(inputPath);
    const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

    console.log(`🔄 Converting: ${config.input} (${inputSizeMB}MB)...`);

    await sharp(inputPath)
      .resize(config.maxWidth, null, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(
      `✅ ${config.output}: ${outputSizeMB}MB (-${savings}% savings)`
    );
  } catch (error) {
    console.error(`❌ Error converting ${config.input}:`, error.message);
  }
}

async function main() {
  console.log("🚀 Starting image optimization (PERF-002A)...\n");

  for (const imageConfig of criticalImages) {
    await optimizeImage(imageConfig);
  }

  console.log("\n✅ Image optimization complete!");
  console.log("⚠️  Remember to update image references in components");
}

main().catch(console.error);
