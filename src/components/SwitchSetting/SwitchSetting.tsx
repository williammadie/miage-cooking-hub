import { styled, Switch, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import "./style.css";

type SwitchSettingProps = {
  switchStatus: (status: boolean) => void;
};      

const AntSwitch = styled(Switch)(() => ({
  composes: 'AntSwitch',
  }));

const SwitchSetting: React.FC<SwitchSettingProps> = ({ switchStatus }) => {
  const [searchByIngredient, setsearchByIngredient] = useState(true);
  const { darkMode } = useContext(DarkModeContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setsearchByIngredient(newChecked);
    switchStatus(newChecked);
  };

  return (
    <form style={{ all: 'unset' }}>
          <div className = {`search-switch-content ${
            darkMode
              ? "color-font-light hover-shadow-light"
              : "color-font-dark hover-shadow-dark"
          }`}
          style={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography>Recipe</Typography>
            <AntSwitch inputProps={{ 'aria-label': 'ant design' }} color="secondary"
            onChange={handleChange}
            checked = {searchByIngredient}
            />
            <Typography className="text-css">Ingredient</Typography>
          </div>
          </form>
      );
};

export default SwitchSetting;
export type { SwitchSettingProps };
