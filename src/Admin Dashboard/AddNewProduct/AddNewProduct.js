/** @format */

import React, { Fragment, useState } from "react";
import "./newProduct.css";
// import { Select, SelectOption, SelectInput } from "reaselct";
import Select from "react-select";
import { Button, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import "../../App.css";
import { DropzoneArea } from "material-ui-dropzone";

const NewProduct = () => {
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
  console.log("nutrion image", images);
  console.log("image", imagesPreview);

  // handle the selectedFlavours values

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
                fullWidth
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
                fullWidth
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
                fullWidth
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="handleTextArea"
              ></TextareaAutosize>
            </div>

            <div>
              <Select
                fullWidth
                options={catOptions}
                placeholder="Select  a Category..."
                value={category}
                onChange={(selectedOption) => setCategory(selectedOption)}
              />
            </div>
            <div>
              <Select
                fullWidth
                isMulti={true}
                options={suppOptions}
                placeholder="Select  Flavours..."
                value={selectedFlavours}
                onChange={(selectedOption) =>
                  setSelectedFlavours(selectedOption)
                }
              />
            </div>

            {/* <Grid container spacing={16} justify="flex-start">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
               
              </Grid>
            </Grid> */}

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
                fullWidth
                className="set-outline"
                variant="outlined"
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

<<<<<<< HEAD
            <div id="createProductFormFile">
              {/* <label htmlFor="file">Upload File:</label> */}

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
           
=======
            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={2}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) => console.log("Files:", files)}
            />

>>>>>>> 22fae39ada80adf3e65ff6f17d2f35cb6b2859d9
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
