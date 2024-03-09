import { FaRegCalendarAlt } from 'react-icons/fa';

export function Posts() {
  return (
    <div className="mt-4 mb-40">
      <h2 className="uppercase font-bold text-2xl mb-4">Posts</h2>

      <div className="p-2 border-2">
        <div className="flex justify-between mb-2">
          <span>User: 1242a6cc8904</span>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt />
            <p>03/08/2022</p>
          </div>
        </div>

        <h3 className="text-lg border-b-2 pb-2">title</h3>
        <p className='mt-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
          reprehenderit distinctio. Maiores magni, sed veritatis nemo assumenda
          repudiandae ipsam similique, dolor a recusandae alias, explicabo
          officiis perferendis vero? Beatae, dolor.
        </p>
      </div>
    </div>
  );
}
