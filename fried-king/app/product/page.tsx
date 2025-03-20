"use client";
import { useRouter } from "next/navigation";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Product() {
  const router = useRouter();
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src="/garan ver1.0.jpg"
                style={{ width: "200px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <button type="button" onClick={() => router.push("/")}>
                  Quay lai
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      ;
    </>
  );
}
