import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const inputDir = "assets/img"; // Directory containing your original images
const outputDir = "assets/img/webp"; // Directory to save WebP images

(async () => {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

      try {
        await sharp(inputPath).toFormat("webp").toFile(outputPath);
        console.log(`Converted ${file} to WebP format.`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  } catch (err) {
    console.error("Error processing images:", err);
  }
})();
