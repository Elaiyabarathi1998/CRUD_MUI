import React, { useState,useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../component/demo.css'

function Demo() {
    const [name, setName] = useState('');
    const [namesList, setNamesList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCreate = () => {
        if (name) {
            setNamesList([...namesList, name]);
            setName('');
        }
    };

    const handleDelete = (index) => {
        setNamesList(namesList.filter((_, i) => i !== index));
        setEditingIndex(null);
      };
      

    const handleEdit = (index) => {
        setEditingIndex(index);
        setName(namesList[index]);
    };

    const handleSaveEdit = () => {
        if (editingIndex !== null && name) {
            const updatedNamesList = [...namesList];
            updatedNamesList[editingIndex] = name;
            setNamesList(updatedNamesList);
            setEditingIndex(null);
            setName('');
        }
    };

    return (
        <>
            <div>
                <AppBar position='sticky' sx={{
                                borderRadius:'5px',
                                fontFamily:'sans-serif'
                            }} >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                width: '10%',
                                backgroundColor: 'white',
                                padding: '8px',
                                color: 'black',
                                borderRadius:'5px',
                            fontFamily:'sans-serif'
                            }}
                        >
                            CRUD
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                marginLeft: 'auto',
                                backgroundColor: 'blue',
                                color: 'white',
                                width: '150px',
                                height: '30px',
                            }}
                        >
                            Click Me
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginTop: '20px'
                }}
            >
                <Box className={`fade-in ${ isVisible ? 'visible' : ''}`} style={{  backgroundColor: ' #bdcebe', display: 'flex', flexDirection: 'column', gap: '10px', width: '40%', marginBottom: '20px',padding:'20px',borderRadius:'5px',
                            fontFamily:'sans-serif' }}>
                    <Typography
                        variant="h6"
                        style={{
                            backgroundColor: '#deeaee',
                            padding: '8px',
                            color: '#034f84',
                            textAlign: 'start',
                            borderRadius:'5px',
                            fontFamily:'sans-serif',
                            textAlign:'center',
                        }}
                    >
                        CRUD - Operation With MUI
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Enter name"
                        variant="outlined"
                        value={name}
                        onChange={handleNameChange}
                        sx={{
                            width: '100%',
                            height: '40px',
                            marginBottom: '20px'
                        }}
                    />
                    {editingIndex !== null ? (
                        <Button
                            variant="contained"
                            onClick={handleSaveEdit}
                            sx={{
                                marginRight: 'auto',
                                backgroundColor: 'green',
                                color: 'white',
                                width: '150px',
                                height: '30px',
                            }}
                        >
                            Save Edit
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={handleCreate}
                            sx={{
                                marginRight: 'auto',
                                backgroundColor: 'blue',
                                color: 'white',
                                width: '150px', // Adjust the width as needed
                                height: '30px', // Adjust the height as needed
                            }}
                        >
                            Create
                        </Button>
                    )}
                </Box>
            </div>
            <div>
            <Box
          sx={{
            padding: '10px',
            marginLeft: '25%',
            marginRight: '25%',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: '5px', backgroundColor: 'none', borderRadius: '5px', border: 'none', paddingLeft: '10px' }}>
            {namesList.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10px',
                  margin: '10px',
                  border: '2px solid grey',
                  borderRadius: '4px',
                  fontFamily:'sans-serif'
                }}
              >
                <div>{item}</div>
                <IconButton
                  onClick={() => handleEdit(index)}
                  aria-label="Edit"
                  sx={{ marginLeft: 'auto', color: 'blue' }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(index)}
                  aria-label="Delete"
                  sx={{ marginLeft: '10px', color: 'red' }}
                >
                  <DeleteIcon />
                </IconButton>
              </li>
            ))}
          </ul>
        </Box>


            </div>
        </>
    );
}

export default Demo;
