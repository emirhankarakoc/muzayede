import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { http, httpError } from "../../../lib/http";

function Login(props) {
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoad, setIsLoad] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      setIsLoad(true);
      const response = await http.post(`/accounts/login`, data);
      setIsLoad(false);
      setResponseMessage(`Giriş başarılı , yönlendiriliyorsunuz.`);
      setTimeout(() => {
        localStorage.setItem("username", response.data.username); //bu olmazsa profilinize giremezsiniz.
        localStorage.setItem("userToken", response.data.token);
        window.location.replace("/auctions");
      }, 3000);
    } catch (error) {
      if (httpError(error) == "Network Error") {
        setResponseMessage("Sunucuya bağlanılamadı, lütfen tekrar deneyin.");
      } else {
        setResponseMessage(`Error: ${httpError(error)}`);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {isLoad && (
          <div>
            <Spinner color="white" />
          </div>
        )}
        <div className="row justify-content-md-center">
          <div className="col-md-6 ">
            <h1 className="text-light text-center mb-4">Giriş Yap</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">
                  Mail Adresi & Kullanıcı adı
                </Form.Label>
                <Form.Control
                  type="email"
                  name="username"
                  placeholder="Mail adresinizi giriniz"
                />
                <Form.Text className="text-white">
                  Mail adreslerinizi başkalarıyla paylaşmıyoruz.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light">Şifre</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Şifrenizi girin"
                />
              </Form.Group>
              <Button variant="danger" type="submit" className="w-100">
                Giriş Yap
              </Button>
            </Form>
            {responseMessage && (
              <h2 className="text-light mt-2 text-center">{responseMessage}</h2>
            )}
            <p className="text-light mt-3 text-center">
              Hesabınız yok mu?
              <a className="text-light" href="/register">
                Kayıt ol
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
