// import React from 'react'

// const Clients = () => { 
//   return (
//     <div>Clients</div>
//   )
// }

// export default Clients
import React, { useState } from 'react'
import Sidebar from '../components/SideBar'
import { Link } from "react-router";
import { Breadcrumbs, Typography, Button, Modal, Box, TextField, MenuItem, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Grid2 } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteBtn from "../components/Buttons/DeleteBtn";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseBtn from "../components/Buttons/CloseBtn";
import { Edit, Delete} from "@mui/icons-material";
// import PrimaryBtn from "../components/Buttons/PrimaryBtn";


const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90vh",
    maxWidth: 700,
    // overflow: hidden, 
    // overflow: scroll,
    bgcolor: "background.paper",
    border: "1px  #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const status = [
    {
      value: "todo",
      label: "To Do",
    },
    {
      value: "in progress",
      label: "In Progress",
    },
    {
      value: "completed",
      label: " Completed",
    },
  ];

const Bank = () => {
    const [open, setOpen] = useState(false);
      const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
  // Delete modal open and close
 const [deleteOpen, setDeleteOpen] = useState(false);
    const handleDeleteOpen = () => {
      setDeleteOpen(true);
    };
    const handleDeleteClose = () => {
      setDeleteOpen(false);
    };
      
  return (
    <div>
    <Sidebar>
    <div className='m-6'>
    <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>

            <Typography sx={{ color: "text.primary" }}>Bank Accounts</Typography>
          </Breadcrumbs>
        </div>
        <div className="flex flex-row flex-wrap place-content-between px-6 gap-x-2 gap-y-4">
          <div>
            <h5 className="text-2xl font-bold">Bank Accounts</h5>
          </div>
          <div>
            <Button variant="contained"   onClick={handleOpen} startIcon={<AddIcon/>} className="bg-[var(--primary1)_!important]">
              Create A/c
            </Button>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
       >
          
          <Box sx={{ ...style }} className="rounded-2xl overflow-y-scroll no-scrollbar">
            <div className='h-fit'>
              <h5 className=" text-2xl font-semibold">Create Accounts</h5>
              <form action="" className="mt-5 flex flex-col gap-y-5">
              <div className='flex space-x-10'>
              <div>
               <label htmlFor="Bankname" >Bank Name</label>
               <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>
            
              <div>
                <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>
              </div>
             
            <div className='flex space-x-10'>
              <div>
                <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>

            <div>
               <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>
              </div>

              <div className='flex space-x-10'>
              <div>
                <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>

              <div>
                <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
              </div>
               </div>

              <div>
              <label htmlFor="Bankname">Bank Name</label>
                <input className='w-full p-2 border rounded ' type="text" placeholder='Bank Name' />
             </div>

              <div className="flex flex-row flex-wrap gap-4 justify-end">
                  <Button onClick={handleClose} variant="contained" color="inherit" >Cancel</Button>
                  <Button color="primary" variant="contained" >Submit</Button>
              </div>



              </form>
            </div>
        //     {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        
       </Box>
        </Modal>

        <Modal
                             open={deleteOpen}
                             onClose={handleDeleteClose}
                             aria-labelledby="child-modal-title"
                             aria-describedby="child-modal-description"
                             className=""
                           >
                             <Box sx={{ ...style, width: 400 }} className="rounded-[.5rem] ">
                               <div className="w-full py-3 ">
                                 <div>Do you want to delete ?</div>
                                 <div className="flex mt-8 justify-end gap-4">
                                   <CloseBtn
                                     onClick={handleDeleteClose}
                                     className={"border border-gray"}
                                   >
                                     Close
                                   </CloseBtn>
                                   <DeleteBtn>Delete</DeleteBtn>
                                 </div>
                               </div>
                             </Box>
                      </Modal>


        <div className="m-6 mt-8 ">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>SL.NO.</TableCell>
                  <TableCell>A/c Holder Name</TableCell>
                  <TableCell>Bank Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Jhon Deo</TableCell>
                  <TableCell>American Bank</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>
                    <IconButton onClick={handleOpen} aria-label="view" color="success">
                      < VisibilityIcon/>
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Prity Bera</TableCell>
                  <TableCell>
                    State Bank of India
                  </TableCell>
                  <TableCell>Active</TableCell>
                  
                  <TableCell>

                  <IconButton onClick={handleOpen} aria-label="view" color="success">
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Prity Bera</TableCell>
                  <TableCell>
                    State Bank of India
                  </TableCell>
                  <TableCell>Active</TableCell>
                  
                  <TableCell>

                  <IconButton onClick={handleOpen} aria-label="view" color="success">
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Prity Bera</TableCell>
                  <TableCell>
                    State Bank of India
                  </TableCell>
                  <TableCell>Active</TableCell>
                  
                  <TableCell>

                  <IconButton onClick={handleOpen} aria-label="view" color="success">
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Prity Bera</TableCell>
                  <TableCell>
                    State Bank of India
                  </TableCell>
                  <TableCell>Active</TableCell>
                  
                  <TableCell>

                  <IconButton onClick={handleOpen} aria-label="view" color="success">
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton onClick={handleOpen} aria-label="edit" color="warning">
                      <EditIcon />
                    </IconButton>

                    <IconButton onClick={handleDeleteOpen} aria-label="delete" color="error">
                      <Delete />
                    </IconButton>

                    {/* delete modal */}
                   

                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>





        
    </Sidebar>
    </div>
  )
}

export default Bank



    
    
