export type VegetationType = 'Grassland' | 'Forest' | 'Shrubland';

interface FireSpreadParams {
  windSpeed: number;
  vegetationType: VegetationType;
  humidity: number;
}

export const estimateFireSpread = ({ windSpeed, vegetationType, humidity }: FireSpreadParams): number => {
  let baseRate = 0;

  switch (vegetationType) {
    case 'Grassland':
      baseRate = windSpeed * 0.3 + (100 - humidity) * 0.2;
      break;
    case 'Forest':
      baseRate = windSpeed * 0.5 + (100 - humidity) * 0.4;
      break;
    case 'Shrubland':
      baseRate = windSpeed * 0.4 + (100 - humidity) * 0.3;
      break;
  }

  return baseRate;
};