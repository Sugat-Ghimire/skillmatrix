import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px]  flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-3xl p-3 md:h-32 bg-slate-50">
          <div className="w-32 text-white md:w-96">
            <h1 className="text-3xl font-bold text-black text-center">
              Skill Matrix
            </h1>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
