const Footer = ({ handleShowModal, title, by }) => {
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h1>{by}</h1>
        <h2>{title}</h2>
      </div>
      <button onClick={handleShowModal}>
        <i className='fa-solid fa-circle-info'></i>
      </button>
    </footer>
  );
};
export default Footer;
