import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
export default function SignIn() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container sx={styles.container} component="main" maxWidth="xs">
      <Box textAlign="center" m={4}>
        <Typography variant="h3" component="h1">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <Button
            sx={{ mt: 3, mb: 2 }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
