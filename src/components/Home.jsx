import React, { useEffect, useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import usePostStore from '../store/post';

function Home() {
  const posts = usePostStore((state) => state.posts);
  const fetchPosts = usePostStore((state) => state.fetchPost);
  const postData = usePostStore((state) => state.postData);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    postData(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Our Website!
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit" >
          Add Post
        </Button>
      </form>
      {posts.map((ele, i) => (
        <Typography key={i} variant="body2">
          <span>{i + 1}.....</span>
          {ele.title}
        </Typography>
      ))}
    </Container>
  );
}

export default Home;
