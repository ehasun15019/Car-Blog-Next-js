"use client";

import useAxios from "@/Components/Axios/useAxios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaCar, FaTimes } from "react-icons/fa";
import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import PrivateRoute from "@/Components/Routes/PrivateRoutes";

const CarDetails = () => {
    const params = useParams();
  const id = params.id;
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");

  // Fetch car details
  useEffect(() => {
    axios
      .get(`/car-selling/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [id, axios]);

  // Fetch comments
  useEffect(() => {
    axios
      .get(`/car-comments/${id}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err.message));
  }, [id, axios]);

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    if (!user?.email) {
      alert("You must be logged in to comment");
      return;
    }

    axios
      .post("/car-comments", { carId: id, email: user.email, comment: commentText })
      .then((res) => {
        setComments((prev) => [
          { email: user.email, comment: commentText, createdAt: new Date() },
          ...prev,
        ]);
        setCommentText("");
        setShowModal(false);
      })
      .catch((err) => console.log(err.message));
  };

  if (loading) {
    return <div className="p-10 text-center text-xl font-semibold">Loading...</div>;
  }

  if (!car) {
    return <div className="p-10 text-center text-xl font-semibold">Car Not Found</div>;
  }

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto py-10">
      {/* Top Image */}
      <div className="relative w-full h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
        <Image src={car.image} alt="Car Image" fill className="object-cover" />
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-6">
        {car.carTypes}: <div className="badge badge-error font-semibold text-white">{car.condition}</div>
      </h1>

      {/* Author & Date */}
      <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-2 text-sm">
        <div className="flex items-center gap-1">
          <FaUser /> <span>{car.name}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt />{" "}
          <span>{new Date(car.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt /> <span>{car.address}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6 text-gray-700 space-y-4">
        <p>{car.description}</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Registration: {car.registration}</li>
          <li>NID: {car.nid}</li>
          <li>More Specs here...</li>
        </ul>
      </div>

      {/* Comment Button */}
      <button
        className="mt-8 bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
        onClick={() => setShowModal(true)}
      >
        Comment
      </button>

      {/* Comment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-11/12 max-w-md p-6 relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Add a Comment</h2>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              rows={4}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment..."
            />
            <button
              className="bg-primary text-white px-4 py-2 rounded-md font-bold"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Comments Section */}
      <section className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((c, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                  <span>{c.email}</span>
                  <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700">{c.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default function pageWrapper() {
    return(
        <PrivateRoute>
            <CarDetails />
        </PrivateRoute>
    )
}
