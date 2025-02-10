const ErrorMessage = (props) => {
  let { items } = props; // Corrected from foodItem to items
  let emptyMessage = items.length === 0 ? <h3>I am still Hungry.</h3> : null;
  
  return <>{emptyMessage}</>;
};

export default ErrorMessage;
