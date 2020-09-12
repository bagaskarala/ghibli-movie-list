import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    people: [],
    species: [],
    locations: [],
    vehicles: [],
    loading: false,
  },
  mutations: {
    setFilms(state, films) {
      state.films = films;
    },
    setPeople(state, people) {
      state.people = people;
    },
    setSpecies(state, species) {
      state.species = species;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
  },
  actions: {
    async getDataByCategory({ commit, state }, category) {
      commit('setLoading', true);
      try {
        if (category === 'film') {
          if (state.films.length !== 0) return;
          const response = await api.getFilms();
          commit('setFilms', response.data);
        }

        if (category === 'people') {
          if (state.people.length !== 0) return;
          const response = await api.getPeople();
          commit('setPeople', response.data);
        }

        if (category === 'species') {
          if (state.species.length !== 0) return;
          const response = await api.getSpecies();
          commit('setSpecies', response.data);
        }

        if (category === 'location') {
          if (state.locations.length !== 0) return;
          const response = await api.getLocations();
          commit('setLocations', response.data);
        }

        if (category === 'vehicle') {
          if (state.vehicles.length !== 0) return;
          const response = await api.getVehicles();
          commit('setVehicles', response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  modules: {
  },
});
