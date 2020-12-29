import React, { useContext, useState } from "react";
import useStyles from "./styles";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { ExpenseTrackerContext } from "../../../context/context";

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date().toLocaleDateString(),
  notes: "",
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom align="center">
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            type="number"
            label="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            type="date"
            label="Date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextareaAutosize
            rowsMin={2}
            placeholder="ie: Bought present for Susan.."
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
          />
        </FormControl>
      </Grid>
      <Button
        variant="outlined"
        fullWidth
        color="primary"
        className={classes.button}
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
