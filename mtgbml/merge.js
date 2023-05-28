const fs = require('fs');

// Array of file paths to merge
const filesToMerge = ['mother.js', 'baby.js', 'dna.js', 'generation.js', 'main.js'];

// Function to merge files
function mergeFiles() {
  const mergedContent = filesToMerge.map(filePath => fs.readFileSync(filePath, 'utf8')).join('\n');

  fs.writeFileSync('mtgbml.js', mergedContent);
}

// Call the mergeFiles function
mergeFiles();
