import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const OrderDashBoard = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    fetch("https://mockup-todos-server.vercel.app/todos")
      .then((res) => res.json())
      .then((data) => setAllTodos(data));
  }, []);

  const handleMakeComplete = (id) => {
    fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Verified successful.");
          window.location.reload();
        }
      });
  };

  const handleDeleteTodo = (id) => {
    const proceed = window.confirm("Are you Sure?");
    if (proceed) {
      fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted successfully");
            const remaining = todos.filter((odr) => odr._id !== id);
            setTodos(remaining);
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className=" bg-white">
      <div>
        <div>
          <div className="lg:pr-20 lg:pl-20 ml-3 mr-3">
            <h1 className="font-extrabold text-2xl text-center mb-6">
              {" "}
              PENDING ORDER
            </h1>
            <div className="overflow-x-auto">
              <table className="table  w-full">
                <thead>
                  <tr className="hover">
                    {/* <th></th> */}
                    <th className=" text-center">Name</th>
                    <th className=" text-center">Jwelery Name</th>
                    <th className=" text-center">Quantity</th>
                    <th className=" text-center">Color</th>
                    <th className=" text-center">Location</th>
                    <th className=" text-center">Delivery Address</th>
                    <th className=" text-center">Mobile Number</th>
                    <th className=" text-center">Total Price</th>
                    <th className=" text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allTodos.map((allTodo, i) => (
                    <tr className="hover" key={allTodo._id}>
                      {allTodo.status ? (
                        <></>
                      ) : (
                        <>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.name}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.cartItems[0].giftName}
                          </td>
                          <td className=" text-xl text-center font-bold capitalize">
                            {allTodo.cartItems[0].quantity}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.color}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.location}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.deliveryAdderss}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.mobileNumber}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.totalPrice}
                          </td>
                          <td>
                            <button
                              onClick={() => handleMakeComplete(allTodo._id)}
                              className="btn btn-xs btn-primary"
                            >
                              Pending
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="lg:pr-20 lg:pl-20   lg:mt-20 mt-10 mb-20 ml-3 mr-3">
            <h1 className="font-extrabold text-2xl text-center mb-6">
              COMPLETE ORDER
            </h1>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="hover">
                    <th className=" text-center">Name</th>
                    <th className=" text-center">Jwelery Name</th>
                    <th className=" text-center">Quantity</th>
                    <th className=" text-center">Color</th>
                    <th className=" text-center">Location</th>
                    <th className=" text-center">Delivery Address</th>
                    <th className=" text-center">Mobile Number</th>
                    <th className=" text-center">Total Price</th>
                    <th>Markdown</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {allTodos.map((allTodo, i) => (
                    <tr className="hover" key={allTodo._id}>
                      {allTodo.status ? (
                        <>
                          {/* <th>{i + 1}</th> */}
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.name}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.cartItems[0].giftName}
                          </td>
                          <td className=" text-xl text-center font-bold capitalize">
                            {allTodo.cartItems[0].quantity}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.color}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.location}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.deliveryAdderss}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.mobileNumber}
                          </td>
                          <td className=" text-lg font-bold capitalize text-center">
                            {allTodo.totalPrice}
                          </td>
                          <td>
                            <img
                              className="w-10"
                              src="https://i.ibb.co/1qFSWxn/tik-removebg-preview.png"
                              alt=""
                            />
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteTodo(allTodo._id)}
                              className="btn btn-xs btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      ) : (
                        <></>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDashBoard;
