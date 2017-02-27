import axios from 'axios';
import { geolocationKey } from '../../.env';

export const getGeolocation = () => axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${geolocationKey}`);
