import { Button } from "@chakra-ui/react";
export default function FlatButton({ children, active, ...rest }) {
  return active ? (
    <Button
      background="black"
      color="white"
      _hover={{ background: "white", color: "black", borderColor: "black" }}
      {...rest}
    >
      {children}
    </Button>
  ) : (
    <Button colorScheme="gray" border="2px" borderColor="black.500" {...rest}>
      {children}
    </Button>
  );
}
