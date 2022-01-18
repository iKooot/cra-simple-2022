import React from 'react';
import {Switch, FormGroup, FormControlLabel} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {themeActions} from '../../../store/theme/theme.state'

const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const { mode } = useSelector( state => state.theme)

    return (
        <FormGroup>
            <FormControlLabel onChange={() => dispatch(themeActions.toggleTheme())} control={<Switch defaultChecked />} label={mode} />
        </FormGroup>
    )
}

export default ThemeSwitcher