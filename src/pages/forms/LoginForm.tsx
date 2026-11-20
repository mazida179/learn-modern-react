import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, {useState, useRef} from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormValues {
    username: string;
    password: string;
    password2: string;
}

function LoginForm() {

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
        mode: "onBlur",
        defaultValues: {
            username: "",
            password: "",
            password2: ""
        }
    })

    const [formData, setFormData] = useState<string>("")
    const password2Value = watch("password2")

    const onSubmit: SubmitHandler<FormValues> = (data) => { 

        setFormData(JSON.stringify(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} direction={"column"} sx={{ alignItems: "center" }}>

                    <TextField
                        label="Username"
                        variant="standard"
                        {...register("username",
                            { required: "Username is required" })
                        }
                        error={!!errors.username}
                        helperText={errors.username?.message}
                         />

                    <TextField 
                    label="Password" 
                    variant="standard"
                    {...register("password",
                        {
                            required:"Password is required",
                            onChange:(e) => setValue("password2", e.target.value)

                        }
                    )}
                    error={!!errors.password}
                    helperText={errors.password?.message} />

                    <TextField 
                    label="Password" 
                    variant="standard"
                    {...register("password2", {required:"Password2 is required"})}
                    error={!!errors.password2}
                    helperText={errors.password2?.message}
                    slotProps={{
                        inputLabel:{shrink:!!password2Value}
                    }}
                    
                    />


                    <Button type="submit" variant='contained' color='success'>Submit</Button>
                </Stack>
            </form>

            {formData && (
                <p>{formData}</p>
            )}
        </div>
    )
}

export default LoginForm