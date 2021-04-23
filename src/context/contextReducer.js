// export default (state, action) => {

//     switch(action.type) {
//         case "DELETE_TRANSACTION":
//             return {
//                 ...state,
//                 transactions : state.transactions.filter((t) => t.id !== action.payload),
//             };
//             case "ADD_TRANSACTION":
//                 return {
//                  ...state,
//                  transactions : [action.payload, ...state.transactions],
//                 }; 
//                 default:
//                     return state;  
//     }
// };

export default (state, action) => {
    let transactions;
  
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        transactions = state.filter((transaction) => transaction.id !== action.payload);
  
       localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
      case 'ADD_TRANSACTION':
        transactions = [action.payload, ...state];
  
        localStorage.setItem('transactions', JSON.stringify(transactions));
  
        return transactions;
        
      default:
        return state;
    }
  };
  
