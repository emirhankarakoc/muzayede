import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginOrRegister() {
  return (
    <div>
      <div className="d-inline" style={{ marginRight: "30px" }}>
        <Link to={"/login"}>
          <Button variant="danger" size="md">
            Giriş Yap
          </Button>
        </Link>
      </div>

      <div className="d-inline" style={{ marginLeft: "30px" }}>
        <Link to={"/register"}>
          <Button variant="danger" size="md">
            Kayıt ol
          </Button>
        </Link>
      </div>
    </div>
  );
}
