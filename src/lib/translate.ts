export default function translate(pathname: string, toTranslate: {en: string, fr: string, es: string}) {
    const translate = pathname.includes("english") 
                    ? toTranslate.en
                    : pathname.includes("french")
                    ? toTranslate.fr 
                    : toTranslate.es
    return translate
}
