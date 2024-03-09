import { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://shared-brain-api.onrender.com/posts',
        );

        setPosts(response.data);
      } catch (error) {
        setError('Error when searching for posts!');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const generateRandomUserId = () => {
    const randomUserId = Math.random().toString(36).substring(2, 12);
    return randomUserId;
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Sao_Paulo',
    };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);

    return formattedDate;
  };

  return (
    <div className="mt-4 mb-40">
      <h2 className="uppercase font-bold text-2xl mb-4">Posts</h2>
      {loading && <p>Loading posts...</p>}

      {error && <p>{error}</p>}

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id} className="p-2 border-2">
            <div className="flex justify-between mb-2">
              <span className="uppercase">User:{generateRandomUserId()}</span>
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt />
                <p className="text-sm">{formatDate(post.created_at)}</p>
              </div>
            </div>

            <h3 className="text-lg border-b-2 pb-2">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
