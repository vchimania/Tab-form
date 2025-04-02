const InterestTab = ({ data, setData, errors }) => {
  const { interest } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label name="painting">
          <input
            type="checkbox"
            name="painting"
            checked={interest.includes("painting")}
            style={{ text: "black" }}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="java"
            checked={interest.includes("java")}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="travelling"
            checked={interest.includes("travelling")}
            onChange={handleChange}
          />
        </label>
      </div>
      {errors.interest && <span className="errors">{errors.interest}</span>}
    </div>
  );
};

export default InterestTab;
