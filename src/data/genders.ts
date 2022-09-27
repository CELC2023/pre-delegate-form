import { TFunction } from "react-i18next";

export const getGenders = (t: TFunction<"translation", undefined>) => {    
    return [{
        name: 'female',
        label: t('option-gender-female')
    }, {
        name: 'male',
        label: t('option-gender-male')
    }, {
        name: 'non-binary',
        label: t('option-gender-non-binary')
    }, {
        name: 'other',
        label: t('option-other')
    }, {
        name: 'prefer-not-to-say',
        label: t('option-prefer-not-to-say')
    }]
}