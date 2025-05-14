import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#EAF1F6]">
      <div className="mb-[58px] h-[149px] w-[150px]">
        <Image
          src={"/assets/images/auth-tpnl-logo.svg"}
          alt="tpnl-logo"
          width={131}
          height={129}
        />
      </div>
      <div className=" w-4/5 md:mb-6  max-w-[643px]">
        <LoginForm />
      </div>
    </div>
  );
}
