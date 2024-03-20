import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function User() {
  function logOut() {
    localStorage.setItem("userToken", "");
    localStorage.setItem("username", "");
    window.location.replace("/");
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Hesabim
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href={`/user/${localStorage.getItem("username")}`}>
            Profilim
          </Dropdown.Item>

          <Dropdown.Item onClick={logOut}>Çıkış Yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
