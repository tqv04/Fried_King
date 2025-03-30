"use client";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
interface Service {
  id: number;
  imageUrl: string;
  tittle: string;
  status: string;
}
export default function Service() {
  const [service, setService] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchService() {
      const res = await fetch("http://localhost:9000/service");
      const data = await res.json();
      setService(data);
    }
    fetchService();
  }, []);

  if (!service) return <div>Loading...</div>;
  return (
    <>
      <Container fluid>
        <Row>
          {service.map((item) => (
            <Col
              md={3}
              key={item.id}
              className="d-flex flex-column align-items-center text-center my-5 service"
              style={{ cursor: "pointer", gap: "10px" }}
            >
              <Image
                src={item.imageUrl}
                style={{ width: "40px", height: "40px" }}
                alt="Banner"
              ></Image>
              <p style={{ fontSize: "24px", margin: "0" }}>{item.tittle}</p>
              <p style={{ fontSize: "16px", margin: "0" }}>{item.status}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
