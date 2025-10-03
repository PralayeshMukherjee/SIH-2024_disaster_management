import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Calendar, Thermometer, Droplets, Wind, ArrowLeft, Cloud, Check, Search } from 'lucide-react';
import axios from 'axios';

interface WeatherData {
  temperature: number | null;
  humidity: number | null;
  wind_speed: number | null;
}

interface LocationSuggestion {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  state?: string;
}

const WeatherStationForecast: React.FC = () => {
  const [locationName, setLocationName] = useState<string>('');
  const [locationSuggestions, setLocationSuggestions] = useState<LocationSuggestion[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationSuggestion | null>(null);
  const [parameters, setParameters] = useState<string[]>(['temperature_2m', 'relative_humidity_2m', 'wind_speed_10m']);
  const [date, setDate] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [geoLoading, setGeoLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Geocoding function to convert location name to coordinates
  const searchLocation = async (query: string) => {
    if (query.length < 3) {
      setLocationSuggestions([]);
      return;
    }

    setGeoLoading(true);
    try {
      const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
        params: {
          name: query,
          count: 5,
          language: 'en',
          format: 'json'
        }
      });

      if (response.data.results) {
        const suggestions = response.data.results.map((location: any) => ({
          name: location.name,
          latitude: location.latitude,
          longitude: location.longitude,
          country: location.country,
          state: location.admin1
        }));
        setLocationSuggestions(suggestions);
      } else {
        setLocationSuggestions([]);
      }
    } catch (err) {
      console.error('Geocoding error:', err);
      setLocationSuggestions([]);
    }
    setGeoLoading(false);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocationName(value);
    searchLocation(value);
  };

  const handleLocationSelect = (location: LocationSuggestion) => {
    setSelectedLocation(location);
    setLocationName(`${location.name}, ${location.state || ''} ${location.country}`.trim());
    setLocationSuggestions([]);
  };

  const handleParameterChange = (parameter: string) => {
    setParameters((prev) => {
      if (prev.includes(parameter)) {
        return prev.filter((param) => param !== parameter);
      } else {
        return [...prev, parameter];
      }
    });
  };

  const fetchWeatherData = async () => {
    if (!selectedLocation || !date || parameters.length === 0) {
      alert('Please select a location, choose a date, and select at least one parameter.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get current date in YYYY-MM-DD format for fallback
      const today = new Date().toISOString().split('T')[0];
      const selectedDate = date || today;

      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          hourly: parameters.join(','),
          start_date: selectedDate,
          end_date: selectedDate,
          timezone: 'auto'
        },
      });

      const data = response.data;

      if (data.hourly) {
        // Get the first available data point (usually for the current hour)
        const hourlyData = data.hourly;
        const timeIndex = 0; // Use first available time slot

        setWeatherData({
          temperature: hourlyData.temperature_2m ? hourlyData.temperature_2m[timeIndex] : null,
          humidity: hourlyData.relative_humidity_2m ? hourlyData.relative_humidity_2m[timeIndex] : null,
          wind_speed: hourlyData.wind_speed_10m ? hourlyData.wind_speed_10m[timeIndex] : null,
        });
        setShowResults(true);
      } else {
        throw new Error('No hourly data available');
      }
    } catch (err: any) {
      console.error('Weather API error:', err);
      setError(`Error fetching weather data: ${err.response?.data?.reason || err.message || 'Please try again.'}`);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setLocationName('');
    setSelectedLocation(null);
    setLocationSuggestions([]);
    setParameters(['temperature_2m', 'relative_humidity_2m', 'wind_speed_10m']);
    setDate('');
    setWeatherData(null);
    setError(null);
    setShowResults(false);
  };

  const handleBackToForm = () => {
    setShowResults(false);
  };

  const getTemperatureColor = (temp: number | null) => {
    if (temp === null) return 'text-slate-400';
    if (temp < 0) return 'text-blue-400';
    if (temp < 10) return 'text-cyan-400';
    if (temp < 20) return 'text-green-400';
    if (temp < 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getWindSpeedColor = (speed: number | null) => {
    if (speed === null) return 'text-slate-400';
    if (speed < 5) return 'text-green-400';
    if (speed < 15) return 'text-yellow-400';
    if (speed < 25) return 'text-orange-400';
    return 'text-red-400';
  };

  const getHumidityColor = (humidity: number | null) => {
    if (humidity === null) return 'text-slate-400';
    if (humidity < 30) return 'text-yellow-400';
    if (humidity < 60) return 'text-green-400';
    if (humidity < 80) return 'text-blue-400';
    return 'text-cyan-400';
  };

  // Custom Checkbox Component
  const CustomCheckbox = ({ 
    checked, 
    onChange, 
    label, 
    icon: Icon 
  }: { 
    checked: boolean; 
    onChange: () => void; 
    label: string; 
    icon: React.ComponentType<any>;
  }) => (
    <div 
      className="flex items-center space-x-2 p-2 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition-colors"
      onClick={onChange}
    >
      <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-colors ${
        checked 
          ? 'bg-cyan-500 border-cyan-500' 
          : 'bg-slate-600 border-slate-500'
      }`}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <Label className="text-slate-300 cursor-pointer flex-1">
        {label}
      </Label>
      <Icon className="h-4 w-4" />
    </div>
  );

  return (
    <Card className=" w-full bg-slate-900 backdrop-blur-lg shadow-2xl rounded-2xl border border-pink-300/20 text-blue-200">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Cloud className="h-6 w-6 text-cyan-400" />
          </div>
          <CardTitle className="text-xl font-bold text-white">
            Weather Forecast
          </CardTitle>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          {showResults ? 'Weather forecast results' : 'Get weather data by location name'}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {!showResults ? (
          // FORM VIEW
          <>
            {/* Location Search */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Search className="h-4 w-4 text-blue-400" />
                Search Location
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  id="location"
                  value={locationName}
                  onChange={handleLocationChange}
                  placeholder="Enter city name (e.g., New York, London, Tokyo)"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                
                {/* Location Suggestions Dropdown */}
                {locationSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {locationSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-slate-600 cursor-pointer border-b border-slate-600 last:border-b-0 transition-colors"
                        onClick={() => handleLocationSelect(location)}
                      >
                        <div className="text-white font-medium">{location.name}</div>
                        <div className="text-slate-300 text-sm">
                          {[location.state, location.country].filter(Boolean).join(', ')}
                        </div>
                        <div className="text-slate-400 text-xs">
                          {location.latitude.toFixed(4)}°N, {location.longitude.toFixed(4)}°W
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Loading indicator for geocoding */}
                {geoLoading && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-500"></div>
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400">
                Start typing a city name and select from suggestions
              </p>
            </div>

            {/* Selected Location Info */}
            {selectedLocation && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm">Selected Location</h4>
                    <p className="text-slate-300 text-sm">
                      {selectedLocation.name}, {selectedLocation.country}
                    </p>
                    <p className="text-slate-400 text-xs">
                      Coordinates: {selectedLocation.latitude.toFixed(4)}°N, {selectedLocation.longitude.toFixed(4)}°W
                    </p>
                  </div>
                  <MapPin className="h-5 w-5 text-green-400" />
                </div>
              </div>
            )}

            {/* Date Picker */}
            <div className="space-y-3">
              <Label htmlFor="date" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-400" />
                Forecast Date
              </Label>
              <div className="relative">
                <Input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  min={new Date().toISOString().split('T')[0]}
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>

            {/* Parameters Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-300">Weather Parameters</Label>
              <div className="grid grid-cols-1 gap-2">
                <CustomCheckbox
                  checked={parameters.includes('temperature_2m')}
                  onChange={() => handleParameterChange('temperature_2m')}
                  label="temperature (2m)"
                  icon={Thermometer}
                />
                <CustomCheckbox
                  checked={parameters.includes('relative_humidity_2m')}
                  onChange={() => handleParameterChange('relative_humidity_2m')}
                  label="humidity (2m)"
                  icon={Droplets}
                />
                <CustomCheckbox
                  checked={parameters.includes('wind_speed_10m')}
                  onChange={() => handleParameterChange('wind_speed_10m')}
                  label="wind speed (10m)"
                  icon={Wind}
                />
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
          </>
        ) : (
          // RESULTS VIEW
          weatherData && selectedLocation && (
            <div className="space-y-6">
              {/* Location and Date Summary */}
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Location & Date</h3>
                    <p className="text-slate-300 text-sm">
                      {selectedLocation.name}, {selectedLocation.country}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {date ? new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      }) : 'Current weather'}
                    </p>
                  </div>
                  <MapPin className="h-8 w-8 text-cyan-400" />
                </div>
              </div>

              {/* Weather Data Cards */}
              <div className="grid grid-cols-1 gap-4">
                {/* Temperature */}
                {weatherData.temperature !== null && (
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-red-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <Thermometer className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">Temperature</h4>
                        <p className={`text-2xl font-bold ${getTemperatureColor(weatherData.temperature)}`}>
                          {weatherData.temperature}°C
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {weatherData.temperature < 0 ? 'Freezing conditions' :
                       weatherData.temperature < 10 ? 'Cold weather' :
                       weatherData.temperature < 20 ? 'Mild conditions' :
                       weatherData.temperature < 30 ? 'Warm weather' : 'Hot conditions'}
                    </p>
                  </div>
                )}

                {/* Humidity */}
                {weatherData.humidity !== null && (
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Droplets className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">Humidity</h4>
                        <p className={`text-2xl font-bold ${getHumidityColor(weatherData.humidity)}`}>
                          {weatherData.humidity}%
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {weatherData.humidity < 30 ? 'Dry conditions' :
                       weatherData.humidity < 60 ? 'Comfortable humidity' :
                       weatherData.humidity < 80 ? 'Humid conditions' : 'Very humid'}
                    </p>
                  </div>
                )}

                {weatherData.wind_speed !== null && (
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-green-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Wind className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">Wind Speed</h4>
                        <p className={`text-2xl font-bold ${getWindSpeedColor(weatherData.wind_speed)}`}>
                          {weatherData.wind_speed} m/s
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {weatherData.wind_speed < 5 ? 'Light breeze' :
                       weatherData.wind_speed < 15 ? 'Moderate wind' :
                       weatherData.wind_speed < 25 ? 'Strong wind' : 'Very strong wind'}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Weather Summary</h4>
                <p className="text-slate-300 text-sm">
                  {weatherData.temperature && weatherData.humidity && weatherData.wind_speed ? 
                    `Conditions in ${selectedLocation.name} are ${weatherData.temperature < 10 ? 'cold' : weatherData.temperature < 25 ? 'moderate' : 'warm'} with ${weatherData.humidity < 40 ? 'low' : weatherData.humidity < 70 ? 'moderate' : 'high'} humidity and ${weatherData.wind_speed < 5 ? 'light' : weatherData.wind_speed < 15 ? 'moderate' : 'strong'} winds.` 
                    : 'Complete weather data not available.'}
                </p>
              </div>
            </div>
          )
        )}
      </CardContent>
      
      <CardFooter className="flex gap-3">
        {!showResults ? (

          <>
            <Button 
              onClick={fetchWeatherData}
              disabled={loading || !selectedLocation}
              className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Cloud className="h-4 w-4 mr-2" />
              {loading ? 'Fetching Data...' : 'Get Forecast'}
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline"
              className="py-3 bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-all duration-300"
            >
              Reset
            </Button>
          </>
        ) : (

          <>
            <Button 
              onClick={handleBackToForm}
              variant="outline"
              className="flex-1 py-3 bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600/50 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Form
            </Button>
            <Button 
              onClick={handleReset}
              className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              New Forecast
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default WeatherStationForecast;