import React, { ReactNode } from "react"
import { LanguageSelector } from "../language-selector"
import { Button } from "../ui/button"
import { useTranslation } from "react-i18next"
import { Github } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface IProps {
    leftNode?: ReactNode
}
export function Header(props: IProps) {
    const { t } = useTranslation()
    const location = useLocation()

    return (
        <div className="fixed left-0 top-0 flex w-full items-center justify-between border bg-slate-50 bg-opacity-70 px-4 py-4 md:px-12">
            <a href="/" className="text-xs md:text-base">
                {t("slogan")}
            </a>
            <div className="flex items-center gap-4">
                {location?.pathname === "/" ? (
                    <div>
                        Смени роут, брат: <Link to="/about">{t("/about")}</Link>
                    </div>
                ) : (
                    <div>
                        Смени роут, брат: <Link to="/">{t("/home")}</Link>
                    </div>
                )}
            </div>
            <div className="flex items-center gap-4">
                <LanguageSelector />
                <Button size={"icon"} className="rounded-full">
                    <a href="https://github.com/kronavald/kronovald" target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                </Button>
            </div>
        </div>
    )
}
