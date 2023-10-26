import React from 'react'
import { Box, Button, Typography } from "@mui/material";

const ConferenceHall = ({bookings}) => {
  return (
    <>
     <Box
              key={bookings._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "700px",
                flexBasis: "40%",
                border: "2px solid lightred",
                padding: "10px",
                marginBottom: "15px",
                bgcolor: "#b5bfbf",
                borderRadius: "10px",
                bgcolor: "#B293EA",
                paddingX:"15px"
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  varient="h6"
                  sx={{
                    bgcolor: "white",
                    padding: "5px 15px",
                    borderRadius: "15px",
                  }}
                >
                  {`Booking for ${bookings.Amenity.amenityName}`}
                </Typography>
              </Box>
              <Box sx={{ marginY: "5px" }}>
                <Typography
                  varient="h6"
                  sx={{ fontSize: "23px", color: "white"}}
                >{`Date of Booking : ${bookings.dateForConferenceHall}`}</Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "20px"}}
              >
                Booking Slots
              </Typography>
              <Box
                sx={{
                  marginY: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingX: "16px",
                }}
              >
                <Typography>Date</Typography>
                <Typography>Start Date</Typography>
                <Typography>End Date</Typography>
                <Typography>Booking Status</Typography>
              </Box>
              <Typography
            
              >{`Price: ${bookings.price}`}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ bgcolor: "green", "&:hover": { bgcolor: "green" } }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" } }}
                >
                  Reject
                </Button>
              </Box>
            </Box>
    </>
  )
}

export default ConferenceHall