import React, { createContext, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { useSnackbar } from "notistack"

import ApiClient from "../../Services/Apis/config"
import InfoHeader from "../../Components/Header/InfoHeader"
import ProductForm from "../../Components/ProductForm"

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "-48px",
  },
}))

const CreateFormContext = createContext()

const ProductCreate = () => {
  const classes = useStyles()
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    tags: [],
    categories: [],
  })
  const { enqueueSnackbar } = useSnackbar()

  const onSave = async () => {
    const tags = formValues.tags.map((tag) => tag.title)
    const categories = formValues.categories.map((category) => category.title)

    try {
      await ApiClient.post(`/products`, {
        name: formValues.name,
        description: formValues.description,
        tag: tags.toString(),
        category: categories.toString(),
      })
      setFormValues({
        name: "",
        description: "",
        tags: [],
        categories: [],
      })
      enqueueSnackbar("New product is created successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CreateFormContext.Provider value={{ formValues, setFormValues }}>
      <InfoHeader onSave={onSave} />
      <div className={classes.form}>
        <Box mx={2}>
          <ProductForm context={CreateFormContext} />
        </Box>
      </div>
    </CreateFormContext.Provider>
  )
}

export default ProductCreate
