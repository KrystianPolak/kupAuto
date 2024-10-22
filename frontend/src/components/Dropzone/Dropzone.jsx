import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Button, List, ListItem, ListItemText, Alert } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const DropzoneComponent = () => {
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
        setErrorMessage(''); 
    },
    onDropRejected: () => {
        setErrorMessage('Niepoprawny format pliku. Można przesyłać tylko zdjęcia .jpg, .jpeg, .png');
      },
    accept: {
        'image/jpeg': ['.jpg', '.jpeg'],
        'image/png': ['.png']
      }
  });

  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Box
      {...getRootProps({
        onClick: (event) => {
          if (event.target.tagName === 'svg' || event.target.tagName === 'path') {
            event.stopPropagation();
          }
        }
      })}
      sx={{
        border: '2px dashed #cccccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#eeeeee' : '#fafafa'
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="h6">
        {isDragActive ? 'Upuść pliki tutaj...' : 'Przeciągnij i upuść pliki tutaj lub kliknij, aby wybrać pliki'}
        
      </Typography>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      {files.length > 0 && (
        <List>
          {files.map((file, index) => (
            <ListItem key={index}>
              <ListItemText primary={file.name} /><CancelIcon onClick={() => handleRemoveFile(index)}  sx={{
              cursor: 'pointer', 
              '&:hover': {
                color: 'red', 
              }
            }} ></CancelIcon>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default DropzoneComponent;
