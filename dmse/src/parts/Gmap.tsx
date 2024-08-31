
import {Map,GoogleApiWrapper} from 'google-map-react';
import PropTypes from 'prop-types'

const Gmap = props => {
  return (
 <Map
 google = {props.google}
 style = {{width: "100%", height:"100%" }}
zoom = {10}
initialcenter = {

    {
        lat: 28.704060,
        lng:77.102493
    }
}
 />
  )
}

Gmap.propTypes = {}

export default  GoogleApiWrapper ({
apiKey : "AIzaSyAomU7ksoiCrqaLlLfRA1_X3_WRlQAmlkk"

})(Gmap);