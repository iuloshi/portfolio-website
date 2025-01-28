export default function(eleventyConfig) {
	// Input directory: src 
	// Output directory: _site
	// Copies css & images from input to output directory

	eleventyConfig.addPassthroughCopy({ "src/css": "css" });
	eleventyConfig.addWatchTarget("./src/css/"); // hot reloads local server after CSS updates
	eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  };