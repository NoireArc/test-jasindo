import { useState } from "react";
import { Button, Input } from "antd";

export default function Case2() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const num = parseInt(input);
    if (isNaN(num)) return setResult(null);

    setResult({
      angka: num,
      status: num % 2 === 0 ? "Genap" : "Ganjil",
      pangkatDua: num * num,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-x-hidden px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Hitung Angka</h1>
        <div className="flex gap-2 mb-4">
          <Input
            type="number"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan angka"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="primary" onClick={handleClick}>
            Hitung
          </Button>
        </div>
        {result && (
          <div className="bg-gray-50 p-4 rounded border">
            <p>
              <strong>Angka:</strong> {result.angka}
            </p>
            <p>
              <strong>Status:</strong> {result.status}
            </p>
            <p>
              <strong>Pangkat 2:</strong> {result.pangkatDua}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
