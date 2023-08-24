import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao obter os posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div id='postsContainer'>
    <ul>
      {posts.map((post) => {
        const author = post.hasOwnProperty('user.name') ? post['user.name'] : 'Desconhecido';

        return (
          <li key={post.id} className='postItem'> {/* Adicione a classe CSS 'postItem' aqui */}
            <p id='author'>{author}</p>
            <p id='content'>{post.content}</p>
          </li>
        );
      })}
    </ul>
  </div>
);
};

export default Posts;