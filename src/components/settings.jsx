const SettingTab = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SettingTab;
