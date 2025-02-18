
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";


const MyBookingCard = ({room}) => {
    console.log(room)
    const {user}=useContext(AuthContext)
    console.log(user?.displayName)

    const {name,date,price,image}=room
    console.log(name,date,price,image)
     const [review,setReview]=useState(Boolean)
    

     const [rating,setRating]=useState('')
     const [comment,setComment]=useState('')
    //  const [dateComment,setDateComment]=useState(date)
  

     console.log(rating)
     console.log(comment)

     const handleSubmit=async()=>
     {
         const reviewData={
          name:user?.displayName,
          email:user?.email,
          date,
          rating,
          comment
         }
         console.log(reviewData)

    try{
      const res= await axios.post(`http://localhost:5000/UserReview`,reviewData);
      console.log(res.data)
      setReview(false)
      setRating("")
      setComment("")
    }catch(error)
    {
       console.log(error)
    }
    
     }
   


   
    console.log(review || 'hello')
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th className="hidden md:table-cell">Price</th>
              <th className="hidden md:table-cell">Date</th>
              <th>Actions</th>
            </tr>
          </thead>
      
          {/* Table Body */}
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" w-12 h-12">
                      <img
                        src={image}
                        alt="Room Image"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
               {name}
                <br />
                <span className="badge badge-ghost badge-sm">your booking</span>
              </td>
              <td className="hidden md:table-cell">${price}/night</td>
              <td className="hidden md:table-cell">{date}</td>
              <td>
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-outline">Update Date</button>
                  <button className="btn btn-sm btn-success" onClick={()=> setReview(true)}>Review</button>
                  <button className="btn btn-sm btn-error">Cancel</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>


        {
          review &&

<div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
  <h2 className="text-xl font-semibold text-center mb-4">Leave a Review</h2>
  <h2 className="text-sm font-semibold mb-4">{date}</h2>
  
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700">Username</label>
    <input
      type="text"
      value={user?.displayName || "Anonymous"}
      readOnly
      className="input input-bordered w-full bg-gray-100"
    />
  </div>

 
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
    <input
      type="number"
      value={rating}
      min="1"
      max="5"
      onChange={(e) => setRating(Number(e.target.value))}
      className="input input-bordered w-full"
    />
  </div>

 
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Your Review</label>
    <textarea
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      className="textarea textarea-bordered w-full"
      placeholder="Write your experience..."
    />
  </div>


  <div className="flex justify-end gap-3">
    <button className="btn btn-outline" onClick={()=> setReview(false)}>Cancel</button>
    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
</div>
</div>
        }
      </div>
    );
};

export default MyBookingCard;