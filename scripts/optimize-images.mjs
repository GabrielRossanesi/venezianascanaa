import sharp from 'sharp'

const images = [
  {
    source: 'assets/source/hero-veneziana.png',
    output: 'public/images/hero-veneziana.webp',
    quality: 82,
  },
  {
    source: 'assets/source/manutencao-veneziana.png',
    output: 'public/images/manutencao-veneziana.webp',
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
