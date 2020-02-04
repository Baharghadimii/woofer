import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab style={{ minWidth: 100, fontWeight: '700', fontSize: '13px' }} label="For you" />
        <Tab style={{ minWidth: 100, fontWeight: '700', fontSize: '13px' }} label="News" />
        <Tab style={{ minWidth: 100, fontWeight: '700', fontSize: '13px' }} label="Sports" />
        <Tab style={{ minWidth: 100, fontWeight: '700', fontSize: '13px' }} label="Fun" />
        <Tab style={{ minWidth: 100, fontWeight: '700', fontSize: '13px' }} label="Entertainment" />
      </Tabs>
    </Paper>
  )
}