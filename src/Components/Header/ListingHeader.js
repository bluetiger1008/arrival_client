import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Paper, IconButton, InputBase } from "@material-ui/core"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#2c4556",
    height: 150,
    color: "#fff",
  },
  form: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box p={2} className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box mr={1}>
            <ShoppingBasketIcon />
          </Box>
          Products
        </Box>
        <Paper component="form" className={classes.form}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
        <Link to="/new-product">
          <Button color="primary" variant="contained">
            Add New Product
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Header
