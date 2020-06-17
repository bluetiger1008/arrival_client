import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Typography } from "@material-ui/core"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2c4556",
    height: 150,
    color: "#fff",
  },
  link: {
    color: "#fff",

    "& button": {
      color: "#fff",
    },
  },
}))

const CreateHeader = ({ onSave, productTitle }) => {
  const classes = useStyles()

  return (
    <Box p={2} className={classes.root}>
      <Link to="/products" className={classes.link}>
        <Button
          className={classes.button}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Products
        </Button>
      </Link>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h5">
            {productTitle ? productTitle : "New Product"}
          </Typography>
          <Typography variant="body1">Product detail</Typography>
        </Box>
        <Button color="primary" variant="contained" onClick={onSave}>
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default CreateHeader
