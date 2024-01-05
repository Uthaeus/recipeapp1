import { useForm } from "react-hook-form";

function Login() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const submitHandler = () => {
        console.log('submitting login....')
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label id='username'>Username</label>
                    <input 
                        type='text'
                        className="form-control"
                        {...register('username', { require: true })}
                    />
                    {errors.username && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label id='password'>Password</label>
                    <input 
                        type='password'
                        className="form-control"
                        {...register('password', { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                </div>

                <button type='submit' className="btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Login;