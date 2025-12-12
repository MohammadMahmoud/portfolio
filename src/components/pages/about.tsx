import { Download, Layout, Server } from 'lucide-react';

import Badge from '@/components/atoms/badge';
import CV from '../../../public/images/CV.png';
import Card from '@/components/molecules/card';
import Image from 'next/image';
import MyPicture from '../../../public/images/me.jpeg';
import Separator from '@/components/atoms/separator';
import Timeline from '@/components/molecules/timeline';

export default function About() {
  return (
    <div className='min-h-screen pb-20' id='about'>
      <div className='max-w-7xl mx-auto py-12 md:py-20'>
        <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-center md:text-left font-montserrat'>
          About Me
        </h1>

        <div className='flex flex-col md:flex-row gap-12 items-start'>
          <div className='w-full md:w-1/3 flex justify-center md:justify-start'>
            <div className='relative w-72 h-80 md:w-full md:h-[600px] rounded-xl overflow-hidden shadow-2xl shadow-gray-700 dark:shadow-gray-200'>
              <Image
                src={MyPicture}
                alt='Mohammed Profile'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          <div className='w-full md:w-2/3 space-y-8'>
            <div className='leading-relaxed'>
              <h3 className='text-2xl font-bold mb-4 font-montserrat'>
                Career
              </h3>
              <p>
                Hands-on Technical Lead and Full-Stack Engineer with 10+ years
                of experience in designing scalable systems, writing
                production-grade code, and solving complex architectural
                challenges. Specialized in Typescript, React, Next.js, Node.js,
                AWS, Azure, and GCP. Proven track record in mentoring engineers,
                improving code quality, and delivering system design solutions
                with advanced UI/UX polish.
              </p>
              <br />
              <p>
                Today, I lead the architect for digital contracting at Ayvens in
                Hamburg, where I architect cloud-native solutions, improve CI/CD
                and Kubernetes workflows, and still contribute directly in React
                Next.js, Node.js Before that, I shipped internal portals, B2B
                shops, and mobile apps at Engel & Völkers, Swarovski, DBK, and
                agencies, working end to end from UI to cloud infrastructure.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Card className='p-6 hover:shadow-md transition-shadow'>
                <Layout className='w-8 h-8 text-blue-700 dark:text-red-700 mb-4' />
                <h4 className='font-bold text-lg mb-2'>
                  Front-end Engineering
                </h4>
                <ul className='text-sm space-y-1 list-disc pl-4'>
                  <li>
                    React and Next.js UIs for high-traffic B2B/B2C products.
                  </li>

                  <li>
                    Clear user flows for complex leasing and e-commerce
                    journeys.
                  </li>
                  <li>
                    Collaborative iteration with product, design, and
                    stakeholders.
                  </li>
                  <li>Strong testing culture with Jest and Playwright.</li>
                </ul>
              </Card>

              <Card className='p-6 hover:shadow-md transition-shadow'>
                <Server className='w-8 h-8 text-blue-700 dark:text-red-700 mb-4' />
                <h4 className='font-bold text-lg mb-2'>Back-end Engineering</h4>
                <ul className='text-sm space-y-1 list-disc pl-4'>
                  <li>
                    Node.js services powering portals, leasing flows, and B2B
                    shops.
                  </li>
                  <li>
                    REST and GraphQL APIs backed by MySQL, PostgreSQL, and
                    MongoDB.
                  </li>
                  <li>
                    Cloud-native deployments on AWS, GCP, and Azure with
                    Kubernetes and CI/CD.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Separator className='max-w-7xl mx-auto' />

      <div className='max-w-7xl mx-auto py-16'>
        <h3 className='text-3xl font-bold mb-8 font-montserrat'>Personality</h3>
        <p className='text-lg leading-relaxed'>
          I enjoy tackling complex problems, making sound decisions even with
          limited information, and sweating the small details when they matter
          most. Colleagues experience me as a supportive team player who listens
          well, communicates openly, and helps others grow.
        </p>
        <br />
        <p className='text-lg leading-relaxed'>
          I combine a logical, structured way of thinking with creativity and
          empathy, staying calm under pressure and adaptable when plans need to
          change. Organized and energized by new challenges, I value trust,
          ownership, and working closely with others to deliver meaningful
          results.
        </p>
      </div>

      <Separator className='max-w-7xl mx-auto' />

      <div className='max-w-7xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='text-3xl font-bold font-montserrat'>Resume</h3>
            <a
              href='https://1drv.ms/b/c/61c65ca689ea76a3/Ea5FqTY4JmBNq4o4Kzzel2wB0HO5fCDuSoUmStZit7e0iQ?e=pr4zoG'
              className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded hover:bg-background transition-colors'
            >
              <Download size={16} /> Download
            </a>
          </div>
          <div className='relative w-full h-64 md:h-80 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50 flex items-center justify-center group cursor-pointer'>
            <div className='absolute inset-0 bg-background flex items-center justify-center'>
              <span className='text-gray-400 font-medium'>Preview CV</span>
            </div>

            <Image
              src={CV}
              alt='Resume Preview'
              fill
              priority
              className='object-contain p-4 group-hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>

        <div>
          <h3 className='text-3xl font-bold mb-6 font-montserrat'>Skills</h3>
          <div className='flex flex-wrap gap-2'>
            {[
              'HTML',
              'CSS',
              'Javascript',
              'Typescript',
              'React',
              'Next.js',
              'Node js',
              'Express js',
              'Fastify',
              'Go',
              'AWS',
              'Azure',
              'GCP',
              'Kubernetes',
              'CI/CD (Jenkins, pipelines)',
              'Jest',
              'Mocha',
              'Chai',
              'Playwright',
            ].map((skill) => (
              <Badge key={skill}>
                <span className='text-sm py-1 px-1'>{skill}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-background py-16'>
        <div className='max-w-7xl mx-auto'>
          <h3 className='text-3xl font-bold mb-12 font-montserrat'>
            My Experiences
          </h3>

          <div className='space-y-12'>
            <Timeline
              role='Technical Lead'
              company='Ayvens (formerly ALD Automotive)'
              location='Hamburg, Germany'
              date='2020 Oct – Present'
              description='Leading engineering for digital contracting, from architecture and cloud to hands-on delivery in React and Node.js.'
              responsibilities={[
                '<b>Team Leadership:</b> Scaled the engineering team from 0 to 3 members by redesigning the technical interview process, resulting in a 30% reduction in time-to-hire.',
                '<b>Architecture:</b> Architected a system design solution for Digital Contracting, resolving a critical blocker and enabling fully legal, compliant digital leasing for B2B/B2C customers.',
                '<b>Code Quality:</b> Improved code quality by 30% through the implementation of strict Azure devops pipelines, code reviews, and mentorship programs.',
                '<b>Performance:</b> Reduced deployment time by 40% by optimizing Kubernetes workflows and Azure infrastructure.',
                '<b>Hands-on:</b> Maintained a 50-80% contribution rate to the codebase (React/Next.js/Node.js/Typescript) while managing high-level system design.',
              ]}
              skills={[
                'React.js',
                'Next.js',
                'Node.js',
                'TypeScript',
                'Microsoft Azure',
                'Systems Design',
                'Test Automation',
                'Mentoring',
              ]}
            />

            <Timeline
              role='Software Engineer'
              company='Swarovski'
              location='Hamburg, Germany'
              date='2020 Apr – 2020 Aug'
              description='Worked on Swarovski Professional B2B e-commerce platform and internal tools.'
              responsibilities={[
                '<b>B2B Commerce:</b> Developed and maintained the Swarovski Professional B2B Online Shop using React.js, GraphQL, Express.js, TypeScript',
                '<b>CMS Development:</b> Engineered a custom-made Content Management System (CMS) to streamline product updates for the marketing team',
                '<b>Cloud:</b> Deployed and managed services on AWS, ensuring high availability for global B2B traffic',
              ]}
              skills={[
                'React.js',
                'Node.js',
                'Express.js',
                'GraphQL',
                'TypeScript',
                'Test Automation',
                'Amazon Web Services (AWS)',
              ]}
            />

            <Timeline
              role='Software Engineer'
              company='Engel & Völkers'
              location='Hamburg, Germany'
              date='2018 Apr – 2020 Apr'
              description='Developed internal platforms and financial tools for the real estate company'
              responsibilities={[
                "<b>Portal Development:</b> Built the 'EV-World Portal,' the central internal platform connecting all employees and managing agent profiles using React.js and GCP",
                "<b>FinTech:</b> Developed the 'Transaction Service,' a critical financial tool for monitoring deals, payments, and invoices, ensuring data accuracy for the financial department using Koa.js and GCP",
                '<b>Stack:</b> Utilized Koa.js/PHP for backend logic and React.js/SASS for a responsive front-end interface',
              ]}
              skills={[
                'React.js',
                'Koa.js',
                'PHP',
                'Node.js',
                'Test Automation',
                'Jenkins',
                'Kubernetes',
                'Google Cloud Platform (GCP)',
              ]}
            />

            <Timeline
              role='Software Engineer'
              company='DBK'
              location='Groningen, Netherlands'
              date='2017 Jul – 2018 Feb'
              description='Full-stack and mobile development for career and VR-related products.'
              responsibilities={[
                "<b>Mobile Development:</b> Led the redevelopment of the 'Karreer' mobile application using Ionic 3/TypeScript, improving performance and user experience",
                '<b>Full Stack:</b> Mastered Laravel within a short timeframe to support backend API development and legacy system migration',
                '<b>Adaptability:</b> Successfully relocated and integrated into a new Dutch engineering culture, quickly taking ownership of critical project deliverables',
              ]}
              skills={[
                'Laravel',
                'PHP',
                'Angular 2',
                'Ionic Framework',
                'TypeScript',
                'Mobile Applications',
              ]}
            />

            <Timeline
              role='Full Stack Web Developer'
              company='The Creative Zone'
              location='Cairo, Egypt'
              date='2014 Dec – 2017 Jun'
              description='Developed custom websites and e-commerce solutions for various clients.'
              responsibilities={[
                '<b>Web Development:</b> Progressed from junior developer to full-stack contributor, building custom websites using HTML5, CSS3, jQuery, and PHP',
                '<b>CMS:</b> Specialized in WordPress and WooCommerce development, delivering e-commerce solutions for varied clients',
                '<b>Optimization:</b> Reduced development turnaround time for static pages from 1 week to a few hours through efficient coding practices and template reuse',
              ]}
              skills={[
                'Angular',
                'jQuery',
                'PHP',
                'WordPress',
                'WooCommerce',
                'Laravel',
                'HTML5',
                'CSS 3',
                'SASS',
                'Search Engine Optimization (SEO)',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
