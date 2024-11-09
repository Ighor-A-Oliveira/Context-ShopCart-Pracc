import { IoIosStar } from "react-icons/io";



// eslint-disable-next-line react/prop-types
const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        /* onClick={() => onClick(i)}, this line passes the i (index of the specif star) to the Rating component declared on SideMenu.jsx */
        /* This way we have the placement of the clicked star and know how many empty and filled stars need to be rendered */
        /* <Rating rating={rate} onClick={ (i) => setRate(i + 1)} />, we only have access to i here because it was passed up by Rating.jsx */
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <IoIosStar fontSize="15px" style={{ color: 'gold' }} />
          ) : (
            <IoIosStar fontSize="15px" style={{ color: 'gray' }} />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
