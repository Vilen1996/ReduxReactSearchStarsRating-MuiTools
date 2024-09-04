/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";
import { updateRating } from "../redux/action";

const MedicineItem = ({ item, updateRating }) => {
  const handleStarClick = (stars) => {
    updateRating(item.id, stars);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 2,
        maxWidth: 300,
        marginBottom: 2,
      }}
    >
      <p>{item.title}</p>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon
            key={index}
            sx={{
              color: index < item.stars ? "#FFD700" : "#ccc",
              cursor: "pointer",
            }}
            onClick={() => handleStarClick(index + 1)}
          />
        ))}
      </Box>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
};

MedicineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  updateRating: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  updateRating,
};

export default connect(null, mapDispatchToProps)(MedicineItem);
