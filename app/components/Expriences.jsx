import React from 'react'
import SingleExp from './SingleExp'

export default function Expriences() {
  return (
    <div className='m-4 w-5/6 rounded-md p-4 bg-gray-900'>
       <h1 className='text-[#EEB76B] text-5xl font-bold m-3'>Internship</h1> 
       <SingleExp image={'/shenzyn.webp'} name={"SHENZYN | Software Engineer Intern"} about={"Build end-to-end frontend and backend solutions using ReactJS, Flask with Azure Bearer Token, and integrate Azure, Google, and GitHub sign-ins for Generative AI platform."} impact={"The application Enabled user queries and file uploads for customized solutions. Created an admin panel to manage users and worked with RabbitMQ and Celery to make the app highly scalable. Created a Docker image for deployment and performed unit testing using Pytest."} techstack={"ReactJs, Flask, Mysql, RabbitMQ, Celery, DigitalOcean, Docker"}/>
       <SingleExp image={'/sdclogo.jpg'} name={"MU-SDC | President & Full Stack Web Developer"} about={"Led the development of two impactful websites. For the Moonstone College Fest, I created a robust platform with paperless registration and an AdminPanel with varying privileges. Additionally, for the MII Foundation, I established an admin-managed site promoting startup culture."} impact={" Successfully managed 5,000+ registrations, streamlining the registration process. Mentored and guided 100+ university students."} techstack={"ReactJs, ExpressJs, MongoDB, NodeJs"}/>
       <SingleExp image={'/savornaturals.png'} name={"SAVORNATURALS  | Website Developer"} about={"Developed an Ecommerce web application which contain AdminPanel, Authentication, Product Cart, Tracking."} impact={"With this web application, the company’s sales increase by 7% , product booking and tracking become easier."} techstack={"MERN Stack, Redux, Firebase."}/>
       <SingleExp image={'/digitopia.jpg'} name={"Digitopia  | Website Developer"} about={"Worked With a team of 5 Members and Developed Websites for Digitopia and their Clients Like InfinityClasses . Written 5k+ Lines of Code for Frontend and Deploy Websites Using Cpanel Hosting"} impact={"Developed a fully functional web application where the user can Fill information and Get syllabus of Different Courses and added Discussion Section in Blogs Using Disqus"} techstack={" JavaScript, Disqus, Bootstrap, Cpanel Hosting, Plesk Hosting"}/>
       <SingleExp image={'/navavarnevents.jpg'} name={"Navavarn Events  | WordPress Developer"} about={"Developed website for Event Management Company. I have Worked Majorly on Frontend (Design) and Website Optimization"} impact={"Developed Completely Responsive and Optimized Website which Increases reach of the company."} techstack={"WordPress, Different Plugins, Plesk Hosting."}/>
    </div>
  )
}
