import { makeAutoObservable, configure } from "mobx";
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
  createTrip = async () => {
    try {
      const res = await api.post("/trips");
      this.trips.push(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: tripStore.js ~ line 27 ~ TripStore ~ createTrip=async ~ error",
        error
      );
    }
  };
}
const tripStore = new TripStore();
tripStore.getTrips();
export default tripStore;
