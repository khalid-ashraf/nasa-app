const Sidebar = ({ handleShowModal, title, description }) => {
  return (
    <div className='sidebar'>
      <div className='bgOverlay' onClick={handleShowModal}></div>
      <div className='sidebarContents'>
        <h2>{title}</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>Description</p>
          <p>{description}</p>
        </div>
        <button onClick={handleShowModal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
