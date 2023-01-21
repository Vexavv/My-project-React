import { PatternFormat } from 'react-number-format';
import PropTypes from 'prop-types';

function MyPhoneInput(props) {
    const {classLabel, errorClass, errorClass2, classError, field, form, label, ...rest} = props;
    const {name} = field;
    return (
        <>
            <label className={classLabel}>{label}
               <PatternFormat className={form.errors[name] && form.touched[name] ? errorClass2 : errorClass} {...field} {...rest}  format="(###) ### ## ##" allowEmptyFormatting mask="_" />
            </label>
            {form.errors[name] && form.touched[name] && <div className={classError}>{form.errors[name]}</div>}
        </>

    );
}
MyPhoneInput.propTypes = {
    classLabel: PropTypes.string,
    errorClass: PropTypes.string,
    errorClass2: PropTypes.string,
    classError: PropTypes.string,
    field: PropTypes.object,
    form: PropTypes.object,
    label: PropTypes.string,
};

MyPhoneInput.defaultProps = {
    className: '',
};

export default MyPhoneInput;