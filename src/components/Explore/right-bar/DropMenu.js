import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    height: '1px',
    border: 'none',
    outline: 'none',
    position: 'relative',
    marginTop: '1.4rem',
    marginLeft: '-2.5rem',
    fontSize: 16,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      backgroundColor: 'transparent',
    }
  },
  item: {
    backgroundColor: 'white',
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const changeColor = (id) => {
    resetAllBackgroundColors();
    document.getElementById(id).style.backgroundColor = "#e5e8e8"
  }
  const resetAllBackgroundColors = () => {
    document.getElementById('about').style.backgroundColor = 'white';
    document.getElementById('Status').style.backgroundColor = 'white';
    document.getElementById('Businesses').style.backgroundColor = 'white';
    document.getElementById('Developes').style.backgroundColor = 'white';
  }
  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          onChange={''}
          input={<BootstrapInput />}>
          <MenuItem id='about' onMouseOver={(e) => changeColor(e.target.id)}>About</MenuItem>
          <MenuItem id='Status' onMouseOver={(e) => changeColor(e.target.id)}>Status</MenuItem>
          <MenuItem id='Businesses' onMouseOver={(e) => changeColor(e.target.id)}>Businesses</MenuItem>
          <MenuItem id='Developes' onMouseOver={(e) => changeColor(e.target.id)}>Developes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}