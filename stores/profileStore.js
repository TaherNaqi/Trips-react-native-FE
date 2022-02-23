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
}
const profileStore = new ProfileStore();
profileStore.getProfiles();
export default profileStore;
