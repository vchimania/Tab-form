import { useState } from "react";
import InterestTab from "./interests";
import ProfileTab from "./profile-tab";
import SettingTab from "./settings";

const TabForm = () => {
  const tabs = [
    {
      name: "Profile",
      component: ProfileTab,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }
        if (!data.age || data.age < 13) {
          err.age = "Age is not valid";
        }
        setErrors(err);
        return err.age || err.name || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: InterestTab,
      validate: () => {
        const err = {};
        if (!data.interest || data.interest.length < 1) {
          err.interest = "Select atleast one interest";
        }
        setErrors(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: SettingTab,
      validate: () => {
        return true;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Vini",
    age: 25,
    email: "vini@gmail.com",
    interest: ["painting", "travelling"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});

  const ActiveTabCommponent = tabs[activeTab].component;

  const handlePrev = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log({ data });
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabCommponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && (
          <button type="button" onClick={handlePrev}>
            Prev
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button type="button" onClick={handleNext}>
            nexxt
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
