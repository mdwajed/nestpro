import RegisterForm from "@/components/auth/RegisterForm";
import SocialLogin from "@/components/auth/SocialLogin";

const RegisterPage = () => {
  return (
    <section className="min-h-screen grid place-items-center mt-24">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign up</h4>
        <RegisterForm />
        <SocialLogin />
      </div>
    </section>
  );
};

export default RegisterPage;
