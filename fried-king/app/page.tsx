import Post from "./post/post";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
export default function Home() {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <Image
            src="/banner.jpg"
            alt="Banner"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
