const categoriesModel = require('../model/categoriesModel.js');
const productsModel = require('../model/productModel.js');
module.exports = { getAllPro, getDatailPro, hideProduct,addPro,updateProduct }
const mongoose = require('mongoose');
// Lấy tất cả sản phẩm 
async function getAllPro() {
    try {
        const cates = await productsModel.find();
        return cates;

    } catch (error) {

        console.log(error);
        throw new Error('Loi lay du lieu')
    }
}
// Thêm mới sản phẩm
async function addPro(data) {
  try {
      if (!data.name || !data.price || !data.categories || !data.quantity || !data.image || !data.taste || !data.size) {
          throw new Error("Thiếu thông tin sản phẩm");
      }

      const { name, price, categories, quantity, image,taste,size } = data;

      const categoriesFind = await categoriesModel.findById(categories);
      if (!categoriesFind) {
          throw new Error("Danh mục không tồn tại");
      }

      const newPro = new productsModel({
          name,
          price,
          image: image, 
          quantity,
          taste,
          size,
          categories: {
              categoriesId: categoriesFind._id,
              categoriesName: categoriesFind.name,
          },
      });
      const result = await newPro.save();
      return result;
  } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error.message);
      throw new Error("Lỗi thêm dữ liệu sản phẩm: " + error.message);
  }
}
// Sản phẩm chi tiết
async function getDatailPro(id) {
    try {
        const result = await productsModel.findOne({ _id: id });
        return result;
    }
    catch (errorr) {
        console.log(errorr);
        throw new Error('error')
    };
}
// Ẩn sản phẩm
async function hideProduct(id) {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID sản phẩm không hợp lệ");
        }
        const result = await productsModel.findByIdAndUpdate(
            id,
            { isHidden: true },
            { new: true }
        );
        if (!result) {
            throw new Error("Sản phẩm không tồn tại");
        }
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error.message || "Lỗi khi ẩn sản phẩm");
    }
}
// Cập nhât sản phẩm
async function updateProduct(data, id) {
  try {
    const pro = await productsModel.findById(id);
    if (!pro) {
      throw new Error("Sản phẩm không tồn tại");
    }

    const { name, price, categories, quantity, image,taste,size  } = data;

    let categoriesUpdate = pro.categories; 

    if (categories) {
      const categoriesFind = await categoriesModel.findById(categories);
      if (!categoriesFind) {
        throw new Error("Danh mục không tồn tại");
      }
      categoriesUpdate = {
        categoriesId: categoriesFind._id,
        categoriesName: categoriesFind.name,
      };
    }
    const result = await productsModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        categories: categoriesUpdate,
        quantity,
        image,
        taste,
        size,
      },
      { new: true }
    );

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Lỗi cập nhật sản phẩm");
  }
}
