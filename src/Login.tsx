import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface props {
  setUserID: (userID: number) => void;
}
function Login({ setUserID }: props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Fonction de gestion du submit (sans logique ici)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire

    setError(null);
    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
    }
    const json = JSON.stringify({
      username: username,
      password: password,
    });
    axios
      .post("http://127.0.0.1:8000/api/auth/login", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setUserID(res.data.id);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        w="full"
        maxW="md"
        bg={useColorModeValue("white", "gray.700")}
        p={8}
        boxShadow="lg"
        rounded="lg"
      >
        <Stack spacing={4}>
          <Heading fontSize="2xl" textAlign="center">
            Connexion
          </Heading>
          <Text fontSize="lg" color="gray.600" textAlign="center">
            Veuillez vous connecter pour accéder à l'application
          </Text>

          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Nom d'utilisateur</FormLabel>
                <Input
                  type="text"
                  placeholder="Votre nom d'utilisateur"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {!username && error && (
                  <FormErrorMessage>
                    Le nom d'utilisateur est requis.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Mot de passe</FormLabel>
                <Input
                  type="password"
                  placeholder="Votre mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!password && error && (
                  <FormErrorMessage>
                    Le mot de passe est requis.
                  </FormErrorMessage>
                )}
              </FormControl>

              <Button type="submit" colorScheme="blue" size="lg" w="full">
                Se connecter
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
