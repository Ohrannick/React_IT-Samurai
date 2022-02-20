import { Component } from "react";

class ProfileStatus extends Component {
  render() {
    // debugger;
    return (
      <div>
        <img
          src={this.props.props.photos.small}
          alt={this.props.props.fullName}
        />
        <div>{`Имя: ${this.props.props.fullName}`}</div>
        <br />
        <div>
          <div>{`Обо мне: ${this.props.props.aboutMe}`}</div>
          <input title="Обо мне:" value={this.props.props.aboutMe} />
        </div>
        <div>
          <span>{`В поиске работы: ${
            this.props.props.lookingForJob ? " Yes" : " No"
          }`}</span>
        </div>
        <div>
          <span>{`Мой instagram: ${this.props.props.contacts.instagram}`}</span>
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
