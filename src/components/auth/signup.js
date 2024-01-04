import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitHandler = (data) => {
        console.log('submitting...');

        if (data.password !== data.password_confirmation) {
            console.log('data does not match');
            return 
        }
        console.log('username: ', data.username);
        console.log('password: ', data.password)
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign Up</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <input type='text' className="form-control" placeholder="enter username" {...register('username', { required: true })} />
                    {errors.username && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input 
                        type='password'
                        className="form-control"
                        placeholder="enter password"
                        {...register('password', { required: true })}
                    />
                    { errors.password && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="confirm password"
                        {...register('password_confirmation', { required: true })}
                    />
                    { errors.password_confirmation && <span>This field is required</span>}
                </div>
            </form>
        </div>
    );
}

export default Signup;