import React from "react"
import RichTextEditor, {
    BaseKit,
    Blockquote,
    Bold,
    BulletList,
    Clear,
    Code,
    CodeBlock,
    Color,
    ColumnActionButton,
    Emoji,
    ExportPdf,
    ExportWord,
    FontFamily,
    FontSize,
    FormatPainter,
    Heading,
    Highlight,
    History,
    HorizontalRule,
    Image,
    ImportWord,
    Indent,
    Italic,
    Katex,
    LineHeight,
    Link,
    MoreMark,
    OrderedList,
    SearchAndReplace,
    SlashCommand,
    Strike,
    Table,
    TaskList,
    TextAlign,
    Underline,
    Video,
    TableOfContents,
    Excalidraw,
    TextDirection,
    Mention,
    Attachment,
    Mermaid,
} from "reactjs-tiptap-editor"

import { convertBase64ToBlob } from "@/lib/utils"

// Import CSS
import "reactjs-tiptap-editor/style.css"

const extensions = [
    BaseKit.configure({
        multiColumn: true,
        placeholder: {
            showOnlyCurrent: true,
        },
        characterCount: {
            limit: 50_000,
        },
    }),
    History,
    SearchAndReplace,
    TextDirection,
    TableOfContents,
    FormatPainter.configure({ spacer: true }),
    Clear,
    FontFamily,
    Heading.configure({ spacer: true }),
    FontSize,
    Bold,
    Italic,
    Underline,
    Strike,
    MoreMark,
    Katex,
    Emoji,
    Color.configure({ spacer: true }),
    Highlight,
    BulletList,
    OrderedList,
    TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
    Indent,
    LineHeight,
    TaskList.configure({
        spacer: true,
        taskItem: {
            nested: true,
        },
    }),
    Link,
    Image.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files))
                }, 500)
            })
        },
    }),
    Video.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files))
                }, 500)
            })
        },
    }),
    Blockquote.configure({ spacer: true }),
    SlashCommand,
    HorizontalRule,
    Code.configure({
        toolbar: false,
    }),
    CodeBlock.configure({ defaultTheme: "dracula" }),
    ColumnActionButton,
    Table,
    ExportPdf.configure({ spacer: true }),
    ImportWord.configure({
        upload: (files: File[]) => {
            const f = files.map((file) => ({
                src: URL.createObjectURL(file),
                alt: file.name,
            }))
            return Promise.resolve(f)
        },
    }),
    ExportWord,
    Excalidraw,
    Mention,
    Attachment.configure({
        upload: (file: File) => {
            const reader = new FileReader()
            return new Promise((resolve) => {
                reader.onload = () => {
                    const blob = convertBase64ToBlob(reader.result as string)
                    resolve(URL.createObjectURL(blob))
                }
                reader.readAsDataURL(file)
            })
        },
    }),
    Mermaid.configure({
        upload: (file: File) => {
            const reader = new FileReader()
            return new Promise((resolve) => {
                reader.onload = () => {
                    const blob = convertBase64ToBlob(reader.result as string)
                    resolve(URL.createObjectURL(blob))
                }
                reader.readAsDataURL(file)
            })
        },
    }),
]

export interface EditorProps {
    content?: string
    onChange?: (val: any) => void
}

export const Editor = ({ content = "", onChange }: EditorProps) => {
    return (
        <RichTextEditor
            output="text"
            content={content}
            onChangeContent={onChange}
            extensions={extensions}
        />
    )
}
