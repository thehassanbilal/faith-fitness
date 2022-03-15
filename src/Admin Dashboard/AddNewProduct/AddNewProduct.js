/** @format */

import React, { Fragment, useState } from "react";
import "./newProduct.css";

import { useDispatch } from "react-redux";

import { Button, TextField, TextareaAutosize } from "@material-ui/core";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "380px",
    width: "100%",
  },
}));

const NewProduct = () => {
  const dispatch = useDispatch();
  // const alert = useAlert();

  // const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  // handle the selected values
  const classes = useStyles();
  const [formState, setFormState] = useState({
    productCatagories: [],
  });

  const [formState1, setFormState1] = useState({
    showProductCatagories: [],
  });

  const handleFieldChange = (event) => {
    console.log(event);
    event.persist();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleFieldChangeforselect = (event) => {
    console.log(event);
    event.persist();
    setFormState1((formState1) => ({
      ...formState1,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    // dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <TextField
                classes={{ root: classes.root }}
                className="set-outline"
                variant="outlined"
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                classes={{ root: classes.root }}
                className="set-outline"
                variant="outlined"
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <TextareaAutosize
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="handleTextArea"
              ></TextareaAutosize>
            </div>

            <div>
              <TextField
                label="Select"
                classes={{ root: classes.root }}
                className="set-outline"
                select
                name="productCatagories"
                id="productCatagories"
                variant="outlined"
                SelectProps={{
                  multiple: true,
                  value: formState.productCatagories,
                  onChange: handleFieldChange,
                }}
              >
                <MenuItem value="admin">Items-1</MenuItem>
                <MenuItem value="user1">Items-2</MenuItem>
                <MenuItem value="user2">Items-3</MenuItem>
              </TextField>
            </div>

            <div>
              <TextField
                label="Select"
                classes={{ root: classes.root }}
                className="set-outline"
                select
                name="showProductCatagories"
                id="showProductCatagories"
                variant="outlined"
                SelectProps={{
                  multiple: true,
                  value: formState1.showProductCatagories,
                  onChange: handleFieldChangeforselect,
                }}
              >
                <MenuItem value="admin">Items-1</MenuItem>
                <MenuItem value="user1">Items-2</MenuItem>
                <MenuItem value="user2">Items-3</MenuItem>
              </TextField>
            </div>

            <div>
              <TextField
                classes={{ root: classes.root }}
                className="set-outline"
                variant="outlined"
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                className="add_product_input"
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button id="createProductBtn" type="submit" className="btn-reset">
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
