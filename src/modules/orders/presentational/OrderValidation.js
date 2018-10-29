import * as yup from 'yup'
import '../../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        products: yup.array()
            .min(1, "Se requiere mínimo un elemento")
            .of(yup
                .object()
                .shape({
                    name: yup.string().notOneOf(['-1'], "El nombre del producto es requerido").required("El nombre del producto es requerido"),
                    count: yup.number().typeError("debe ser entero").integer("debe ser entero").required("requerido").min(0)
                }))
            .required("Se debe agregar al menos un producto")
    })

export default schema;