interface Segment {
  Origin: string;
  Destination: string;
  DepartureTime: string;
  ArrivalTime: string;
  FlightNumber: string;
}

interface Leg {
  Segments: Segment[];
}

export interface FlightData {
  TravelClass: string;
  Origin: string;
  OriginCityName: string;
  Destination: string;
  DestinationCityName: string;
  IsDirect: boolean;
  DepartureTime: string;
  ArrivalTime: string;
  FlightNumbers: string[];
  BaggageAmount: string;
  BaggageType: string;
  Cost: string;
  CostFloat: number;
  PurchasingId: string;
  connections: string[];
  Legs: Leg[];
  CostBelowAverage: number;
}

export interface DataItem {
  [key: string]: FlightData;
}

export interface FlightDataResponse {
  data: DataItem[];
}

export interface IBdPayload {
  city: string
}