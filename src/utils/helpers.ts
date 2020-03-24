import data from "../constants/data";
export function filterData(filter: Filters) {
  return data.filter(item => {
    const { airlines, priceMax, priceMin } = filter;
    const sourceFilter =
      item.from.toLowerCase() === filter.source.toLowerCase();
    const destinationFilter =
      item.to.toLowerCase() === filter.destination.toLowerCase();
    const seatsFilter = item.availableSeats >= filter.seats;
    let airlinesFilter = true;
    if (airlines) {
      airlinesFilter = airlines.includes(item.airline);
    }

    let priceFilter = true;
    if (priceMin && priceMax) {
      const priceMinVal = +priceMin;
      const priceMaxVal = +priceMax;
      priceFilter = item.price >= priceMinVal && item.price <= priceMaxVal;
    }

    return (
      sourceFilter &&
      destinationFilter &&
      seatsFilter &&
      airlinesFilter &&
      priceFilter
    );
  });
}
export const delayPromise = (time: number, result: any) =>
  new Promise(resolve => setTimeout(() => resolve(result), time));
