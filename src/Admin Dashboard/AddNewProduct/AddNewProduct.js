/** @format */

import React, { Fragment, useState } from "react";
import "./newProduct.css";
// import { Select, SelectOption, SelectInput } from "reaselct";
import Select from "react-select";
import { Button, TextField, TextareaAutosize } from "@material-ui/core";
import "../../App.css";
import { DropzoneArea } from "material-ui-dropzone";
import { SubscriptionsOutlined } from "@material-ui/icons";

const NewProduct = () => {
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const [selectImage, setSelectImage] = useState([]);
  const [selectImageDropzone, setSelectImageDropzone] = useState([]);

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

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedWeights, setSelectedWeights] = useState([]);

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

    // dispatch(createProduct(myForm));
  };

  console.log("For First dropZone", selectImage);
  console.log("For Second dropZone", selectImageDropzone);

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

            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={2}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) =>
                files.map((el) => setSelectImage([...selectImage, el?.path]))
              }
            />

            <DropzoneArea
              acceptedFiles={["image/*"]}
              filesLimit={2}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) =>
                files.map((el) =>
                  setSelectImageDropzone([...selectImageDropzone, el?.path])
                )
              }
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
