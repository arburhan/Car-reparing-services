import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2>Please add services</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name", { required: true, maxLength: 20 })} />
                    <input {...register("Description")} />
                    <input type="number" {...register("Price", { required: true })} />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddService;