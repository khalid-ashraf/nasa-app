const Main = ({ imgURL, title }) => {
  return (
    <div className='imageContainer'>
      <img src={imgURL} alt={title} className='bgImage' />
    </div>
  );
};
export default Main;
