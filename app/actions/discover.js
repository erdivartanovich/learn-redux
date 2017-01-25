export const SET_VENUE_TAG = 'SET_VENUE_TAG';
export const SET_VENUE_NEARBY = 'SET_VENUE_NEARBY';
export const SET_VENUE_CITY = 'SET_VENUE_CITY';

export function setVenueTag(tag) {
    return {type: SET_VENUE_TAG, tag};
}

export function setVenueNearby(is_nearby, coordinate) {
    return {type: SET_VENUE_NEARBY, is_nearby, coordinate};
}

export function setVenueCity(city) {
    return {type: SET_VENUE_CITY, city};
}
