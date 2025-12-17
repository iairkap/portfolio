const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, "../public/Cyberpunk-Poster-Photo-Effect.webp");
  const outputPath = path.join(__dirname, "../public/Cyberpunk-Poster-Photo-Effect-optimized.webp");

  console.log("Optimizing hero image...");

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(
      `Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024).toFixed(2)}KB`
    );

    // Optimize with lower quality and max width for web
    await image
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: 70, effort: 6 })
      .toFile(outputPath);

    const newSize = fs.statSync(outputPath).size;
    console.log(`Optimized: ${(newSize / 1024).toFixed(2)}KB`);
    console.log(`Savings: ${((1 - newSize / fs.statSync(inputPath).size) * 100).toFixed(1)}%`);

    // Replace original
    fs.renameSync(outputPath, inputPath);
    console.log("✅ Hero image optimized successfully!");
  } catch (error) {
    console.error("Error optimizing image:", error);
    process.exit(1);
  }
}

optimizeHeroImage();
