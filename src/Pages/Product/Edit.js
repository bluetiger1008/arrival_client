import React, { createContext, useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { useParams } from "react-router-dom"
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

const ProductEdit = () => {
  const classes = useStyles()
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    tags: [],
    categories: [],
  })
  const { productId } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const res = await ApiClient.get(`/products/${productId}`)
        const categories = res.data.category
          ? res.data.category.split(",").map((category) => {
              return { title: category }
            })
          : []
        const tags = res.data.tag
          ? res.data.tag.split(",").map((tag) => {
              return { title: tag }
            })
          : []

        setFormValues({
          name: res.data.name,
          description: res.data.description,
          tags,
          categories,
        })
      } catch (e) {
        console.log(e)
      }
    }

    getProductInfo()
  }, [])

  const onSave = async () => {
    const tags = formValues.tags.map((tag) => tag.title)
    const categories = formValues.categories.map((category) => category.title)

    try {
      await ApiClient.put(`/products/${productId}`, {
        name: formValues.name,
        description: formValues.description,
        tag: tags.toString(),
        category: categories.toString(),
      })
      enqueueSnackbar("Product is updated successfully", {
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
      <InfoHeader onSave={onSave} productTitle={formValues.name} />
      <div className={classes.form}>
        <Box mx={2}>
          <ProductForm context={CreateFormContext} />
        </Box>
      </div>
    </CreateFormContext.Provider>
  )
}

export default ProductEdit
