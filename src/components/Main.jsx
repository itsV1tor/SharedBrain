export function Main() {
  return (
    <div className="border-b-2">
      <h2 className="uppercase font-bold text-2xl mb-4">
        Make a post <span className="font-normal">( •_•)</span>
      </h2>

      <form action="post" className="flex flex-col gap-2 border-2 p-4 mb-4">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="mb-2 outline-none p-4 bg-transparent border-2"
          required
        />
        <label htmlFor="content">Text</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
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
