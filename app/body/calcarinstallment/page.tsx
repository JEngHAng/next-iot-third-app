"use client";

import { useState } from "react";
import { SauHeader } from "@/components/SauHeader";
import Image from "next/image";
import carpicture from "@/assets/images/carpicture.png";
import { SauFooter } from "@/components/SauFooter";

export default function Page() {
  const [carprice, setCarPrice] = useState(0);
  const [downpayment, setDownPayment] = useState(10);
  const [interest, setInterest] = useState(0);
  const [installments, setInstallments] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateInstallment = () => {
    // จำนวนปีที่ผ่อน (แปลงจากเดือน)
    const years = installments / 12;

    // 1. ยอดจัด = ราคารถ - (ราคารถ * เงินดาวน์ / 100)
    const yodJad = carprice - (carprice * downpayment / 100);

    // 2. ดอกเบี้ยทั้งหมด = ยอดจัด + ( (ยอดจัด * ดอกเบี้ย / 100) * จำนวนปีที่ผ่อน)
    const dokBiaTangMod = yodJad + ((yodJad * interest / 100) * years);

    // 3. ค่างวดต่อเดือน = (ยอดจัด + ดอกเบี้ยทั้งหมด ) / จำนวนงวดผ่อน
    const result = (yodJad + dokBiaTangMod) / installments;

    setMonthlyPayment(result);
  };

  return (
    <>
      {/* ส่วนของการแสดง Sau Header */}
      <SauHeader />
      <div className="p-10 w-3/4 mx-auto mt-20 border border-gray-100 rounded-xl flex flex-col items-center justify-center shadow-xl">
        {/* ส่วนแสดงรูปภาพ */}
        <Image
          src={carpicture}
          alt="car picture"
          width={80}
          height={37}
          className="rounded-xl mb-10"
        />

        {/* ส่วนแสดงชื่อโปรแกรม */}
        <h1 className="text-xl text-center font-bold text-blue-600">
          Car Installment Calculator
          <br />
          โปรแกรมคำนวณค่าผ่อนรถ
        </h1>

        {/* ส่วนของ การป้อนค่า */}
        <div className="w-3/5 mt-5">
          <label htmlFor="carprice">ราคารถ (บาท)</label>
          <input
            type="number"
            name="carprice"
            id="carprice"
            placeholder="999999"
            className="bg-amber-50 p-2 w-full mt-2 rounded mb-3"
            onChange={(e) => setCarPrice(Number(e.target.value))}
          />

          <label htmlFor="downpayment">เงินดาวน์ (%)</label>
          <div className="flex gap-4 mb-3">
            {[10, 20, 30, 40].map((value) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="downpayment"
                  value={value}
                  checked={downpayment === value}
                  onChange={() => setDownPayment(value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span>{value}%</span>
              </label>
            ))}
          </div>

          <label htmlFor="installments">จำนวนงวด (เดือน)</label>
          <select
            id="installments"
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
            className="bg-amber-50 p-2 w-full mt-2 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
          >
            <option value="12">12 เดือน</option>
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
          </select>

          <label htmlFor="interest">ดอกเบื้ยต่อปี (%)</label>
          <input
            type="number"
            name="interest"
            id="interest"
            placeholder="3.5"
            className="bg-amber-50 p-2 w-full mt-2 rounded mb-3"
            onChange={(e) => setInterest(Number(e.target.value))}
          />

          {/* ปุ่มคำนวณ */}
          <button 
            onClick={calculateInstallment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mt-5 w-full"
          >
            คำนวณค่าผ่อนรถ
          </button>
        </div>

        {/* ส่วนของการแสดงผล */}
        <div className="w-3/5 mt-5 bg-gray-300 p-5 rounded">
          <h2 className="text-lg text-center font-bold mb-3 text-gray-600">
            ค่างวดรถต่อเดือน
          </h2>
          <h2 className="text-lg text-center font-bold mb-3 text-red-600">
            {monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
        </div>

        {/* ส่วนของการแสดง Sau Footer */}
        <SauFooter />
      </div>
    </>
  );
}