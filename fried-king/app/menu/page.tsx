"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./menu.css";
interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export default function Menu() {
  const [category, setCategory] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchCategory() {
      const res = await fetch("http://localhost:9000/category");
      const data = await res.json();
      setCategory(data);
    }
    fetchCategory();
  }, []);
  return (
    <>
      <Container fluid className="p-3" style={{ backgroundColor: "#e5e2e2" }}>
        <div
          className="d-flex w-50 mx-auto justify-content-center align-items-center"
          style={{ gap: "15px" }}
        >
          {category.map((item) => (
            <div key={item.id} className="d-flex m-0 p-0">
              <Link href="/product">
                <Image
                  src={item.imageUrl}
                  style={{ width: "30px", height: "30px" }}
                ></Image>
              </Link>
              <p style={{ fontSize: "17px" }} className="m-0 p-0">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
