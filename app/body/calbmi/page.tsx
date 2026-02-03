"use client";

import { useState } from "react";
import { SauHeader } from "@/components/SauHeader";
import Image from "next/image";
import bmipicture from "@/assets/images/bmipicture.png";
import { SauFooter } from "@/components/SauFooter";

export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("0.00");
  const [bmiResult, setBmiResult] = useState("?????");

  //ฟังก์ชันคำนวณ BMI
  const handleCalBMIClick = () => {
    //Validate input
    if (weight === "" || height === "") {
      alert("กรุณาป้อนค่าน้ำหนักและส่วนสูงให้ครบถ้วน");
      return;
    }

    if (weight === "0" || height === "0") {
      alert("กรุณาป้อนค่าน้ำหนักและส่วนสูงให้ถูกต้องมากกว่า 0");
      return;
    }

    // คำนวณ BMI
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100; //แปลง cm. เป็น m.
    const bmiValue = weightValue / (heightValue ** 2);
    setBmi(bmiValue.toFixed(2));

    //แปลผล BMI
    if (bmiValue < 18.5) {
      setBmiResult("ผอมเกินไป");
    } else if (bmiValue <= 24.9) {
      setBmiResult("น้ำหนักปกติ เหมาะสม");
    } else if (bmiValue <= 29.9) {
      setBmiResult("อ้วน");
    } else if (bmiValue <= 39.9) {
      setBmiResult("อ้วนมาก");
    } else {
      setBmiResult("อ้วนอันตราย");
    }
  };

  //ฟังก์ชันล้างค่า
  const handleClearClick = () => {
    setWeight("");
    setHeight("");
    setBmi("0.00");
    setBmiResult("?????");
  };

  return (
    <>
      {/* ส่วนของการแสดง Sau Header */}
      <SauHeader />
      <div className="p-10 w-3/4 mx-auto mt-20 border border-gray-100 rounded-xl flex flex-col items-center justify-center shadow-xl">
        {/* ส่วนแสดงรูปภาพจาก Internet */}
        <Image
          src={bmipicture}
          alt="bmi picture"
          width={80}
          height={37}
          className="rounded-xl mb-10"
        />
        {/* ส่วนแสดงชื่อโปรแกรม */}
        <h1 className="text-xl text-center font-bold text-blue-600">
          BMI Calculator
          <br />
          โปรแกรมคำนวณค่าดัชนีมวลกาย (BMI)
        </h1>
        {/* ส่วนของ การป้อนค่า */}
        <div className="w-3/5 mt-5">
          <label htmlFor="weight">ป้อนน้ำหนัก (kg.)</label>
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="55.50"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="bg-white-50 p-2 w-full mt-2 rounded"
          />

          <label htmlFor="height">ป้อนส่วนสูง (cm.)</label>
          <input
            type="number"
            name="height"
            id="height"
            placeholder="170.00"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="bg-white-50 p-2 w-full mt-2 rounded"
          />

          <button
            onClick={handleCalBMIClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mt-5 w-full"
          >
            คำนวณ BMI
          </button>
          <button
            onClick={handleClearClick}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded mt-5 w-full"
          >
            ล่างค่าทั้งหมด
          </button>
        </div>

        {/* ส่วนของการแสดงผล BMI */}
        <div className="w-3/5 mt-5 bg-gray-300 p-5 rounded">
          <h2 className="text-lg text-center font-bold mb-3 text-gray-600">
            BMI
          </h2>
          <h2 className="text-lg text-center font-bold mb-3 text-red-600">
            {bmi}
          </h2>
          <h2 className="text-lg text-center font-bold mb-3 text-gray-600">
            การแปลผล BMI : {bmiResult}
          </h2>
        </div>

        {/* ส่วนของการแสดง Sau Footer */}
        <SauFooter />
      </div>
    </>
  );
}
