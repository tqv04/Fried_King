"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

interface Category {
  id: string;
  name: string;
}
export default function Header() {
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
      <Container className="bg-light ">
        <Row className="justify-content-end align-items-center">
          <Col xs="auto">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-dark me-2"
              style={{ fontSize: "12px" }}
            />
            <span className="text-danger fw-bold" style={{ fontSize: "12px" }}>
              Hotline: 19009480
            </span>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col xs={4}></Col>
          <Col xs={4} className="d-flex justify-content-center">
            <Image
              src="/garan ver1.0.jpg"
              style={{ width: "90px", height: "90px" }}
              rounded
            />
          </Col>
          <Col xs={4} className="text-end">
            <FontAwesomeIcon
              icon={faUser}
              className="me-3 fs-4 text-dark"
              style={{ fontSize: "24px" }}
            />
            <FontAwesomeIcon icon={faSearch} className="me-3 fs-4 text-dark" />
            <FontAwesomeIcon icon={faShoppingBag} className="fs-4 text-dark" />
          </Col>
        </Row>
      </Container>

      <Navbar expand="lg" className="bg-white border-top">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as="div">
              <Link
                href="/"
                className=" px-3"
                style={{ color: "#252a2b", textDecoration: "none" }}
              >
                TRANG CHỦ
              </Link>
            </Nav.Link>
            <Nav.Link as="div">
              <Link
                href="/pages"
                className=" px-3"
                style={{ color: "#252a2b", textDecoration: "none" }}
              >
                GIỚI THIỆU
              </Link>
            </Nav.Link>
            <NavDropdown title="MENU" id="basic-nav-dropdown">
              {menu.map((item) => (
                <NavDropdown.Item key={item.id}>
                  <Link
                    href="/product"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as="div">
              <Link
                href="/promotions"
                className=" px-3"
                style={{ color: "#252a2b", textDecoration: "none" }}
              >
                KHUYẾN MÃI
              </Link>
            </Nav.Link>
            <NavDropdown title="LIÊN HỆ" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/contact">Liên hệ</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
