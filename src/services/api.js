import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://ghibliapi.herokuapp.com';

const api = {
  getFilms(params = null) {
    return axios.get('/films', { params });
  },
  getFilmDetail(id) {
    return axios.get(`/films/${id}`);
  },

  getPeople(params = null) {
    return axios.get('/people', { params });
  },
  getPeopleDetail(id) {
    return axios.get(`/people/${id}`);
  },

  getSpecies(params = null) {
    return axios.get('/species', { params });
  },
  getSpeciesDetail(id) {
    return axios.get(`/species/${id}`);
  },

  getLocations(params = null) {
    return axios.get('/locations', { params });
  },
  getLocationDetail(id) {
    return axios.get(`/locations/${id}`);
  },

  getVehicles(params = null) {
    return axios.get('/vehicles', { params });
  },
  getVehicleDetail(id) {
    return axios.get(`/vehicles/${id}`);
  },
};

Vue.prototype.$api = api;

export default api;
