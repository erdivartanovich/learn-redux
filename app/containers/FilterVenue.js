import {connect} from 'react-redux'
import Filter from '../components/Filter';
import {setVenueCity, setVenueTag, setVenueNearby} from '../actions/discover'
const cities = ['New Delhi', 'Mumbai', 'Goa', 'Talo'];
const tags = ['Rock', 'Punk', 'EDM', 'Full House', 'Wicked', 'Monster', 'Awesome'];
const mapStateToProps = (state) => {
    return {...state, cities, selectedCity: state.discover.city, tags};
}
const mapDispatchToProps = (dispatch) => {
    return {
        setVenueCity: (city)=>dispatch(setVenueCity(city)),
        setVenueTag: (tag) => dispatch(setVenueTag(tag)),
        setVenueNearby: (toggle = false) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                dispatch(setVenueNearby(toggle, {latitude, longitude}))
            }, (err) => {
                console.log('We can\'t get location details: ', err.message);
            });
        }
    }
}
const FilterVenue = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterVenue
