/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlight } from "../../redux/Flights/flightsActions";

const InputFlight = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector(state => state.flight);

  // Flight Destinations
  const destination = ["Dhaka", "Sylhet", "Saidpur", "Cox's Bazar"];

  // create flight
  // flite form state
  const [flightform, setFlightform] = useState({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
  });

  // flite form data handle
  const handleFlightInput = e => {
    setFlightform(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFlightSubmit = e => {
    e.preventDefault();
    dispatch(addFlight(flightform));
    e.target.reset();
    setFlightform({
      from: "",
      to: "",
      date: "",
      guests: "",
      ticketClass: "",
    });
  };

  return (
    <>
      {/* <!-- Input Data --> */}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleFlightSubmit} className="first-hero lws-inputform">
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select onChange={handleFlightInput} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  {destination.map(item => (
                    <option disabled={flightform.to === item ? true : false}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select onChange={handleFlightInput} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  {destination.map(item => (
                    <option disabled={flightform.from === item ? true : false}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input onChange={handleFlightInput} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select onChange={handleFlightInput} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select onChange={handleFlightInput} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button disabled={flights.length >= 3 ? true : false} className="addCity" type="submit" id="lws-addCity">
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputFlight;
