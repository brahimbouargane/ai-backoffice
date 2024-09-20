import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { databaseSchema } from './stepper-validation';

function DatabaseForm({ onSubmit }: any, ref: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(databaseSchema),
  });

  React.useImperativeHandle(ref, () => ({
    submitForm: () => handleSubmit(onSubmit)(),
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="displayName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Display Name"
            fullWidth
            margin="normal"
            error={!!errors.displayName}
            helperText={errors.displayName?.message?.toString()}
          />
        )}
      />

      <Controller
        name="databaseName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Database Name"
            fullWidth
            margin="normal"
            error={!!errors.databaseName}
            helperText={errors.databaseName?.message?.toString()}
          />
        )}
      />

      <Controller
        name="host"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Host"
            fullWidth
            margin="normal"
            error={!!errors.host}
            helperText={errors.host?.message?.toString()}
          />
        )}
      />

      <Controller
        name="port"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Port"
            type="number"
            fullWidth
            margin="normal"
            error={!!errors.port}
            helperText={errors.port?.message?.toString()}
          />
        )}
      />

      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username?.message?.toString()}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message?.toString()}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default DatabaseForm;
