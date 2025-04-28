"use client";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styles from "../styles/productList.module.css";
import { toast } from "react-toastify";
interface Product {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  price: number;
  rating: number;
  time: string;
  description: string[];
  taste: string[];
}

interface ProductItemsProps {
  product: Product;
  layout?: "vertical" | "horizontal";
}

export default function ProductItem({
  product,
  layout = "vertical",
}: ProductItemsProps) {

  return (
    <>
      <div
        key={product.id}
        className={`${styles.productList} ${styles[layout]}  `}
      >
        <Link href={`/productList/${product.id}`}>
          <Image
            src={product.imageUrl}
            className={`${styles.productImg} `}
            alt="banner"
          ></Image>
        </Link>
        <div>
          <div>
            <p className={`${styles.productName} `}>{product.name}</p>
            <p>{product.description}</p>
          </div>
          <div className={`${styles.productBot}`}>
            <p className={`${styles.productPrice} `}>{product.price}</p>
            <Button
              className={`${styles.productButton} `}

            >
              Thêm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
