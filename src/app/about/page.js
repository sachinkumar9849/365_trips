import React from 'react';
import Head from 'next/head'; // Import the Head component from Next.js

const About = () => {
  const newTitle = "New About Page Title";

  return (
    <div>
      {/* Set metadata for the About page */}
      <Head>
        <title>About page</title> {/* Set the page title */}
        <meta name="description" content="Description of the About page" /> {/* Set the page description */}
        {/* You can add more meta tags as needed */}
      </Head>
      
      {/* Your About page content */}
      <div>
        About Page Content
      </div>
    </div>
  );
};

export default About;
