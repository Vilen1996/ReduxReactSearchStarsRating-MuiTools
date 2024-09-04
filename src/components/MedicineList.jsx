/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import MedicineItem from "./MedicineItem";
import PropTypes from "prop-types";
import { updateSearchTerm } from "../redux/action";

const MedicineList = ({ medicine, searchTerm, updateSearchTerm }) => {
  const [search, setSearch] = useState(searchTerm || "");

  useEffect(() => {
    setSearch(searchTerm || "");
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    updateSearchTerm(value);
  };

  const filteredMedicine = medicine.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by title"
        style={{ marginBottom: "1rem", padding: "0.5rem" }}
      />
      {filteredMedicine.map((elm) => (
        <MedicineItem key={elm.id} item={elm} />
      ))}
    </div>
  );
};

MedicineList.propTypes = {
  medicine: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  medicine: state.medicine,
  searchTerm: state.searchTerm || "",
});

const mapDispatchToProps = {
  updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList);
