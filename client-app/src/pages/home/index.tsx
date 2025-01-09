import { useTranslation } from "react-i18next"
import TestComponent from "./TestComponent"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Editor } from "@/components/editor"


export default function Home() {
  const { t } = useTranslation("translation")
  const [content, setContent] = useState("")

  const handleChange = (value: any) => {
    setContent(value)
  }

  const handleSave = async () => {
    const response = await fetch("/api/text-documents", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blob: content }),
    })
    console.log(response);
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-pink-700 to-purple-700">
      <section className="w-full py-32 md:py-48 flex flex-col items-center justify-center">
        <h1 className="text-black">{t("title")}</h1>
        <TestComponent />
        <Editor
          content={content}
          onChange={handleChange}
        />
      <Button onClick={handleSave}>Save</Button>
      </section>

    </div>
  )
}
