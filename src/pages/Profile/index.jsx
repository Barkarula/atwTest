import React from "react";
import { ProfileForm } from "modules";

import "./Profile.scss";

const Profile = () => (
  <section className="auth">
    <div className="auth__content">
      <ProfileForm/>
    </div>
  </section>
);

export default Profile;
