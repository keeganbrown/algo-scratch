// given cities on a map, determine if two cities are connected by roads

const cities = {
  A: ['C', 'D', 'E'],
  B: ['E'],
  C: ['A', 'E'],
  D: ['A', 'E'],
  E: ['A', 'B', 'C', 'D'],
  Z: ['X', 'Y', 'Q'],
  X: ['Z'],
  Y: ['Z'],
  Q: ['Z']
};

function isConnected(startCity, targetCity) {
  const cityNetwork = [startCity];
  const exploreNetwork = (cityList) => {
    cityList.forEach((cityName) => {
      if (!cityNetwork.includes(cityName)) {
        cityNetwork.push(cityName);
        exploreNetwork(cities[cityName]);
      }
    });
  };
  exploreNetwork(cities[startCity]);

  return cityNetwork.includes(targetCity);
}

console.log(isConnected('A', 'B'));
console.log(isConnected('Z', 'X'));
console.log(isConnected('Z', 'A'));
