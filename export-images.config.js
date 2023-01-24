/**
 * @type {import('next-export-optimize-images').Config}
 */
const config = {
  convertFormat: [
    ["png", "webp"],
    ["jpg", "avif"],
  ],
  filenameGenerator: ({ path, name, width, quality, extension }) =>
    `${path}/${width}/${quality}/${name}.${extension}`,
};

module.exports = config;
