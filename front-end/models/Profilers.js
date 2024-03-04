import { Schema, model, models } from "mongoose";
import { ProfilesSchema } from "./Profiles";
import { ServicesSchema } from "./Services";

const ProfilersSchema = new Schema({
  profile: ProfilesSchema,
  services: ServicesSchema,
});

export default models.Profilers || model("Profilers", ProfilersSchema);
