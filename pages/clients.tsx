import { Button, Grid, TextField } from "@mui/material";
import api from "../services/api";

import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import LinkHeader from "../components/LinkHeader";

export default function Clients() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [users, setUsers] = useState([]);

  async function handleCreateClient() {
    try {
      await api.post("/users", {
        name,
        age,
      });
      await handleGetUsers();
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  async function handleGetUsers() {
    const { data } = await api.get("/users");
    setUsers(data);
  }

  return (
    <>
      <LinkHeader updateUsers={handleGetUsers} />
      <Grid container>
        <Grid xs={12} sm={2}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid xs={12} sm={10}>
          <TextField
            id="outlined-basic"
            label="Idade"
            variant="outlined"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </Grid>
        <Grid container>
          <Box mt={4}>
            <Button variant="contained" onClick={handleCreateClient}>
              Cadastrar
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Box mt={5}>
          {users.map((user: any) => (
            <>
              <Grid xs={12}>{user.name}</Grid>
              <Grid xs={12}>{user.age}</Grid>
            </>
          ))}
        </Box>
      </Grid>
    </>
  );
}
