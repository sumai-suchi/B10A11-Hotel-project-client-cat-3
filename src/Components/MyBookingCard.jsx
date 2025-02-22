
/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";


const MyBookingCard = ({ room,setMydata}) => {
    console.log(room)
   
    const { user } = useContext(AuthContext)
    console.log(user?.displayName)
    
    const { _id,RoomName, date, price, image } = room
    console.log(RoomName, date, price, image)
    const [review, setReview] = useState(Boolean)


    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [dateComment, setDateComment] = useState(date)
    const [dateModal, setDateModal] = useState(Boolean)
    
    
   
   


     
    console.log(rating)
    console.log(comment)

    const handleSubmit = async () => {
        const reviewData = {
            RoomName,
            name: user?.displayName,
            email: user?.email,
           
            rating,
            comment
        }
        console.log(reviewData)

        try {
            const res = await axios.post(`http://localhost:5000/UserReview`, reviewData);
            console.log(res.data)
            setReview(false)
            setRating("")
            setComment("")
        } catch (error) {
            console.log(error)
        }

    }

    const handleUpdate = async(id) => {

        console.log(id ,'hello')
        try {
            const res =await axios.patch(`http://localhost:5000/MyBookedRoom/${id}`,

             {
                date: dateComment
             }   

            )
           
            console.log(res)
            setDateModal(false)
            setDateComment(dateComment)

        } catch (error) {
            console.log(error)
        }

    }

    const handleDelete=async(id)=>
      {
        console.log(id)
        try {
            console.log('hey')
             
            const res = await axios.delete(`http://localhost:5000/MyBookedRoom/RoomCancel/${id}`)
            // console.log(res.data)
            console.log(res)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
            setMydata((prevRooms)=>prevRooms.filter((room)=>room._id !=id));
           

        } catch (error) {
            console.log(error)
        }
    }




    // console.log(review || 'hello')
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
                            {RoomName
                            }
                            <br />
                            <span className="badge badge-ghost badge-sm">your booking</span>
                        </td>
                        <td className="hidden md:table-cell">${price}/night</td>
                        <td className="hidden md:table-cell">{dateComment}</td>
                        <td>
                            <div className="flex flex-wrap gap-2">
                                <button className="btn btn-sm btn-outline" onClick={() => setDateModal(true)

                                }>Update Date</button>
                                <button className="btn btn-sm btn-success" onClick={() => setReview(true)}>Review</button>
                                <button className="btn btn-sm btn-error " onClick={()=>handleDelete(_id)}>Cancel</button>
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
                            <button className="btn btn-outline" onClick={() => setReview(false)}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            }

            {
                dateModal && <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h2 className="text-xl font-semibold mb-4">Update Booking Date</h2>
          
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select New Date:</label>
                  <DatePicker 
                    selected={dateComment} 
                    onChange={(date) => setDateComment(new Date(date).toISOString())}
                    dateFormat="yyyy-MM-dd"
                    className="w-full p-2 border rounded-md"
                  />
          
                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={()=>setDateModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                    <button onClick={()=> handleUpdate(_id)} className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
                  </div>
                </div>
              </div>
            }
        </div>
    );
};

export default MyBookingCard;