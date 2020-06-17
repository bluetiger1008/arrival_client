import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import Header from "../../Components/Header/ListingHeader"
import ProductsTable from "../../Components/ProductsTable"

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: "-57px",
  },
}))

const Products = () => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.table}>
        <Box mx={2}>
          <ProductsTable />
        </Box>
      </div>
    </div>
  )
}

export default Products
