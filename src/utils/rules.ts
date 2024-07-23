const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const required = (value: string): string | boolean => !!value || 'Este campo es necesario.'
export const email = (value: string): string | boolean => emailPattern.test(value) || value === '' || 'Ingrese un correo electrónico válido.'
export const max = (maxValue: number) => (value: string): string | boolean => value.length >= maxValue || `El campo debe tener mas de ${maxValue} caracteres.`
export const min = (minValue: number) => (value: string): string | boolean => value.length >= minValue || `El campo debe tener mas de ${minValue} caracteres.`
export const equalTo = (valueName: string, valueToEqual: string) => (value: string): string | boolean => value === valueToEqual || `El campo debe ser el mismo que ${valueName}.`
