import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function AddForm() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
    console.log('Title:', title);
    console.log('Name:', name);
    // Reset form fields
    setTitle('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default AddForm;
