import sharp from 'sharp'

const images = [
  {
    source: 'assets/source/hero-venezianas.png',
    output: 'public/images/hero-venezianas.webp',
    quality: 82,
  },
  {
    source: 'assets/source/ajuste-mecanismo-veneziana.png',
    output: 'public/images/ajuste-mecanismo-veneziana.webp',
    quality: 78,
  },
]

await Promise.all(
  images.map(({ source, output, quality }) =>
    sharp(source)
      .webp({ quality, smartSubsample: true })
      .toFile(output),
  ),
)

console.log('Imagens otimizadas em public/images/')
