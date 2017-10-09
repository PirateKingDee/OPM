import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";

export default class YelpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {term: null, location:null, offset: 0};
  }

  componentWillMount() {
    Meteor.call('removeYelp');
  }

  render() {

    if(this.props.loading){
      return <div  className="container bodyContainer">loading</div>
    }
    else{
      let {places} = this.props;
      let search = () => {
        Meteor.call('removeYelp');
        this.setState({term: this.refs.term.value, 'location': this.refs.location.value}, function(){
          if( this.state.term != null && this.state.location != null){
            Meteor.call('addYelp', this.state.term, this.state.location, this.state.offset);
            this.setState({offset:this.state.offset+20});
          }
        });

      }
      let loadMore = () => {
          Meteor.call('addYelp', this.state.term, this.state.location, this.state.offset);
          this.setState({offset:this.state.offset+20});
      }
      let placesList;
      if(places){
        placesList = places.map(function(place,i){
          // return <a href={place.url} key={i}><h6 key={i}>{i+1}. {place.name}    {place.price}</h6></a>
          console.log('location', place.coordinates);
          return <Marker
            position={{lat:place.coordinates.latitude, lng:place.coordinates.longitude}}
          />
        })
      }
      else{
        placesList = () => {
          return<div></div>
        }
      }
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 34.0822149, lng: -118.073879 }}
      >
        {placesList}
      </GoogleMap>
    ));

      return (
        <div className="container bodyContainer">
          <h1>Yelp</h1>
          <label>Search</label>
          <input ref="term" type="text" />
          <label>Location</label>
          <input ref="location" type="text"  />
          <button onClick={search} className="btn btn-primary">search</button>
          {/* {placesList} */}
          <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }}></div>}
          containerElement={<div style={{ height: `400px` }}></div>}
          mapElement={<div style={{ height: `100%` }}></div>}
        />
          <button onClick={loadMore}>Load More</button>
        </div>

      )
    }

  }
}
