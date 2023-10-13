//components
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
} from "@chakra-ui/react";
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
    formState: { errors },
  } = useForm({ resolver: yupResolver(scheme) });
  const { addTodo } = useContext(todoContext);
  function onSubmitTodo(data) {
    addTodo({ name: data.name, severity: data.severity });
  }

  return (
    <form className="w-full " onSubmit={handleSubmit(onSubmitTodo)}>
      <Stack spacing={3}>
        <FormControl isInvalid={errors.name}>
          <FormLabel>Description</FormLabel>
          <Input
            id="name"
            className="w-full"
            variant="outline"
            placeholder="Describe your issue ..."
            {...register("name")}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.severity}>
          <FormLabel>Severity</FormLabel>
          <Select
            id="severity"
            {...register("severity")}
            className="w-full"
            placeholder="Select option"
          >
            <option value={0}>Low</option>
            <option value={1}>Medium</option>
            <option value={2}>High</option>
          </Select>
          <FormErrorMessage>
            {errors.severity && errors.severity.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Add
        </Button>
      </Stack>
    </form>
  );
}
