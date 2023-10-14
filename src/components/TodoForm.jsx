//components
import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import FlatButton from "./FlatButton";
//hook
import { useForm } from "react-hook-form";
import { useContext } from "react";
//external
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { todoContext } from "../store/TodoContext";
export default function TodoForm() {
  const scheme = yup.object().shape({
    name: yup.string().required(),
    severity: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(scheme) });
  const { addTodo } = useContext(todoContext);
  function onSubmitTodo(data) {
    addTodo({ name: data.name, severity: data.severity });
    reset({
      name: "",
      severity: 0,
    });
  }

  return (
    <form className="w-full " onSubmit={handleSubmit(onSubmitTodo)}>
      <Stack spacing={3}>
        <FormControl isInvalid={errors.name}>
          <Input
            className="w-full"
            focusBorderColor="black.300"
            errorBorderColor="black.300"
            _hover={{ borderColor: "black.300" }}
            borderColor="black.300"
            border="2px"
            id="name"
            variant="outline"
            placeholder="Describe your todo ..."
            {...register("name")}
          />
          <FormErrorMessage color="black.300" fontWeight="bold">
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.severity}>
          <Select
            focusBorderColor="black.300"
            _hover={{ borderColor: "black.300" }}
            errorBorderColor="black.300"
            borderColor="black.300"
            border="2px"
            id="severity"
            {...register("severity")}
            className="w-full"
            placeholder="Severity"
          >
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </Select>
          <FormErrorMessage color="black.300" fontWeight="bold">
            {errors.severity && errors.severity.message}
          </FormErrorMessage>
        </FormControl>
        <FlatButton
          minWidth="200px"
          className="ml-auto"
          _hover={{ dropShadow: "7px 5px 0px #000000" }}
          mt={4}
          type="submit"
        >
          Add
        </FlatButton>
      </Stack>
    </form>
  );
}
