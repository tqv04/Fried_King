"use client";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
interface Product {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  time: string;
}
export default function Product() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("http://localhost:9000/pizza");
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  if (!product) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <Row>
          {product.map((item) => (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img
                variant="top"
                src="/garan ver1.0.jpg"
                style={{ width: "50px", height: "50px", display: "block" }}
              />
              <Card.Body>
                <Image src={item.imageUrl} alt="Banner"></Image>
                <Card.Title>{item.name}</Card.Title>

                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
