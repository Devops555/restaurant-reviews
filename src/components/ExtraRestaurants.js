import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import "./ExtraRestaurants.css";
import restaurant_marker from "../images/restaurant-marker.png";

function ExtraRestaurants(props) {
  const restaurantPlaces = props.places;
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div>
      {restaurantPlaces.map(place => (
        <Marker
          key={place.venue.id}
          latitude={place.venue.location.lat}
          longitude={place.venue.location.lng}
        >
          <button
            className="marker"
            onClick={e => {
              e.preventDefault();
              setSelectedRestaurant(place);
            }}
          >
            <img src={restaurant_marker} alt="restaurant marker" />
          </button>
        </Marker>
      ))}
      {selectedRestaurant ? (
        <Popup
          latitude={selectedRestaurant.venue.location.lat}
          longitude={selectedRestaurant.venue.location.lng}
          onClose={() => {
            setSelectedRestaurant(null);
          }}
        >
          <div>
            <h3 className="restaurant-title">
              {selectedRestaurant.venue.name}
            </h3>
            <p>Address: {selectedRestaurant.venue.location.address}</p>
            <img src={selectedRestaurant.venue.photos} alt="pic" />
          </div>
        </Popup>
      ) : null}
    </div>
  );
}

export default ExtraRestaurants;

/*

// to access: venue.location.lat/lng
//const endPoint = 'https://api.foursquare.com/v2/venues/explore'
// old api keys
const CLIENT_ID = 'CDQOSZY5CJHZS40WUJBMVMRONYYQKFRRSCGXGUDBGEZO0VAK'
const CLIENT_SECRET = 'H1Q10JL14ZFLJGONGPOQHPV03AFKRZZHNU3QRF3MUKE1OOL2'
// new api keys
const CLIENT_ID = "SSC5IB0OXGTUVE2BZFOOXQKVDXSSYOKDVVHL4QZPLHB5UQKD";
const CLIENT_SECRET = "DLWMODCEGNV0VXRDGR010N5F1WBWPNNTNIBH0S0PFG4Q4N2H";

 const END_POINT = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      v: "20180323",
      ll: "30.82253, 30.81908",
      near: "Tanta",
      query: "food"
    };
    axios
      .get(END_POINT + new URLSearchParams(params))
      .then(res => {
        //console.log(res.data.response.groups[0].items)
        setPlaces(res.data.response.groups[0].items);
      })
      .catch(err => {
        console.log("ERROR HAS OCURED" + err);
      });
*/
