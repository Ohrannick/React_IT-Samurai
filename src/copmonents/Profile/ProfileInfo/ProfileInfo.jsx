import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
          alt="back"
        />
      </div>
      <div>
        <div className={s.description}>
          <img src={props.profile.photos.small} alt={props.profile.fullName} />
          <div>{`Мое имя: ${props.profile.fullName.toUpperCase()}`}</div>
          <br />
          <div>
            <span>{`Обо мне: ${props.profile.aboutMe}`}</span>
          </div>
          <div>
            <span>{`В поиске работы: ${
              props.profile.lookingForJob ? " Yes" : " No"
            }`}</span>
          </div>
          <div>
            <span>{`Мой instagram: ${props.profile.contacts.instagram}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
