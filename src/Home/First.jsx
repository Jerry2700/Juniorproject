import MediaCard from "../MUI/Card";
import "./First.css";
import TextField from '@mui/material/TextField';
import SearchAppBar from "../Navbar/Navbar";



function First() {
  return (
    <>
       <SearchAppBar/>

   
        
        <div className='Home-heading'>
            <span className='Home-h1' >

              <span style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'5rem'  }}>
                <p style={{margin:'0'}}> InSpire</p>
              </span> 
              <span>  Collaborate/Innovate </span>
            
            </span>
            {/* <h1> Creative Minds</h1> */}


            
            
        </div>
        
        <div className="Upload-search">
              <div className="upload-search-div1">
              <TextField id="outlined-basic" label="Upload Project UrL" variant="outlined" className="upload-field"  />

              </div>
              <div className="upload-search-div2">
              <TextField id="outlined-basic" label="Search Project" variant="outlined" className="upload-field" />

              </div>

            </div>


            <div className="Project">
              <h1 className="project-h1">Project</h1>
            </div>

            <div className="card-grid">
              <div className="card-grid-div" > 
               <MediaCard/>

              </div> <br />
              

              <div className="card-grid-div">
              <MediaCard/>

              </div> <br />

              <div className="card-grid-div">
              <MediaCard/>

              </div>
                 <div className="card-grid-div" > 
               <MediaCard/>

              </div> <br />
              

              <div className="card-grid-div">
              <MediaCard/>

              </div> <br />

              <div className="card-grid-div">
              <MediaCard/>

              </div>

            </div>

            
    </>
  )
}

export default First