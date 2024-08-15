<template>
  <div :class="$style.flightCard">
      <div :class="$style.flightHeader">
        <div :class="$style.flightClass">{{ item.TravelClass }} {{ item.IsDirect ? 'One-Way' : 'Connection'}}</div>
        <div :class="$style.flightTime">{{ date }}</div>
      </div>
      <div :class="$style.flightDetails">
        <div :class="$style.flightLocation">
          <div :class="$style.city">{{ item.OriginCityName }}</div>
          <div :class="$style.airportCode">{{ item.Origin }}</div>
        </div>
        <div :class="$style.flightIcon">→</div>
        <div :class="$style.flightLocation">
          <div :class="$style.city">{{ item.DestinationCityName }}</div>
          <div :class="$style.airportCode">{{ item.Destination }}</div>
        </div>
      </div>
      <div :class="$style.flightTimes">
        <div :class="$style.timeInfo">
          <div :class="$style.label">Departs</div>
          <div :class="$style.time">{{ item.DepartureTime }}</div>
        </div>
        <div :class="$style.timeInfo">
          <div :class="$style.label">Arrives</div>
          <div :class="$style.time">{{ item.ArrivalTime }}</div>
        </div>
      </div>
      <div :class="$style.priceInfo">
        <div :class="$style.retailPrice">
          <div :class="$style.label">Retail</div>
          <div :class="$style.originalPrice">{{ item.Cost }}</div>
        </div>
        <div :class="$style.discountPrice">
          <!-- <div :class="$style.discount">73% OFF</div> -->
          <div :class="$style.discountedPrice">{{ item.Cost }}</div>
        </div>
      </div>
      <div :class="$style.btnContainer">
        <button :class="$style.detailsButton">See details</button>
        <!-- <div :class="$style.seatsLeft">2 seats left</div> -->
      </div>
    </div>
</template>

<script setup lang="ts">
import { FlightData } from '@store/flighDeals/IFlightDeals';

defineProps<{
  item: FlightData
  date: string
}>()
</script>

<style module>
.flightCard {
  width: 19%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.flightHeader {
  background-color: #081437;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

.flightClass {
  font-size: 18px;
}

.flightTime {
  margin-top: 5px;
  font-size: 14px;
}

.flightDetails {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.flightLocation {
  text-align: center;
}

.city {
  font-size: 12px;
}

.airportCode {
  font-size: 20px;
  font-weight: bold;
  color: #00224f;
}

.flightIcon {
  font-size: 20px;
  align-self: center;
}

.flightTimes {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.timeInfo {
  margin-bottom: 15px;
}

.label {
  font-size: 14px;
}

.time {
  font-size: 14px;
  color: #777;
}

.priceInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

.retailPrice .originalPrice {
  text-decoration: line-through;
  color: #777;
}

.discountPrice .discount {
  background-color: #ff6b6b;
  color: white;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
}

.discountPrice .discountedPrice {
  font-size: 18px;
  color: #00224f;
  font-weight: bold;
}

.btnContainer{
  padding: 20px;
}

.detailsButton {
  background-color: #FF943D;
  color: white;
  border: none;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
}

.detailsButton:hover {
  background-color: #f07612;
}

.seatsLeft {
  text-align: center;
  padding: 5px;
  font-size: 12px;
  color: #333;
}
</style>