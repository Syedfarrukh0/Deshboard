'use client'

// import hooks
import { useRouter } from "next/navigation";
// import custom_ui
import { ButtonPri } from "@/components/custom_ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="main h-screen">
      <ButtonPri onClick={() => { router.push('/pages/deshboard/default') }} />
    </main>
  )
}
