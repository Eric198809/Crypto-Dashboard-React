

const ToTop = () => {
  return (
  <div className="top" onClick={()=> window.scrollTo(top)}>
    <img src="./assets/arrow-icon.svg" alt="arrow" />
  </div>
  );
};

export default ToTop;