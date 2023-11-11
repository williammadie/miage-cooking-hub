import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, {SwitchProps} from '@mui/material/Switch';
import {DarkModeContext} from '../../context/DarkModeContext';
import {useContext} from "react";
import "./style.css";

const SwitchDarkMode: React.FC<any> = () => {
    const {darkMode,toggleDarkMode} = useContext(DarkModeContext);


    return (
        <FormControlLabel
            control={
                <Switch
                    className="customSwitch"
                    defaultChecked={darkMode}
                    onChange={toggleDarkMode}
                />
            }
            label=""
        />
    );
}
export default SwitchDarkMode;
export type {};