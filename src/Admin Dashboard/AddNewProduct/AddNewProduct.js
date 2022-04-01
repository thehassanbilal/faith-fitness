/** @format */

import React, { Fragment, useState } from "react";
import "./newProduct.css";
// import { Select, SelectOption, SelectInput } from "reaselct";
import Select from "react-select";
import { Button, TextField, TextareaAutosize, Grid } from "@material-ui/core";
import "../../App.css";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";
const NewProduct = () => {
  const catOptions = [
    { value: "Protien", label: "Protien" },
    { value: "water", label: "water" },
    { value: "sugar", label: "Aston Martin" },
    { value: "furits", label: "furits" },
    { value: "bmw", label: "BMW" },
    { value: "cadillac", label: "Cadillac" },
  ];

  const suppOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "oreo", label: "Oreo" },
    { value: "vanilla", label: "Vanilla" },
    { value: "tutiFruiti", label: "Tuti Fruiti" },
  ];

  const supplimentWeights = [
    { value: "3", label: "3 lbs" },
    { value: "5", label: "5 lbs" },
    { value: "12", label: "12 lbs" },
  ];

  // const alert = useAlert();

  // const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);

  const [images, setImage] = useState("");

  console.log("nutrion image", images);

  const submitProdcut = async (data) => {
    try {
      const response = await fetch("http://localhost:9000/api/product", {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      });
      const product = await response.json();
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      price,
      description,
      category,
      selectedFlavours,
      selectedWeights,
      company,
      images,
    };
    submitProdcut(data);
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
                id="name"
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
              <TextareaAutosize
                fullWidth
                placeholder="Product Description"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
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

            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={1}
              dropzoneText={
                "Drag and drop and add nutrition image here or click"
              }
              onChange={(file) => setImage(file[0].path)}
            />

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
