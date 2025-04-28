"use client";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import AdminLayout from "../adminLayout";
import Modals from "@/app/components/create.modals";
import UpdateModal from "@/app/components/update.moadls";
import { ToastContainer, toast } from "react-toastify";
export default function ProductAdmin() {
  interface PizzaType {
    id: number;
    name: string;
    category: string;
    imageUrl: string;
    price: string;
    rating: number;
    time: string;
  }
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const handleUpdate = (post: PostType) => {
    setSelectedPost(post);
    setShowUpdateModal(true);
  };
  const handleDelete = (id: number) => {
    fetch(`http://localhost:9000/pizza/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Delete failed!");
        } else {
          toast.success("Deleted successfully!");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Delete failed!");
      });
  };

  const [showModal, setShowModal] = useState(false);
  const [Pizza, setPost] = useState<PizzaType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9000/pizza");
      const data = await response.json();
      console.log("data:", data);
      setPost(data);
    };
    fetchData();
  }, []);
  return (
    <AdminLayout>
      <Button
        variant="primary"
        className="mx-3"
        onClick={() => setShowModal(true)}
      >
        +
      </Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Image</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {Pizza.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>
                <Image
                  src={data.imageUrl}
                  style={{ width: "100px", height: "100px" }}
                ></Image>
              </td>
              <td className="d-flex gap-2 justify-content-center ">
                <Button variant="success" onClick={() => handleUpdate(data)}>
                  Edit
                </Button>

                <Button variant="warning">View</Button>
                <Button variant="danger" onClick={() => handleDelete(data.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modals showModal={showModal} setShowModal={setShowModal} />
      <ToastContainer />
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setUpdateModal={setShowUpdateModal}
        post={selectedPost}
      />
      <ToastContainer />
    </AdminLayout>
  );
}
