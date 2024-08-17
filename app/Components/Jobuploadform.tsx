// components/JobUploadForm.js
import { useState } from 'react';

const JobUploadForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    location: "",
    salary: "",
    contactEmail: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Job posted successfully!');
        setFormData({
          jobTitle: "",
          jobDescription: "",
          companyName: "",
          location: "",
          salary: "",
          contactEmail: "",
        });
      } else {
        alert('Failed to post the job.');
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert('An error occurred while posting the job.');
    }
  };

  const handleClientSubmit = (e: any) => {
    e.preventDefault();

    console.log("formData: ", formData);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Post a Job Vacancy</h2>
        <form onSubmit={handleClientSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Job Title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Job Description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Job Location"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Salary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter Contact Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobUploadForm;
