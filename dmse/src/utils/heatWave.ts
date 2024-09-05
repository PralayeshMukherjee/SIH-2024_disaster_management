export const calculateHeatIndex = (temperature: number, humidity: number): number => {
    return (
      -42.379 +
      2.04901523 * temperature +
      10.14333127 * humidity -
      0.22475541 * temperature * humidity -
      0.00683783 * temperature * temperature -
      0.05481717 * humidity * humidity +
      0.00122874 * temperature * temperature * humidity +
      0.00085282 * temperature * humidity * humidity -
      0.00000199 * temperature * temperature * humidity * humidity
    );
  };
  
  export const calculateWindChillEffect = (heatIndex: number, windSpeed: number): number => {
    const windFactor = windSpeed > 10 ? 0.7 : 0.9;
    return -heatIndex * (windSpeed / 100) * windFactor;
  };
  
  export const calculateUrbanHeatEffect = (heatIndex: number, urbanDensity: number): number => {
    const densityFactor = urbanDensity > 1000 ? 1.05 : 1.02; 
    return heatIndex * (urbanDensity / 10000) * densityFactor;
  };
  
  export const getHeatwaveDescription = (heatIndex: number): string => {
    if (heatIndex >= 130) return 'Extreme Danger: Heatstroke is imminent';
    if (heatIndex >= 105) return 'Danger: Heat cramps and heat exhaustion likely';
    if (heatIndex >= 90) return 'Extreme Caution: Heat cramps possible';
    return 'Caution: Fatigue possible with prolonged exposure';
  };
  