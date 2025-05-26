export function getIcon(weatherCode) {
  const iconMap = {
    Clear: "https://cdn-icons-png.flaticon.com/128/8030/8030067.png",
    Clouds: "https://cdn-icons-png.flaticon.com/128/4814/4814293.png",
    Thunderstorm: "https://cdn-icons-png.flaticon.com/128/4724/4724103.png",
    Tornado: "https://cdn-icons-png.flaticon.com/128/8984/8984259.png",
    Rain: "https://cdn-icons-png.flaticon.com/128/4724/4724094.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/128/1809/1809557.png",
    Snow: "https://cdn-icons-png.flaticon.com/128/13496/13496459.png",
    Mist: "https://cdn-icons-png.flaticon.com/128/17798/17798772.png",
    Haze: "https://cdn-icons-png.flaticon.com/128/17798/17798772.png",
    Fog: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
    Smoke: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
    Dust: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
    Ash: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
    Squall: "https://cdn-icons-png.flaticon.com/128/3750/3750506.png",
  };

  return (
    iconMap[weatherCode] ||
    "https://cdn-icons-png.flaticon.com/128/4814/4814489.png"
  );
}
