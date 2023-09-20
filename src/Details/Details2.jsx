import React from 'react';
import "./Details2.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from "../Navbar/Navbar";
import Table from '../Table';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';


function Details2() {
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

      const handlesubmit=()=>{
        console.log(projectName);
        console.log(projectTitle);
        console.log(projectDescription);
        // console.log(selectedCategory);
        console.log(projectDetails);
        console.log(techStack);
        console.log(projectTheme);
        console.log(projectLink);
        console.log(videoLink);
        console.log(instituteName);
        // console.log(selectedStatus);

        const token = localStorage.getItem("token");
        


        axios
      .post(
        "link-add-karo-harmazaado-isme",
        { projectName:projectName,
          projectTitle:projectTitle,
          projectDescription:projectDescription,
          projectDetails:projectDetails,
          techStack:techStack,
          projectTheme:projectTheme,
          projectLink:projectLink,
          videoLink:videoLink,
          instituteName:instituteName,

         },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
       
      })
      .catch((error) => {
        console.log(error);
      });
        
        }
              

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
      <TextField fullWidth label="Enter Project Title" id="fullWidth" 
      onChange={(e)=>setProjectName(e.target.value)} />
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
      <TextField fullWidth label="Enter Project Title" id="fullWidth"
      onChange={(e)=>setProjectTitle(e.target.value)}  />
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
      <TextField fullWidth label="Enter Project Title" id="fullWidth"
      onChange={(e)=>setProjectDescription(e.target.value)}  />
    </Box>
    

       </div>

       





    </div>
    


</div>

{/* <div className='heading-details' style={{marginBottom:'2rem'}}>
        <h1>Category</h1>
       <Autocomplete
      disablePortal
      id="combo-box-demo"
     
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" 
       />}
    />
       </div> */}


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
      <TextField fullWidth label="Tech Stack" id="fullWidth" 
      onChange={(e)=>setTechStack(e.target.value)} />
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
      <TextField fullWidth label="Enter Project Theme" id="fullWidth" 
      onChange={(e)=>setProjectTheme(e.target.value)}  />
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
      <TextField fullWidth label="Enter Project Link" id="fullWidth" 
      onChange={(e)=>setProjectLink(e.target.value)} />
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
      <TextField fullWidth label=" Video Link" id="fullWidth" 
       onChange={(e)=>setVideoLink(e.target.value)}  />
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
      <TextField fullWidth label="Enter University Name" id="fullWidth"  onChange={(e)=>setInstituteName(e.target.value)} />
    </Box>

       </div>


    </div>


   

</div>

<div>
    <Table/>
</div>


<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'3rem',marginTop:'3rem'}}>
<Button variant="contained" color="success" onClick={handlesubmit}>
        Submit
      </Button>
</div>


</>
    )
}

export default Details2