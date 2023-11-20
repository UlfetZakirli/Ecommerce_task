import { Link } from 'react-router-dom'
import QlobeIcon from '@svg/globe.svg?react'
import { languageResource } from 'src/app/lib/i18next.config';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import { useEffect } from 'react';

const Header = () => {
    const { t, i18n } = useTranslation()

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = Object.values(languageResource).find((lng) => lng.code === currentLanguageCode)


    useEffect(() => {
        document.body.dir = currentLanguage?.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])


    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 ml-10 mr-16">
                <Link className="btn btn-ghost text-xl" to={'/'}>Logo</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-3 mr-4 ml-20">
                    <li><Link to={'/products'}>{t('product_list')}</Link></li>
                    <li><Link to={'/addProduct'}>{t('add_product')}</Link></li>
                    <li className='mr-12'>
                        <details>
                            <summary>
                                <QlobeIcon />
                                {currentLanguageCode.toUpperCase()}
                            </summary>
                            <ul className="p-2 bg-base-100 mm">
                                {
                                    Object.values(languageResource).map((lng) => (
                                        <li key={lng.code}>
                                            <button
                                                onClick={() => handleLanguageChange(lng.code)}
                                                disabled={lng.code === currentLanguageCode}
                                                className={`${lng.code === currentLanguageCode && 'bg-gray-300'}`}
                                            >
                                                <span
                                                    className={`fi fi-${lng.country_code} `}>
                                                </span>
                                                {lng.name}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Header