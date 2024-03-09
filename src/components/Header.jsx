export function Header() {
  return (
    <div className="mb-4 mt-40">
      <div className="mb-4 border-b-2 ">
        <h1 className="text-4xl uppercase font-bold mb-10 ">Shared Brain</h1>

        <p className="font-bold">Welcome to Shared Brain (￣▽￣)ノ</p>

        <p className="leading-8 text-slate-200 mb-4">
          Here, you are free to express your thoughts, share your stories and
          give free rein to your creativity.
        </p>
      </div>

      <div className="border-b-2">
        <h2 className="uppercase font-bold text-2xl mb-4">rules</h2>

        <div className="mb-4">
          <h2 className="mb-2">(¬_¬) 1. Respect mental diversity &gt;&gt;</h2>
          <p className="ml-5">
            Each mind is unique. Keep a respectful and welcoming environment,
            recognizing the different perspectives.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="mb-2">(¬‿¬) 2. Don&apos;t monopolize &gt;&gt;</h2>{' '}
          <p className="ml-5">
            This is a space for sharing. Encourage collaboration, avoid
            monopolizing discussions and give space to everyone.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="mb-2">( •_•) 3. No content offensive &gt;&gt;</h2>
          <p className="ml-5">
            No words that could hurt. Keep the post constructive and avoid
            offensive or harmful content.
          </p>
        </div>
      </div>
    </div>
  );
}
