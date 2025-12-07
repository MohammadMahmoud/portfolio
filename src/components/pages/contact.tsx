export const Contact = () => {
  return (
    <div className='bg-background py-16' id='contact'>
      <div className='max-w-7xl mx-auto'>
        <h3 className='text-3xl font-bold mb-6 font-montserrat'>Contact</h3>

        <p className='text-lg text-muted-foreground mb-6 max-w-2xl'>
          Interested in working together or have a question? Feel free to reach
          out directly by email.
        </p>

        <a
          href='mailto:mo.mahmoudde@gmail.com'
          className='inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition'
        >
          Email me at mo.mahmoudde@gmail.com
        </a>
      </div>
    </div>
  );
};
