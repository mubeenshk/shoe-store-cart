import {
  Box,
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));

const StyledButton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        color: "#ffffff",
        background: "#3b2e2e",
        fontSize: "16px",
        textTransform: "capitalize",
        width: "130px",
        paddingY: "5px",
        "&:hover": {
          background: "#3b2e2e",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <Typography
        mt={10}
        mb={36}
        sx={{
          color: "#23262f",
          fontSize: { xs: "28px", md: "38px" },
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Your Cart is Empty
      </Typography>
    );
  return (
    <Box pt={6} pb={10}>
      <Container>
        <Box
          fontSize={{ xs: "30px", md: "42px" }}
          fontWeight="700"
          color="#3b2e2e"
          textAlign="center"
          mb={10}
        >
          Shopping Cart
        </Box>

        <Box mb={4}>
          <StyledButton onClick={() => emptyCart()}>Clear cart</StyledButton>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            background: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableBody>
              {items.map((item, i) => {
                return (
                  <TableRow>
                    <StyledTableCell>
                      <img src={item.img} alt="" height="100px" width="100px" />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography
                        color="#23262f"
                        fontSize="16px"
                        fontWeight="600"
                      >
                        {item.title}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography
                        color="#D01345"
                        fontSize="16px"
                        fontWeight={"600"}
                      >
                        $ {item.price}
                      </Typography>
                    </StyledTableCell>

                    <StyledTableCell>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          sx={{
                            paddingY: "2px",
                            width: "35px",
                            marginRight: "5px",
                            border: "1px solid #3b2e2e",
                            borderRadius: "5px",
                            color: "#23262f",
                            fontSize: "18px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            paddingY: "2px",
                            width: "35px",
                            border: "1px solid #3b2e2e",
                            borderRadius: "4px",
                            color: "#23262f",
                            fontSize: "18px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Typography>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography color="#23262f" fontSize="16px">
                        Quantity ({item.quantity})
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Typography
                        sx={{
                          paddingY: "2px",
                          width: "35px",
                          background: "#3b2e2e",
                          borderRadius: "4px",
                          color: "#fff",
                          fontSize: "18px",
                          textAlign: "center",
                          cursor: "pointer",
                          "&:hover": {
                            background: "#3b2e2ea1",
                          },
                        }}
                        onClick={() => {
                          removeItem(item.id);
                          toast.error("Product removed!!!");
                        }}
                      >
                        X
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Box textAlign="right">
          <Typography
            mt={4}
            mb={2}
            sx={{
              color: "#23262f",
              fontSize: { xs: "24px", md: "32px" },
              textAlign: "right",
            }}
          >
            Total Price: $ {cartTotal}
          </Typography>

          <StyledButton>Payment</StyledButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;
