import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='py-8 mt-auto'>
      <div className='max-w-7xl mx-auto px-6 lg:px-12 w-full'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4'>
          <div className='text-left'>
            <p className='text-xs md:text-sm font-open-sans tracking-wide'>
              © 2025. All rights reserved.
            </p>
          </div>

          <div className='flex items-center space-x-6'>
            <a
              href='https://www.linkedin.com/in/mohammed-mahmoud-0684067390/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#0077b5] transition-colors duration-300'
            >
              <Linkedin size={18} />
              <span className='sr-only'>LinkedIn</span>
            </a>

            <a
              href='https://github.com/MohammadMahmoud'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-black transition-colors duration-300'
            >
              <Github size={18} />
              <span className='sr-only'>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
