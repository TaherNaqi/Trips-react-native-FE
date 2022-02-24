import api from "./api";
import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  profiles = [];
  loading = true;
  getProfiles = async () => {
    try {
      const res = await api.get("/profiles");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: profileStore.js ~ line 19 ~ ProfileStore ~ getProfiles= ~ error",
        error
      );
    }
  };
  updateProfile = async (updatedProfile, toast) => {
    try {
      const res = await api.put("/profiles", updatedProfile);
      let tempProfiles = this.profiles.map((profile) =>
        profile._id === updatedProfile._id ? res.data : profile
      );
      this.profiles = tempProfiles;
      this.loading = true;
      this.getProfiles();
    } catch (error) {
      console.log(
        "🚀 ~ file: profileStore.js ~ line 28 ~ ProfileStore ~ updateProfile= ~ error",
        error
      );
    }
  };
}
const profileStore = new ProfileStore();
profileStore.getProfiles();
export default profileStore;
