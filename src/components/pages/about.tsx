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
              'Go',
              'Express js',
              'Fastify',
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
                'Architecting cloud-native solutions for B2B/B2C digital leasing',
                'Scaling and mentoring a small engineering team',
                'Improving CI/CD, Kubernetes workflows, and code quality',
                'Collaborating with business and legal stakeholders',
              ]}
              skills={[
                'React.js',
                'Node.js',
                'Next.js',
                'Azure',
                'Kubernetes',
                'CI/CD',
              ]}
            />

            <Timeline
              role='Software Engineer'
              company='Swarovski'
              location='Hamburg, Germany'
              date='2020 Apr – 2020 Aug'
              description='Building and maintaining the Swarovski Professional B2B online shop and internal tools.'
              responsibilities={[
                'Developing B2B commerce features with React and Node.js',
                'Implementing GraphQL APIs for product and content data',
                'Creating a custom CMS for marketing teams',
                'Deploying and monitoring services on AWS',
              ]}
              skills={['React.js', 'Node.js', 'GraphQL', 'AWS']}
            />

            <Timeline
              role='Software Engineer'
              company='Engel & Völkers'
              location='Hamburg, Germany'
              date='2018 Apr – 2020 Apr'
              description='Delivering internal portals and fintech tools for a global real estate brand.'
              responsibilities={[
                'Building the EV-World internal portal with React',
                'Developing a transaction and invoicing service',
                'Designing and maintaining backend services on GCP',
                'Working in an agile, cross-functional team',
              ]}
              skills={['React.js', 'Koa.js / Express.js', 'SASS', 'GCP']}
            />

            <Timeline
              role='Software Engineer'
              company='DBK'
              location='Groningen, Netherlands'
              date='2017 Jul – 2018 Feb'
              description='Full-stack and mobile development for career and VR-related products.'
              responsibilities={[
                'Rebuilding the Karreer mobile app with Ionic',
                'Developing and maintaining REST APIs in Laravel',
                'Supporting web projects for Sensular VR',
                'Owning features end to end in a small team',
              ]}
              skills={['Ionic', 'Laravel', 'REST APIs', 'Angular']}
            />

            <Timeline
              role='Full Stack Web Developer'
              company='The Creative Zone'
              location='Cairo, Egypt'
              date='2014 Dec – 2017 Jun'
              description='From junior to full-stack developer, delivering custom websites and e-commerce solutions.'
              responsibilities={[
                'Building websites from scratch using PHP and JavaScript',
                'Developing WordPress and WooCommerce sites',
                'Optimizing delivery time with reusable templates',
                'Collaborating directly with clients and designers',
              ]}
              skills={[
                'HTML5',
                'CSS3 / SASS',
                'jQuery',
                'PHP',
                'WordPress',
                'WooCommerce',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
