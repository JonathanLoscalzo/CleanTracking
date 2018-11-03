import * as yup from 'yup'
import '../../helpers/YupConfig'

const schema = yup
    .object()
    .shape({
        username: yup.string()
            .required("Campo requerido"),
        password: yup.string()
            .required("campo requerido")
    })

export default schema;