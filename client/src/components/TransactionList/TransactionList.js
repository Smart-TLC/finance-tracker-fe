import React, { useState } from "react";
import "../../index.css";
import TransactionListItem from "./TransactionListItem";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core";
import { Timeline } from "@material-ui/lab";
import { useSelector } from "react-redux";
import TransactionForm from "../TransactionForm/TransactionForm";
import AddTransactionBtn from "../TransactionForm/AddTransactionBtn";
import Balance from "./Balance";
import { motion } from "framer-motion";
import { isSooner, calculateBalance } from "../../utils/transactionFunc";
import BudgetItem from "./BudgetItem";
import TransactionTab from "./TransactionTab";

const textVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    x: -20,
  },
  visible: {
    opacity: 1,
    y: -33,
    x: -20,
  },
};

const useStyles = makeStyles((theme) => ({
  timeline: {
    padding: 0,
  },
}));

export default function TransactionList() {
  const classes = useStyles();
  const state = useSelector((state) => ({
    auth: state.auth,
    data: state.data,
  }));

<<<<<<< HEAD
    console.log(state.data.transactions);

    // open action of form 
    const [open, setOpen] = useState(false);
    const [formId, setFormId] = useState("");
    const handleClickOpen = (id) => {
        setOpen(true);
        setFormId(id);
    };
=======
  const [open, setOpen] = useState(false);
  const [formId, setFormId] = useState("");
  const [type, setType] = useState("expense");
>>>>>>> 927e67e0998d869f8ad37b293de869f5cc13bf04

  // open action of form
  const handleClickOpen = (id) => {
    setOpen(true);
    setFormId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // change tab action: expense and budget
  const handleTabChange = (event, newValue) => {
    setType(newValue);
  };

  const data = state.data.transactions
    .filter((item) => item.type == type)
    .sort((item1, item2) => isSooner(item1.spentAt, item2.spentAt));

  const balance = calculateBalance(state.data.transactions);

  return (
    <Container maxWidth="lg" disableGutters={false}>
      <motion.h2
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", delay: 0.5, stiffness: 300 }}
      >
        Welcome back, {state.auth.user.name}
      </motion.h2>
      <Balance expenseMoney={balance[1]} budgetMoney={balance[0]}/>
      <TransactionTab
        transactionType={type}
        handleTabChange={handleTabChange}
      />

      <Container className="scrollbar scrollbar-winter-neva">
        {type == "expense" ? (
          <Grid container spacing={1}>
            {data.map((item) => (
              <TransactionListItem
                item={item}
                key={item._id}
                handleClickOpen={handleClickOpen}
              />
            ))}
          </Grid>
        ) : (
          <Timeline className={classes.timeline}>
            {data.map((item, id) => (
              <BudgetItem
                item={item}
                handleClickOpen={handleClickOpen}
                id={id}
                dataLength={data.length}
              />
            ))}
          </Timeline>
        )}
      </Container>
      <Grid>
        <AddTransactionBtn handleClickOpen={handleClickOpen} />
        <TransactionForm
          open={open}
          handleClose={handleClose}
          id={formId}
          transactionType={type}
        />
      </Grid>
    </Container>
  );
}
