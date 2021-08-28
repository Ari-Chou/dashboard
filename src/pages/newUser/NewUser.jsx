import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h3 className="newUserTitle">New User</h3>
      <form className="newUserForm">
        <div className="newUerItem">
          <label>Username</label>
          <input type="text" placeholder="arichou_enum" />
        </div>
        <div className="newUerItem">
          <label>Full Name</label>
          <input type="text" placeholder="Ari Chou" />
        </div>
        <div className="newUerItem">
          <label>Email</label>
          <input type="text" placeholder="arichou.dev@gmail.com" />
        </div>
        <div className="newUerItem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUerItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 970 279 1439" />
        </div>
        <div className="newUerItem">
          <label>Address</label>
          <input type="text" placeholder="ShangHai | CHINA" />
        </div>
        <div className="newUerItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" value="male" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" id="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" value="other" id="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUerItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
