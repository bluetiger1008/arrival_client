import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Tabs, Tab, Box, TextField } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"

import { categories, tags } from "./options"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    maxWidth: 800,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const ProductForm = ({ isCreate, context }) => {
  const classes = useStyles()
  const [tabValue, setTabValue] = React.useState(0)
  const formContext = useContext(context)

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue)
  }

  const onChangeCategories = (event, value, reason) => {
    formContext.setFormValues({
      ...formContext.formValues,
      categories: value,
    })
  }

  const onChangeTags = (event, value, reason) => {
    formContext.setFormValues({
      ...formContext.formValues,
      tags: value,
    })
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={tabValue}
        onChange={handleChangeTab}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Basic Info" {...a11yProps(0)} />
        <Tab label="Product Images" {...a11yProps(1)} />
        <Tab label="Pricing" {...a11yProps(2)} />
        <Tab label="Inventory" {...a11yProps(3)} />
        <Tab label="Shipping" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formContext.formValues.name}
            onChange={(e) =>
              formContext.setFormValues({
                ...formContext.formValues,
                name: e.target.value,
              })
            }
          />
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formContext.formValues.description}
            onChange={(e) =>
              formContext.setFormValues({
                ...formContext.formValues,
                description: e.target.value,
              })
            }
          />
          <Autocomplete
            multiple
            id="categories-outlined"
            options={categories}
            getOptionLabel={(option) => option.title}
            value={formContext.formValues.categories}
            filterSelectedOptions
            onChange={onChangeCategories}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Categories"
                placeholder="Favorites"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tags}
            getOptionLabel={(option) => option.title}
            value={formContext.formValues.tags}
            filterSelectedOptions
            onChange={onChangeTags}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tags"
                placeholder="Favorites"
              />
            )}
          />
        </form>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        Item Five
      </TabPanel>
    </Paper>
  )
}

export default ProductForm
