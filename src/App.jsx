import { Header } from './components/Header';
import { Main } from './components/Main';
import { Posts } from './components/Posts';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="font-silkscreen text-white max-w-[1024px] m-auto flex flex-col justify-center px-8">
      <Header />
      <Main />
      <Posts />
      <Footer/>
    </div>
  );
}
