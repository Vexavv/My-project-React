import {Field, Form, Formik} from "formik";
import MyInput from "../../components/MyInput/MyInput";
import * as Yup from 'yup';
import Button from "../../components/Button/Button";
import "./BuyProduct.scss"
import {useDispatch, useSelector} from "react-redux";
import {cleaningCart} from "../../store/cartSlice";
import MyPhoneInput from "../../components/MyInput/MyPhoneInput";


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function BuyProduct(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    return (
        <div>
            <h2 className='Form-title'>Fill out the purchase form</h2>
            <Formik initialValues={{
                userName: '',
                userLastName: '',
                userAge: '',
                userAddress: '',
                userPhone: '',
                userEmail: '',
            }}
                    onSubmit={values => {
                        console.log('Checkout >>>', cart, values)
                        dispatch(cleaningCart())
                    }}
                    validationSchema={Yup.object({
                        userName: Yup.string().required('Required'),
                        userLastName: Yup.string().required('Required'),
                        userAge: Yup.number().min(18,'Age must be greater than or equal to 18').required('Required'),
                        userAddress: Yup.string().required('Required'),
                        userPhone: Yup.string().required('Required'),
                        userEmail: Yup.string().email('Invalid email address').matches(EMAIL_REGEX, 'Doesn\'t match the rule').required('Required'),


                    })}>
                <Form className='Form'>
                    <Field
                        component={MyInput}
                        label="Name"
                        type="text"
                        name='userName'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'

                    />
                    <Field
                        component={MyInput}
                        label="Last Name"
                        type="text"
                        name='userLastName'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'
                    />
                    <Field
                        component={MyInput}
                        label="Age"
                        type="number"
                        name='userAge'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'
                    />
                    <Field
                        component={MyInput}
                        label="Address"
                        type="text"
                        name='userAddress'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'
                    />
                    <Field
                        component={MyInput}
                        label="Email"
                        type="email"
                        name='userEmail'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'

                    />
                    <Field
                        component={MyPhoneInput}
                        label="Phone"
                        name='userPhone'
                        errorClass='Form-field'
                        errorClass2='Error-field Form-field'
                        classError='Error-label'
                        classLabel='Form-label'
                    />

                    <Button btnClass='Button' type='submit' text='Checkout'/>
                </Form>
            </Formik>
        </div>
    );
}

export default BuyProduct;