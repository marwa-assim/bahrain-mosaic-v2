export const landmarks = Array.from({ length: 56 }, (_, i) => ({
    id: i + 1,
    name: `Landmark ${i + 1}`,
    description: `This is a placeholder for Landmark ${i + 1}.`,
    image: `/bahrain-mosaic-app/tiles/tile_${i + 1}.png`

  }));
  