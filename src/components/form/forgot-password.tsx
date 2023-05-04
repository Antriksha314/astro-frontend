import { SubmitHandler, useForm } from "react-hook-form";
import type { IForgotPasswordFormData } from "../../types/form";
import { ForgotPasswordFormInput } from "../../utils/inputs/form";
import { ForgotPasswordSchema } from "../../utils/validation/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { client } from "../../utils";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordFormData>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<IForgotPasswordFormData> = async (data) => {
    const response = await client({
      endpoint: "/auth/forgot-password",
      body: data,
    });
    if (!response?.success) {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Forgot Password
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {ForgotPasswordFormInput.email.label}
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            {...register(
              ForgotPasswordFormInput.email
                .name as keyof IForgotPasswordFormData
            )}
          />
          {errors.email && (
            <span className="storefront-login-pg__field-error-msg mt-2 text-red-600">
              {errors.email.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
