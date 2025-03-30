"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
interface Category {
  id: string;
  name: string;
}
const Footer = () => {
  const [menu, setMenu] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch("http://localhost:9000/category");
      const data = await res.json();
      setMenu(data);
    }
    fetchMenu();
  }, []);

  if (!menu) return <div>Loading...</div>;
  return (
    <>
      <Container fluid className="bg-dark p-5 ">
        <Container className="d-flex text-white box flex-column">
          <Row>
            <Col style={{ width: "20%" }}>
              <h1 style={{ fontSize: "18px" }}>Danh Mục Món Ăn</h1>
              {menu.map((item) => (
                <Row key={item.id}>
                  <Link
                    href=""
                    style={{
                      fontSize: "16px",
                      color: "#ababab",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              ))}
            </Col>
            <Col style={{ width: "20%" }}>
              <h1 style={{ fontSize: "18px" }}>Về KFC</h1>
              {menu.map((item) => (
                <Row key={item.id}>
                  <Link
                    href=""
                    style={{
                      fontSize: "16px",
                      color: "#ababab",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              ))}
            </Col>
            <Col style={{ width: "20%" }}>
              <h1 style={{ fontSize: "18px" }}>Liên hệ KFC</h1>
              {menu.map((item) => (
                <Row key={item.id}>
                  <Link
                    href=""
                    style={{
                      fontSize: "16px",
                      color: "#ababab",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              ))}
            </Col>
            <Col style={{ width: "20%" }}>
              <h1 style={{ fontSize: "18px" }}>Chính sách</h1>
              {menu.map((item) => (
                <Row key={item.id}>
                  <Link
                    href=""
                    style={{
                      fontSize: "16px",
                      color: "#ababab",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              ))}
            </Col>
            <Col style={{ width: "20%" }}>
              <h1 style={{ fontSize: "18px" }}>Download App</h1>
              {menu.map((item) => (
                <Row key={item.id}>
                  <Link
                    href=""
                    style={{
                      fontSize: "16px",
                      color: "#ababab",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </Row>
              ))}
            </Col>
          </Row>
          <Row className="mt-5 gx-0 mb-2">
            <Col></Col>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
              style={{ fontSize: "14px", color: "#ababab" }}
            >
              Copyright © 2023 KFC Vietnam
            </Col>
            <Col
              lg={3}
              className="d-flex align-items-center justify-content-end"
              style={{ gap: "10px" }}
            >
              <Link href="https://facebook.com" className="text-light me-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: "25px" }}
                />
              </Link>
              <Link href="https://twitter.com" className="text-light me-2">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ fontSize: "25px" }}
                />
              </Link>
              <Link href="https://instagram.com" className="text-light me-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: "25px" }}
                />
              </Link>
              <Link href="https://youtube.com" className="text-light">
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ fontSize: "25px" }}
                />
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">
          <Row>
            <Col className="text-light">
              <h1 style={{ fontSize: "26px", color: "#ABABAB" }}>
                CÔNG TY LIÊN DOANH TNHH KFC VIỆT NAM
              </h1>
              <p style={{ fontSize: "15px", color: "#ababab" }}>
                Số 292 Bà Triệu, P. Lê Đại Hành, Q. Hai Bà Trưng, TP. Hà Nội.
                Điện thoại: (028) 38489828 Email: lienhe@kfcvietnam.com.vn Mã số
                thuế: 0100773885 Ngày cấp: 29/10/1998 - Nơi cấp: Cục Thuế Thành
                Phố Hà Nội
              </p>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Image src="https://kfcvn-static.cognizantorderserv.com/images/email/logo_footer.png"></Image>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Footer;
