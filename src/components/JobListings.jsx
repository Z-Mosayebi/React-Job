import { useState ,useEffect } from "react";
import JobListing from "./JobListing";



const JobListings = ({isHome= false}) => {
  const  useState[jobs, setJobs] = useState([]);
 const useState[loading, setLoading] = useState(true);


  useEffect(() => { 
    const fetchJobs = async () => {
     try {
      const res = await fetch("http://localhost:8000/jobs");
      const data = await res.json();
      setJobs (data);
     }catch (error) {
       console.log("error feching data", error);
      } finally {  
        setLoading(false);
          }

    fetchJob();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Brows Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*<!-- Job Listing  -->*/}
          {jobs.map((job) => (
             <JobListing key={job.id} job={job} />  
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
