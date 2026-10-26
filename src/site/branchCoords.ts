// Map positions for each branch, looked up from the street addresses (OpenStreetMap geocoder).
// Keyed by the town name used in the design's branch list.
export const BRANCH_COORDS: Record<string, [number, number]> = {
  Bedminster: [40.67703, -74.64857],
  Brick: [40.0361, -74.14309],
  Califon: [40.72609, -74.8429],
  "East Windsor": [40.28994, -74.57452],
  Ewing: [40.26639, -74.80104],
  Freehold: [40.24755, -74.27455],
  Hillsborough: [40.525, -74.62957],
  "Kendall Park": [40.42028, -74.57818],
  Manahawkin: [39.69507, -74.25942],
  Matawan: [40.40935, -74.23684],
  "Mountain Lakes": [40.88256, -74.45524],
  Mountainside: [40.66638, -74.34945],
  "Red Bank": [40.35353, -74.07523],
  Sicklerville: [39.74774, -74.99831],
  "Wall Township": [40.20184, -74.12255],
  Washington: [40.75295, -74.97568],
  "West Orange": [40.77571, -74.23976],
  Woodbridge: [40.55086, -74.28893],
  "Brooklyn, NY": [40.69203, -73.98707],
  "Staten Island, NY": [40.55007, -74.15056],
};
