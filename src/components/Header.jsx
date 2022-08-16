import React from "react";
import Container from "@mui/material/Container";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <>
      <Box
        py={2}
        style={{
          background: "rgb(24, 6, 6)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                color="#fff"
                pt={{ xs: 0.5, md: 0 }}
                fontSize={{ xs: "20px", sm: "25px" }}
                fontWeight="700"
              >
                ONLINE SHOE STORE
              </Box>
            </Link>
            <Box height="100%" textAlign="right" position="relative">
              <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
                <LocalMallOutlinedIcon
                  style={{
                    color: "#d1d1d1",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Typography
                sx={{
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  fontSize: "12px",
                  color: "#000",
                  background: "yellow",
                  px: "10px",
                  py: "4px",
                  width: "fit-content",
                  borderRadius: "50%",
                }}
              >
                {totalItems}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
