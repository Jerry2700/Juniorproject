import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Details.css";
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from "../Navbar/Navbar";
import { useState } from 'react';


function Details() {

    const [projectName, setProjectName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [techStack, setTechStack] = useState('');
  const [projectTheme, setProjectTheme] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [imageLink, setImageLink] = useState(null);
  const [instituteName, setInstituteName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);





    const top100Films = [
        { label: 'Software'},
        { label: 'Hardware'}
      ];

      const Status = [
        { label: 'Completed'},
        { label: 'Under Development'},
        { label: 'Under Search'}

      ];
console.log(selectedCategory)
      
  return (
    <>

    <div>
        <Navbar/>

    </div>

    
       <div className='heading-details'>
       <h5 style={{fontSize:'200%',textDecoration:'underline'}}>Create New Project</h5>
       <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter project Name" id="fullWidth" onChange={(e)=>setProjectName(e.target.value)} />
    </Box>

       </div>

      

       <div className='heading-details'>
       <h1>Project Title</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Title" id="fullWidth"  onChange={(e)=>setProjectTitle(e.target.value)} />
    </Box>

       </div>


        <div className='heading-details'>
       <h1>Project Description</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Project Description" id="fullWidth" onChange={(e)=>setProjectDescription}  />
    </Box>


    <div className='heading-details'>
        <h1>Category</h1>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={selectedCategory}
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" 
      onChange={(event, newValue) => {
        setSelectedCategory(newValue);
      }} />}
    />
       </div>
       </div>
       <br /><br /><br />
       <hr />


       <div className='heading-details'>
       <h1 style={{fontSize:'200%',textDecoration:'underline'}}>Project Details </h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Details" id="fullWidth" onChange={(e)=>setProjectDetails(e.target.value)}  />
    </Box>

       </div>


       
       <div className='heading-details'>
       <h1 >Tech Stack</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Tech Stack" id="fullWidth" onChange={(e)=>setTechStack(e.target.value)}  />
    </Box>

       </div> 

       <div className='heading-details'>
       <h1 >Project Theme</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Project Theme" id="fullWidth" onChange={(e)=>setProjectTheme(e.target.value)}  />
    </Box>

       </div>  

       <div className='heading-details'>
       <h1 >Project Link</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Project Link" id="fullWidth"  onChange={(e)=>setProjectLink(e.target.value)} />
    </Box>

       </div>  


       <div className='heading-details'>
       <h1 > Video Link</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label=" Video Link" id="fullWidth" onChange={(e)=>setVideoLink(e.target.value)}  />
    </Box>

       </div>

       <div className='heading-details'>
       <h1 > Image Link</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
     <input type="file" name="" id="" />
    </Box>

       </div>
  <br /> <br />
       <hr />


       <div className='heading-details'>
       <h1 style={{fontSize:'200%',textDecoration:'underline'}}>Team Details  </h1>

       </div>   


       <div className='heading-details'>
       <h1 >Institute Name</h1>
       <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    > 
      <TextField fullWidth label="Enter University Name" id="fullWidth"  onChange={(e)=>setInstituteName(e.target.value)} />
    </Box>

       </div>


       <div className='heading-details'>
        <h1>Status</h1>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Status}
      sx={{ width: 300 }}
      value={selectedStatus}
      renderInput={(params) => <TextField {...params} label="Status" 
      onChange={(event, newValue) => {
        setSelectedStatus(newValue);
      }}/>}
    />
       </div>


       


       




    </>
    )
}

export default Details