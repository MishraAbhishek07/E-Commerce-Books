import { Allroutes } from './routes/Allroutes';
import { Header, Footer } from './components';

export const App = () => {
  return (
    <div className='min-h-screen flex flex-col dark:bg-gray-800'>
      <Header/>
      <main className='flex-grow px-5'>
        <Allroutes/>
      </main>
      <Footer/>
    </div>
  );
};
