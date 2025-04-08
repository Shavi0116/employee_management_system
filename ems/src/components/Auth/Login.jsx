const Login=()=>{
    return(
        <>
            <div className='flex h-screen w-screen items-center justify-center'>
                <div className='rounded-xl border-2 border-emerald-600 p-10'>
                    <form className="flex flex-col items-center justify-center">
                        <input required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-500' type='email' placeholder='Enter your email'></input>
                        <input required className='text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-500' type='password' placeholder='Enter your password'></input>
                        <button className='text-white border-none outline-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3 mb-3'>Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login