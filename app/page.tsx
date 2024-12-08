"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState<"questionnaire" | "networkMap" | "documents">(
    "questionnaire"
  );
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Ввод данных для оценки безопасности
      </h1>

      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          onClick={() => setTab("questionnaire")}
          className={`p-2 text-lg ${
            tab === "questionnaire"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Опросник безопасности
        </button>
        <button
          onClick={() => setTab("networkMap")}
          className={`p-2 text-lg ${
            tab === "networkMap"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Карта сетевых доступов
        </button>
        <button
          onClick={() => setTab("documents")}
          className={`p-2 text-lg ${
            tab === "documents"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          Дополнительные документы
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white rounded-md shadow-sm">
        {tab === "questionnaire" && (
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Включено ли шифрование данных?
              </label>
              <select
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Выберите ответ</option>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Используется двухфакторная аутентификация?
              </label>
              <select
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Выберите ответ</option>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Опишите меры контроля доступа
              </label>
              <textarea
                className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
                rows={4}
                placeholder="Введите описание..."
                required
              ></textarea>
            </div>
          </form>
        )}

        {tab === "networkMap" && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Загрузите карту сетевых доступов (JSON, YAML, Excel)
            </label>
            <input
              type="file"
              accept=".json, .yaml, .yml, .xls, .xlsx"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
            />
          </div>
        )}

        {tab === "documents" && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Загрузите дополнительные документы (PDF, DOCX)
            </label>
            <input
              type="file"
              accept=".pdf, .docx"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              multiple
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Отправить данные
        </button>
      </div>
    </div>
  );
}
