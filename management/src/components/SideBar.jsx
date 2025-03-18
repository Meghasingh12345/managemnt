import { Button, Container, TextField } from '@mui/material'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TaskIcon from '@mui/icons-material/Task';
import FolderIcon from '@mui/icons-material/Folder';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION = [
  
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Projects',
    title: 'Projects',
    icon: <FolderIcon />,
  },
  
  {
    segment: 'Tasks',
    title: 'Tasks',
    icon: <TaskIcon />,
    
  },
  {
    segment: 'Invoices',
    title: 'Invoices',
    icon: <DescriptionIcon />,
  },
  {
    segment: 'Teams',
    title: 'Teams',
    icon: <GroupsIcon />,
  },
  {
    segment: 'Contracts',
    title: 'Contracts',
    icon: <ListAltIcon />,
  },
  {
    segment: 'Reports',
    title: 'Reports',
    icon: <AssessmentIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function SideBar(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      
    >
      <DashboardLayout>
        <div className='m-4'>{props.children}</div>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default SideBar;