import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/image-2.jpeg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.users}>
      <div className={style.paginations}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              key={p}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={style.user} key={u.id}>
          <div>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={style.avatar}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={style.followed}
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </div>
          <div>
            <span>
              <div> {u.name} </div>
              <div> {u.status} </div>
            </span>
            <div> {"u.location.country"} </div>
            <div> {"u.location.city"} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
