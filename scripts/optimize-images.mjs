import sharp from 'sharp'

await sharp('assets/source/hero-venezianas.png')
  .webp({ quality: 82, smartSubsample: true })
  .toFile('public/images/hero-venezianas.webp')

console.log('Imagem principal otimizada em public/images/hero-venezianas.webp')
