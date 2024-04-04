const { readdirSync, cpSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');

const logoDir = join(__dirname, 'logo');
const outputDir = join(__dirname, 'public');

const files = readdirSync(logoDir).filter((file) => file.endsWith('.svg'));

const sizes = [192, 512];

const inkscape = process.platform === 'darwin' ? '/Applications/Inkscape.app/Contents/MacOS/inkscape' : 'inkscape';

for (const file of files) {
  const inputPath = join(logoDir, file);
  const suffix = file.replace('.svg', '').replace('logo-', '').replace('logo', '');

  for (const size of sizes) {
    const outputFile = `logo${suffix ? '-' + suffix : ''}-${size}.png`;
    const outputPath = join(outputDir, outputFile);

    const command = `${inkscape} --export-background-opacity=0  --export-width=${size} --export-type=png --export-filename=${outputPath} ${inputPath}`;

    console.log(`Generating ${outputFile}...`);
    execSync(command);
  }
}

console.log('Copying logo-circle-512.png to src/images/logo.png...');
cpSync(join(outputDir, 'logo-circle-512.png'), join(__dirname, 'src/images', 'logo.png'));
