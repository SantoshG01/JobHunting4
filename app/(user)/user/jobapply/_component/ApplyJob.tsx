// // components/ApplyForm.tsx
"use client";
import { useEffect, useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { FileUp } from 'lucide-react';



// import { useState } from 'react';

export const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    codename: "",
    email: "",
    contactnumber: "",
    jobtitle: "",
    department: "",
    image: "",
    address: "",
  });
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageUpload = async (selectedFile: File) => {
    const res = await edgestore.publicFiles.upload({
      file: selectedFile,
      onProgressChange: (progress) => {
        setProgress(progress);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Apply For Job</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-2 w-full p-2 border shadow-sm border-green-600 rounded-md"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-2 w-full p-2 border border-green-600 rounded-md"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="mt-2 w-full p-2 border border-green-600 rounded-md"
              placeholder="Enter Phone Number"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Upload Resume</label>
            {/* <input
              type="file"
              name="resume"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                  handleImageUpload(selectedFile);
                  setIsUploading(!isUploading);
                }
              }}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2
               focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
            /> 
          </div> */}
          <div className="mt-2 w-full p-2">
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setFile(selectedFile);
                  handleImageUpload(selectedFile);
                  setIsUploading(!isUploading);
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="flex items-start justify-between text-xl font-semibold w-full p-3 border-[3px]  border-dotted  
    border-green-600 rounded-[50px] text-gray-700 bg-white shadow-sm 
    hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3
    focus:border-blue-500 transition duration-300 ease-in-out cursor-pointer"
            >
              <span>+Upload Resume</span>
              <FileUp className="mr-2" />

            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-blue-950 transition duration-200"
          >
            Apply Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
