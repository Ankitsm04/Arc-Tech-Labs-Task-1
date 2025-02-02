import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import DataTable from './components/DataTable';
import MindMap from './components/MindMap';
import { Button , Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{mt:2}}>
        <Link to='/'>
          <Button variant='contained' sx={{mx:1}}>
            Table
          </Button>
        </Link>
        <Link to='/mindmap'>
          <Button variant='contained' sx={{mx:1}}>
            Mind Map
          </Button>
        </Link>
      </Box>

      <Routes>
        <Route path='/' element={<DataTable/>} />
        <Route path='/mindmap' element={<MindMap/>} />
      </Routes>
    </Router>
  );
};

export default App
