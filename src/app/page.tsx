import About from '@/components/pages/about';
import { Contact } from '@/components/pages/contact';
import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../public/images/profile-picture.jpg';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[85vh] mt-16'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12 w-full'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8'>
          <div className='flex-1 text-center md:text-left space-y-4'>
            <h2 className='text-xl md:text-2xl font-medium font-sans'>
              Hi, I'm Mohammed
            </h2>

            <h1 className='text-2xl md:text-4xl font-extrabold leading-[1.15] tracking-tight'>
              a problem-solving Technical Lead focused on clean architecture,
              code quality, and polished user experiences end to end.
            </h1>

            <div className='pt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start'>
              <Link
                href='#about'
                className='px-10 py-4  text-sm font-bold uppercase tracking-wider rounded shadow-lg hover:-translate-y-1 transition-all duration-300'
              >
                About Me
              </Link>
              <Link
                href='#contact'
                className='px-10 py-4 bg-transparent border-2 border-gray-200 text-sm font-bold uppercase tracking-wider rounded hover:border-gray-900 hover:bg-gray-50 dark:hover:text-black transition-all duration-300'
              >
                Contact
              </Link>
            </div>
          </div>

          <div className='flex-1 flex justify-center md:justify-end'>
            <div className='relative w-72 h-80 md:w-[450px] md:h-[550px] shadow-2xl rounded-lg overflow-hidden shadow-gray-200'>
              <Image
                src={profilePicture}
                alt='Mohammed Portrait'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
        <About />
        <Contact />
      </div>
    </div>
  );
}
