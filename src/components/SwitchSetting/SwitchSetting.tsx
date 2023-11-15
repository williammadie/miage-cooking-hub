import { styled, Switch, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import searchSettingImg from "../../assets/settings.png";
import "./style.css";

type SwitchSettingProps = {
  switchStatus: (status: boolean) => void;
};      

const AntSwitch = styled(Switch)(() => ({
  composes: 'AntSwitch',
  }));

const SwitchSetting: React.FC<SwitchSettingProps> = ({ switchStatus }) => {
  const [checked, setChecked] = useState(true);
  const { darkMode } = useContext(DarkModeContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    switchStatus(newChecked);
  };

  return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className = "search-switch-content"style={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Recipe</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} color="secondary"
            onChange={handleChange}
            checked = {checked}
            />
            <Typography className="text-css">Ingredient</Typography>
          </div>
            <img
            src={searchSettingImg}
            className={`magnifier-img ${
              darkMode ? "grey-color-image" : "inverse-color-image"
            }`}
            alt="search-setting"
          ></img>
        </form>
      );
};

export default SwitchSetting;
export type { SwitchSettingProps };
