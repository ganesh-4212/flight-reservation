interface Flights {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  airline: string;
  availableSeats: number;
  price: number;
}
interface FlightSearchState {
  flights: Flights[];
  loading: boolean;
}

interface Filters {
  source: string;
  destination: string;
  seats: number;
  airlines: string | string[];
  priceMin: string;
  priceMax: string;
}

interface Action {
  type: string;
  payload?: any;
  meta?: any;
}

interface StoreState {
  flightSearch: FlightSearchState;
}