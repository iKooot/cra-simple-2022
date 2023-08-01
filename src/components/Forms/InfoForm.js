import React from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl, FormLabel
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  infoFormScheme,
  countryList,
  deliveryType,
} from "../../services/formsData";
import { InvalidMessage } from "../UI";

export const InfoForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(infoFormScheme),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={10} sx={{ marginBottom: 10 }}>
        <Grid item sm={6}>
          <TextField
            label="First name"
            variant="standard"
            fullWidth
            {...register("firstName")}
          />
          <InvalidMessage error={errors.firstName} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Last name"
            variant="standard"
            fullWidth
            {...register("lastName")}
          />
          <InvalidMessage error={errors.lastName} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Phone number"
            variant="standard"
            fullWidth
            type="tel"
            {...register("phone")}
          />
          <InvalidMessage error={errors.phone} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            type="email"
            {...register("email")}
          />
          <InvalidMessage error={errors.email} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            select
            label="Choose country"
            fullWidth
            defaultValue={countryList[0].value}
            {...register("country")}
          >
            {countryList.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <InvalidMessage error={errors.country} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Address"
            variant="standard"
            fullWidth
            type="address"
            {...register("address")}
          />
          <InvalidMessage error={errors.address} />
        </Grid>
        <Grid item sm={6}>
          <TextField
            label="Address 2"
            variant="standard"
            fullWidth
            type="address2"
            {...register("address2")}
          />
          <InvalidMessage error={errors.address2} />
        </Grid>
        <Grid item sm={6}>
          <FormLabel id="type-of-delivery">Choose delivery type</FormLabel>
          <RadioGroup
              aria-labelledby="type-of-delivery"
              name="type-of-delivery"
              defaultValue={deliveryType[1].value}
              {...register("deliveryType")}
          >
            {deliveryType.map((option) => (
                <FormControlLabel key={option.id} value={option.value} control={<Radio />} label={option.value} />
            ))}
          </RadioGroup>
          <InvalidMessage error={errors.deliveryType} />
        </Grid>
        <Grid item sm={12}>
          <TextField
            label="Comment"
            fullWidth
            multiline
            rows={4}
            {...register("comment")}
          />
        </Grid>
        <InvalidMessage error={errors.comment} />
        <Grid item sm={12}>
          <FormControlLabel
            control={<Checkbox defaultChecked {...register("dontCallMe")} />}
            label="Dont call me"
          />
        </Grid>
      </Grid>

      <Button type="submit" variant="outlined" color="secondary">
        Save information
      </Button>
    </form>
  );
};
