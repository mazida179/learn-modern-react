import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React, {useState} from 'react'
import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'

interface FormValue {
    todos: { title: string; date: string }[];
}

function ToDoForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormValue>({
        mode: "onBlur",
        defaultValues: {
            todos: [{ title: "", date: "" }]
        }
    })

    const [formData, setFormData] = useState("")
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({ control, name: 'todos' })

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        
        setFormData(JSON.stringify(data))

        console.log(data)
    }

    return (

        <div>
            {formData && (
                <p>{formData}</p>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>

                <Stack spacing={2} direction={"column"} sx={{alignItems:"center"}}>
                    <Button 
                    type="button" 
                    variant='contained' 
                    color='warning'
                    size="small"
                    sx={{alignSelf:"flex-end"}}
                    onClick={() => append({title:"", date:""})}>Add More</Button>
                    {fields.map((field, index) => (

                        <Stack spacing={2} direction={"row"} sx={{justifyContent:"center"}} key={field.id}>

                            <TextField label="Title" variant='standard' 
                            size="small"
                            {...register(`todos.${index}.title`, {
                                required:"Title is required"
                            })}

                            error={!!errors.todos?.[index]?.title}
                            helperText={errors.todos?.[index]?.title?.message}
                            ></TextField>
                            
                            
                            <TextField 
                            type='date' 
                            variant='standard' 
                            label="Date" 
                            size="small"
                            {...register(`todos.${index}.date`, {
                                required:"Date is required"
                            })}
                            
                            error={!!errors.todos?.[index]?.date}
                            helperText={errors.todos?.[index]?.date?.message}
                            slotProps={{
                                inputLabel:{shrink:true}
                            }}></TextField>

                            <Button 
                            variant="outlined" 
                            type="button" 
                            size="small" 
                            color='error' 
                            sx={{alignSelf:"end"}}
                            onClick={() => remove(index)}
                            disabled={fields.length == 1}>Remove</Button>

                        
                        </Stack>
                    ))}

                    <Button variant='contained' color="success" type="submit">Submit</Button>
                </Stack>

            </form>
        </div>
    )
}

export default ToDoForm