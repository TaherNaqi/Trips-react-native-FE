import { makeAutoObservable, configure } from "mobx";
import api from "./api";
import authStore from "./authStore";
import profileStore from "./profileStore";
configure({
  enforceActions: "never",
});
class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];
  loading = true;
  getTrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      profileStore.getProfiles();
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 15 ~ TripStore ~ getTrips= ~ error",
        error
      );
    }
  };
  createTrip = async (trip, navigation) => {
    try {
      // const formData = new FormData();
      // for (const key in trip) formData.append(key, trip[key]);
      const profile = profileStore.profiles.find(
        (profile) => profile.owner._id === authStore.user._id
      );
      // const res = await axios.post(
      //   `/${profile._id}`,
      //   formData
      // {
      //   headers: { "Content-Type": "multipart/form-data" },
      // }
      // );
      const res = await api.post(`/profiles/`, trip);
      this.trips.push(res.data);
      profile.trips.push(res.data);
      navigation.navigate("Trips");
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 27 ~ TripStore ~ createTrip=async ~ error",
        error
      );
    }
  };
  updateTrip = async (updatedTrip, toast) => {
    try {
      const res = await api.put(`/trips/${updatedTrip._id}`, updatedTrip);
      let tempTrips = this.trips.map((trip) =>
        trip._id === updatedTrip._id ? res.data : trip
      );
      this.trips = tempTrips;
      toast.show({ title: `Your trip has been updated`, status: "success" });
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 38 ~ TripStore ~ updateTrip=async ~ error",
        error
      );
    }
  };
  deleteTrip = async (tripId, navigation, toast) => {
    try {
      await api.delete(`/trips/${tripId}`);
      let tempTrips = this.trips.filter((trip) => trip._id !== tripId);
      this.trips = tempTrips;
      navigation.navigate("Trips");
      toast.show({ title: `Your trip has been deleted`, status: "danger" });
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 55 ~ TripStore ~ deleteTrip ~ error",
        error
      );
    }
  };
}
const tripStore = new TripStore();
tripStore.getTrips();
export default tripStore;
