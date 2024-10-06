import React from 'react'


const Card = ({Name,RollNo,Age,Class}:any) =>{
    return(
        
        <div className="bg-purple-200 shadow-lg rounded-xl p-6 mb-6 w-full md:w-80 mx-auto">
        <h2 className="text-xl font-bold text-teal-700 mb-2">{Name}</h2>
        <p className="text-base text-blue-700 mb-1">Roll No: <span className="text-pink-800">{RollNo}</span></p>
        <p className="text-base text-blue-600 mb-1">Age: <span className="text-pink-800">{Age}</span></p>
        <p className="text-base text-blue-600 mb-1">Class: <span className="text-pink-800">{Class}</span></p>
      </div>  

    

      );
    }
    
export default Card