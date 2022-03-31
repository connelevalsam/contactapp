import { useForm } from 'react-hook-form';

const FormError = ({ errorMessage }) => {
    return <p className="text-red-300 mt-1">{errorMessage}</p>;
  };
  

const AddScreen = ({ contacts, AddContactFormProps }) => {
    const { register, handleSubmit, errors } = useForm();
    console.log("The addCContact", AddContactFormProps);
    return ( 
        <form className="flex flex-col" onSubmit={handleSubmit(AddContactFormProps)}>
            <div className="md:col-span-1 md:flex md:justify-start flex-col bg-slate-900 h-screen text-white px-3">
                <h1 className="font-bold">Add a Contact</h1>
                <div>
                    <div className="mb-4">
                        {/* <InputSpacer> */}
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="firstname" name='firstname'
                            {...register('firstname', { required: true })} />
                            {/* {errors.firstName && (
                                <FormError errorMessage="First Name is required" />
                            )} */}
                        {/* </InputSpacer> */}
                        
                    </div>
                    <div className="mb-4">
                        {/* <InputSpacer> */}
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="lastname" name='lastname'
                            {...register('lastname', { required: true })} />
                            {/* {errors.lastName && (
                                <FormError errorMessage="First Name is required" />
                            )} */}
                        {/* </InputSpacer> */}
                    </div>
                    <div className="mb-4">
                        {/* <InputSpacer> */}
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="email" placeholder="email" name='email'
                            {...register('email', { required: true })} />
                            {/* {errors.email && (
                                <FormError errorMessage="First Name is required" />
                            )} */}
                        {/* </InputSpacer> */}
                    </div>
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" id="btnAdd"
                        type="submit">
                            Add
                        </button>
                    </div>
                </div>
                {/* <Script src="/main.js" strategy='lazyOnload' /> */}
            </div>
        </form>
     );
}
 
export default AddScreen;