import React from 'react';
import "./Details2.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from "../Navbar/Navbar";
import Table from '../Table';


function Details2() {
  return (
<>

<div>
    <Navbar/>
    

</div>


<div style={{display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'underline'}}>
    <h1>Create a ProJect</h1>
</div>


<div className="details2-home">
    <div>
    <div className='heading-details'>
       <span>Project Name</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Title" id="fullWidth"  />
    </Box>

       </div>
    </div>
    

    <div>
    <div className='heading-details'>
       <span>Project Title</span>

       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Title" id="fullWidth"  />
    </Box>

       </div>
    </div>

    <div>
    <div className='heading-details'>
       <span>Project Description</span>

       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Title" id="fullWidth"  />
    </Box>

       </div>
    </div>


</div>


<div style={{display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'underline'}}>
    <h1>Project Details</h1>
</div>


<div className="details2-home">
    <div>
    <div className='heading-details'>
       <span>Tech Stack</span>

       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Tech Stack" id="fullWidth"  />
    </Box>

       </div>
    </div>

    <div>
    <div className='heading-details'>
       <span>Project Theme</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Theme" id="fullWidth"  />
    </Box>

       </div>
    </div>

    <div>
    <div className='heading-details'>
       <span>Project Link</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Link" id="fullWidth"  />
    </Box>

       </div>
    </div>


</div>
<br /><br />


<div className="Home-Details2">

<div className='heading-details'>
       <span>Video Link</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label=" Video Link" id="fullWidth"   />
    </Box>

       </div>


       <div className='heading-details'>
       <span>Image Link</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
     <input type="file" name="" id="" />
    </Box>

       </div>



</div>



<div style={{display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'underline'}}>
    <h1>Team Details</h1>
</div>


<div className="details2-home">
    <div>
    <div className='heading-details'>
       <span>Institute Name</span>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Tech Stack" id="fullWidth"  />
    </Box>

       </div>


    </div>


   

</div>

<div>
    <Table/>
</div>


</>
    )
}

export default Details2