"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "./service/page";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
interface Product {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  time: string;
}
export default function Home() {
  const [p, setP] = useState<Product[]>([]);

  useEffect(() => {
    async function fetcP() {
      const res = await fetch("http://localhost:9000/hot");
      const data = await res.json();
      setP(data);
    }
    fetcP();
  }, []);

  if (!p) return <div>Loading...</div>;
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row className="m-0">
          <Col lg={12} className="p-0">
            <Image
              src="/banner.jpg"
              alt="Banner"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Col>
          <Service />
        </Row>
      </Container>
      <Container
        fluid
        className="d-flex flex-column"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        <Row className="my-4">
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className="text-center h2"
          >
            COMBO FRIED KING
          </Link>
        </Row>

        <Row className="d-flex flex-wrap">
          <div style={{ width: "40%" }}>
            <Image
              src="./collection_one_img.webp"
              fluid
              style={{ width: "578px", height: "357px" }}
            ></Image>
          </div>
          {p.map((item) => (
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
              }}
              key={item.id}
              className="mb-3 "
            >
              <Image
                src={item.imageUrl}
                alt="banner"
                style={{ width: "274,15px", height: "274,15px" }}
              ></Image>
              <p style={{ color: "#252a2b", fontSize: "15px", margin: "0" }}>
                {item.name}
              </p>
              <p style={{ color: "#252a2b", fontSize: "14px" }}>{item.price}</p>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}
