// import { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// interface iUpdate {
//   showUpdateModal: boolean;
//   setUpdateModal: (value: boolean) => void;
//   post: PostType | null;
// }
// function UpdateModal(props: iUpdate) {
//   const { showUpdateModal, setUpdateModal, post } = props;
//   const [name, setName] = useState<string>("");
//   const [price, setPrice] = useState<string>("");
//   const [imageUrl, setImage] = useState<string>("");
//   useEffect(() => {
//     if (post && post.id) {
//       setName(post.name);
//       setPrice(post.price);
//       setImage(post.imageUrl);
//     }
//   }, [post]);

//   const handleSubmit = () => {
//     fetch(`http://localhost:9000/pizza/${post?.id}`, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       method: "PUT",
//       body: JSON.stringify({ name, price, imageUrl }),
//     })
//       .then(function (res) {
//         console.log(res);
//         if (!res.ok) {
//           toast.error("Post added Error");
//         }
//         toast.success("Post added Successfully");
//         window.location.reload();
//       })
//       .catch(function (res) {
//         console.log(res);
//         return toast.error("Post added Error");
//       });
//   };
//   const handleClose = () => {
//     setName("");
//     setPrice("");
//     setImage("");
//     setUpdateModal(false);
//   };
//   return (
//     <>
//       <Modal
//         show={showUpdateModal}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Name </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Price </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>ImageUrl </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Image"
//                 value={imageUrl}
//                 onChange={(e) => setImage(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default UpdateModal;
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

interface iShow {
  showUpdateModal: boolean;
  setUpdateModal: (value: boolean) => void;
  post: StudentType | null;
  fetchPosts: () => void;
}

function UpdateModel({
  showUpdateModal,
  setUpdateModal,
  post,
  fetchPosts,
}: iShow) {
  const [maSoSinhVien, setMaSoSinhVien] = useState<string>("");
  const [hoTen, setHoTen] = useState<string>("");
  const [ngaySinh, setNgaySinh] = useState<string>("");
  const [dienThoai, setDienThoai] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [diaChi, setDiaChi] = useState<string>("");
  const [lopHoc, setLopHoc] = useState<string>("");
  const [monHoc, setMonHoc] = useState<string>("");
  const [diemCuoiKhoa, setDiemCuoiKhoa] = useState<string>("");

  useEffect(() => {
    if (post) {
      setHoTen(post.hoTen);
      setMaSoSinhVien(post.maSoSinhVien);
      setNgaySinh(post.ngaySinh);
      setDienThoai(post.dienThoai);
      setEmail(post.email);
      setDiaChi(post.diaChi);
      setLopHoc(post.lopHoc);
      setMonHoc(post.monHoc);
      setDiemCuoiKhoa(post.diemCuoiKhoa.toString());
    }
  }, [post]);

  const handleSubmit = async () => {
    if (!post) return;

    try {
      const response = await fetch(`http://localhost:9000/Student/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          maSoSinhVien,
          hoTen,
          ngaySinh,
          dienThoai,
          email,
          diaChi,
          lopHoc,
          monHoc,
          diemCuoiKhoa,
        }),
      });

      if (!response.ok) throw new Error("Có lỗi xảy ra khi cập nhật sản phẩm");

      toast.success("Cập nhật sản phẩm thành công!");
      setUpdateModal(false);
      fetchPosts();
    } catch (error) {
      console.error("Lỗi:", error);
      toast.error("Cập nhật sản phẩm thất bại");
    }
  };

  const handleClose = () => {
    setHoTen("");
    setMaSoSinhVien("");
    setNgaySinh("");
    setDienThoai("");
    setEmail("");
    setDiaChi("");
    setLopHoc("");
    setMonHoc("");
    setDiemCuoiKhoa("");
    setUpdateModal(false);
  };

  return (
    <Modal
      show={showUpdateModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Mã số sinh viên </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={maSoSinhVien}
              onChange={(e) => setMaSoSinhVien(e.target.value)}
            />
            <Form.Label>Họ tên </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={hoTen}
              onChange={(e) => setHoTen(e.target.value)}
            />
            <Form.Label>Ngày sinh </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={ngaySinh}
              onChange={(e) => setNgaySinh(e.target.value)}
            />
            <Form.Label>Số điện thoại </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={dienThoai}
              onChange={(e) => setDienThoai(e.target.value)}
            />
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={diaChi}
              onChange={(e) => setDiaChi(e.target.value)}
            />
            <Form.Label>Lớp học</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={lopHoc}
              onChange={(e) => setLopHoc(e.target.value)}
            />
            <Form.Label>Môn học</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={monHoc}
              onChange={(e) => setMonHoc(e.target.value)}
            />
            <Form.Label>Điểm cuối khóa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={diemCuoiKhoa}
              onChange={(e) => setDiemCuoiKhoa(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModel;
