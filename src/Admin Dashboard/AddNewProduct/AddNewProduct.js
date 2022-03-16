/** @format */

import React, { Fragment, useState } from "react";
import "./newProduct.css";
// import { Select, SelectOption, SelectInput } from "reaselct";
import Select from "react-select";

import { useDispatch } from "react-redux";
import { MultiSelect } from "react-multi-select-component";
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
  const [selectedFlavours, setSelectedFlavours] = useState([]);

  const suppOptions = [
    { value: "bugatti", label: "Bugatti" },
    { value: "ferrari", label: "Ferrari" },
    { value: "am", label: "Aston Martin" },
    { value: "koenigsegg", label: "Koenigsegg" },
    { value: "bmw", label: "BMW" },
    { value: "cadillac", label: "Cadillac" },
  ];
  const catOptions = [
    { value: "Protien", label: "Protien" },
    { value: "water", label: "water" },
    { value: "sugar", label: "Aston Martin" },
    { value: "furits", label: "furits" },
    { value: "bmw", label: "BMW" },
    { value: "cadillac", label: "Cadillac" },
  ];
  const supplimentWeights = [
    { value: "Protien", label: "Protien" },
    { value: "water", label: "water" },
    { value: "sugar", label: "Aston Martin" },
    { value: "furits", label: "furits" },
    { value: "bmw", label: "BMW" },
    { value: "cadillac", label: "Cadillac" },
  ];

  // const alert = useAlert();

  // const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [nutritonImages, setNutImages] = useState([]);
  const [nutritonimagesPreview, setNutritonImagesPreview] = useState([]);
  console.log("nutrion image", nutritonimagesPreview);
  console.log("image", imagesPreview);

  // handle the selectedFlavours values
  const classes = useStyles();
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("selectedFlavours", selectedFlavours);
    myForm.set("selectedWeights", selectedWeights);
    myForm.set("company", company);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    nutritonImages.forEach((nutritonImages) => {
      myForm.append("nutritonImages", nutritonImages);
    });
    // dispatch(createProduct(myForm));
  };
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
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
  const createNutrionImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const reader = new FileReader();
    const imageUrl = reader.readAsDataURL(files);
    setNutritonImagesPreview(imageUrl);
    setNutImages(imageUrl);
    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setNutritonImagesPreview((old) => [reader.result]);
    //       setNutImages((old) => [reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
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
              <Select
                options={catOptions}
                placeholder="Select  a Category..."
                value={category}
                onChange={(selectedOption) => setCategory(selectedOption)}
              />
            </div>
            <div>
              <Select
                isMulti={true}
                options={suppOptions}
                placeholder="Select  Flavours..."
                value={selectedFlavours}
                onChange={(selectedOption) =>
                  setSelectedFlavours(selectedOption)
                }
              />
            </div>

            <div>
              <Select
                isMulti={true}
                options={supplimentWeights}
                placeholder="Select  Weights..."
                value={selectedWeights}
                onChange={(selectedOption) =>
                  setSelectedWeights(selectedOption)
                }
              />
            </div>

            <div>
              <TextField
                classes={{ root: classes.root }}
                className="set-outline"
                variant="outlined"
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <label htmlFor="file">Upload File:</label>

              <input
                placeholder="add product images"
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

            <div>
              <input
                placeholder="add product images"
                className="add_product_input"
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createNutrionImagesChange}
                // multiple
              />
            </div>
            <div id="createProductFormImage">
              {nutritonimagesPreview && (
                <img src={nutritonimagesPreview} alt="Product Preview" />
              )}
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
