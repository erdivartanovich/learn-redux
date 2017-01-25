import {connect} from 'react-redux'
import Discover from '../components/Discover';
import {setVenueCity, setVenueTag, setVenueNearby} from '../actions/discover'
const cities = ['New Delhi', 'Mumbai', 'Goa', 'Talo'];

const mapStateToProps = (state) => {
    return {...state, cities, selectedCity: state.discover.city};
}
const DiscoverVenue = connect(mapStateToProps, null)(Discover)

export default DiscoverVenue
