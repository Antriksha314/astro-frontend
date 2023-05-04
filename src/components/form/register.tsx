import { SubmitHandler, useForm } from "react-hook-form";
import type { IRegisterFormData } from "../../types/form";
import { RegisterFormInput } from "../../utils/inputs/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../utils/validation/form";
import { toast } from "react-toastify";
import { client } from "../../utils";
const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<IRegisterFormData>({
    mode: "all",
    resolver: yupResolver(RegisterSchema),
  });
  const { errors } = formState;
  const onSubmit: SubmitHandler<IRegisterFormData> = async (data) => {
    const response = await client({ endpoint: "/auth/register", body: data });
    if (!response?.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
    window.location.href = "/welcome";
    return;
  };

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create and account
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {RegisterFormInput.firstName.label}
            </label>
            <input
              type="firstName"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="First name"
              {...register(
                RegisterFormInput.firstName.name as keyof IRegisterFormData
              )}
            />
            {errors.firstName && (
              <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {RegisterFormInput.lastName.label}
            </label>
            <input
              type="lastName"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Last name"
              {...register(
                RegisterFormInput.lastName.name as keyof IRegisterFormData
              )}
            />
            {errors.lastName && (
              <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {RegisterFormInput.email.label}
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              {...register(
                RegisterFormInput.email.name as keyof IRegisterFormData
              )}
            />
            {errors.email && (
              <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {RegisterFormInput.password.label}
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register(
                RegisterFormInput.password.name as keyof IRegisterFormData
              )}
            />
            {errors.password && (
              <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {RegisterFormInput.confirmPassword.label}
            </label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register(
                RegisterFormInput.confirmPassword
                  .name as keyof IRegisterFormData
              )}
            />
            {errors.confirmPassword && (
              <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
