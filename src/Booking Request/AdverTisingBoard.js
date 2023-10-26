import React from 'react'
import { Box, Button, Typography } from "@mui/material";

const AdverTisingBoard = ({bookings}) => {
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
              }}
            >
              <Typography
                varient="h6"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                AdverTising Board
              </Typography>

              <Typography>2</Typography>
              <Typography>3</Typography>
              <Typography>4</Typography>
              <Typography>5</Typography>
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

export default AdverTisingBoard