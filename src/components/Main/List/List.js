import React, { useContext } from "react";
import useStyles from "./styles";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContext } from "../../../context/context";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  const deleteT = (id) => {
    deleteTransaction(id);
  };

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`$${transaction.amount} - ${transaction.date}`}
              secondary={`${transaction.notes}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteT(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
