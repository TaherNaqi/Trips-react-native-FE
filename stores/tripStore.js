import { makeAutoObservable, configure } from "mobx";
import { PushNotificationIOS } from "react-native";
import api from "./api";
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
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 15 ~ TripStore ~ getTrips= ~ error",
        error
      );
    }
  };
  createTrip = async (trip) => {
    try {
      const formData = new FormData();
      formData.append("trip[name]", trip.name);
      formData.append("trip[description]", trip.description);
      formData.append("image", {
        uri: trip.image.uri,
        name: trip.name,
        type: trip.image.type,
      });
      console.log(formData);
      const res = await api.post("/trips", formData);
      this.trips.push(res.data);
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
      toast.show({ title: `Your trip has been updated`, status: "success" });
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
