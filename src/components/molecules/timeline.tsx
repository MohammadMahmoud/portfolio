import { Calendar, MapPin } from 'lucide-react';

const Timeline = ({
  role,
  company,
  location,
  date,
  description,
  responsibilities,
  skills,
}: {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}) => {
  return (
    <div className='flex flex-col md:flex-row gap-6 md:gap-12 border-l-2 border-gray-200 pl-6 md:pl-0 md:border-l-0'>
      <div className='md:w-1/4 md:text-right md:pr-12 md:border-r-2 md:border-gray-200 relative'>
        <div className='hidden md:block absolute right-[-9px] top-0 w-4 h-4 rounded-full bg-blue-700 dark:bg-red-700 ring-4 ring-white'></div>

        <h4 className='text-xl font-bold '>{company}</h4>
        <div className='flex md:justify-end items-center gap-2  text-sm mt-1'>
          <MapPin size={14} /> {location}
        </div>
        <div className='flex md:justify-end items-center gap-2  font-semibold text-sm mt-1'>
          <Calendar size={14} /> {date}
        </div>
      </div>

      <div className='md:w-3/4 pb-8'>
        <h3 className='text-2xl font-bold  mb-2'>{role}</h3>
        <p className=' mb-4 leading-relaxed'>{description}</p>

        {responsibilities.length > 0 && (
          <div className='mb-4'>
            <ul className='list-disc list-inside text-sm space-y-1'>
              {responsibilities.map((res, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: res }} />
              ))}
            </ul>
          </div>
        )}

        <div className='flex flex-wrap gap-2 mt-4'>
          {skills.map((skill) => (
            <span
              key={skill}
              className='px-2 py-1 bg-background text-xs rounded font-medium'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
