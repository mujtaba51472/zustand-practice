import axios from 'axios';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  posts: [],
  fetchPost: async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = resp.data;
      set({ posts: data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
  postData: async (title, body) => {
    try {
      const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
      });
      const newPost = resp.data;
      set((state) => ({ posts: [...state.posts, newPost] }));
    } catch (error) {
      console.error('Error creating post:', error);
    }
  },
});

const persistedStore = persist(store, { name: 'store' });
const usePostStore = create(devtools(persistedStore));

export default usePostStore;
