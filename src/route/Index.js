import * as React from 'react';
import { Routes, Route} from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import App from '../App'
import About from '../component/About'
import Home from '../component/Home';
import Chat from '../component/Chat';
import Login from '../component/Login'
import PageNotFound from '../component/PageNotFound'
import Register from '../component/Register';

function Index() {
  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Paper>
      </Box>
    </div>
  );
}

export default Index;
