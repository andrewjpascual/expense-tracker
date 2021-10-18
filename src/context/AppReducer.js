export default (state, action) => {
  switch (action.type) {
    // Send all transactions except for the ones deleted
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    // Grabbing the array of transactions, add the payload with all transactions
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
