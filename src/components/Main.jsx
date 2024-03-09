import { useState } from 'react';
import axios from 'axios';

export function Main() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://shared-brain-api.onrender.com/posts/create',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.ok) {
        console.log('successful post:', response.data);
      }
    } catch (error) {
      console.error('Request error:', error.message);
      console.log(formData)
    }
  };

  return (
    <div className="border-b-2">
      <h2 className="uppercase font-bold text-2xl mb-4">
        Make a post <span className="font-normal">( •_•)</span>
      </h2>

      <form
        action="post"
        className="flex flex-col gap-2 border-2 p-4 mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mb-2 outline-none p-4 bg-transparent border-2"
          required
        />
        <label htmlFor="content">Text</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={formData.content}
          onChange={handleChange}
          className="resize-none outline-none p-4 bg-transparent border-2"
          required
        ></textarea>

        <input
          type="submit"
          value="Post"
          className="border-2 w-72 p-4 mt-2 cursor-pointer m-auto hover:bg-white hover:text-[#21273A]"
        />
      </form>
    </div>
  );
}
