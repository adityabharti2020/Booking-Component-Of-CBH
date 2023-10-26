import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import ConferenceHall from "./ConferenceHall";
import AdverTisingBoard from "./AdverTisingBoard";

const Booking_Request = () => {
  const apiUrl = `http://192.168.29.32:5001/api/v1/admin/get/all/bookings`;
  const [BookingDetails, setBookingDetails] = useState();
  const bookingRequest = async () => {
    try {
      const response = await axios.get(apiUrl);
      setBookingDetails(response.data.allBookings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookingRequest();
  }, []);
  useEffect(() => {
    if (BookingDetails) {
      console.log(BookingDetails);
    }
  }, [BookingDetails]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "10px",
          maxWidth: "100%",
        }}
      >
        {BookingDetails?.map((bookings, index) => {
          return bookings.Amenity.amenityName === "Conference Room" ? (
            <ConferenceHall bookings={bookings} />
          ) : bookings.dateForAdvertisingBoard ? (
            <AdverTisingBoard bookings={bookings}/>
          ) : (
            ""
          );
        })}
      </Box>
    </>
  );
};

export default Booking_Request;
