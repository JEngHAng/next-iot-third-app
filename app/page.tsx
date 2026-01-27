// napage snippet
import Image from "next/image";
import calculatorpicture from "./../assets/images/calculatorpicture.png";
import { SauFooter } from "@/components/SauFooter";
import Link from "next/link";

export default function page() {
  return (
    <div className="p-10 w-3/4 mx-auto mt-20 border border-gray-100 rounded-xl flex flex-col items-center justify-center shadow-xl">
      {/* ส่วนแสดงรูปจาก Internet */}
      <Image
        src="https://images.pexels.com/photos/4386327/pexels-photo-4386327.jpeg"
        alt="เครื่องคำนวณ"
        width={300}
        height={37}
        priority
        className="rounded-xl mb-10"
      />

      {/* ส่วนแสดงรูปภาพจากในโปรเจกค์ (assets/images/) */}
      <Image
        src={calculatorpicture}
        alt="เครื่องคำนวณ"
        width={100}
        height={20}
        priority
        className="rounded-xl mb-10"
      />
        
      {/* ส่วนแสดงชื่อโปรแกรม */}
      <h1 className="text-3xl text-center font-bold text-blue-600">
        Calculator Varity
        <br />
        โปรแกรมเครื่องคิดเลขหลากหลายแบบ
      </h1>

      {/* ส่วนของลิงค์เปิดไปยังหน้าเพจต่างๆ */}
      <div className="flex mt-10">
        <Link href="/body/calbmi" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          BMI Calculator
        </Link>
        |
        <Link href="/body/calbmr" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          BMR Calculator
        </Link>
        |
        <Link href="/body/calcarinstallment" className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          Car Installment
        </Link>
      </div>
      


      {/* ส่วนแสดง Footer */}
      <SauFooter />
    </div>
  );
}
