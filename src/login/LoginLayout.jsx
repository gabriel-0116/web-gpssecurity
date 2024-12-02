import React from 'react';
import { useMediaQuery, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LogoImage from './LogoImage';
import fundo from '../resources/images/fundo.svg'

const LoginLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <main className='flex h-screen bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 relative overflow-hidden'>
      <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-white blur-[120px] rounded-full z-0 opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-white blur-[120px] rounded-full z-0"></div>
      <div style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover' }} className="flex justify-center items-center pb-20 lg:w-[28%] md:w-[52] sm:w-0">
      {!useMediaQuery(theme.breakpoints.down('lg')) && <LogoImage color={theme.palette.secondary.contrastText} />}
      </div>
      <div className='flex flex-col justify-center items-center flex-1 shadow-lg shadow-black/25 lg:pr-64 z-10'>
        <h1 className='text-white text-4xl font-bold mb-6 max-[1200px]:opacity-0'>GPS SECURITY</h1>
        <form className='bg-zinc-900 bg-opacity-70 p-8 rounded-lg shadow-2xl w-96 max-w-[328px]'>
          <h1>
            fdsf
          </h1>
          {children}
        </form>
      </div>
      
    </main>
  );
};

export default LoginLayout;
