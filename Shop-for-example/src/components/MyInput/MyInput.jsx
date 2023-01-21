import React from 'react';
import PropTypes from 'prop-types';


function MyInput(props) {
    const {classLabel, errorClass, errorClass2, classError, field, form, label, ...rest} = props;
    const {name} = field;
    return (
        <>
            <div>
                <label className={classLabel}>{label}
                    <input
                        className={form.errors[name] && form.touched[name] ? errorClass2 : errorClass} {...field} {...rest} />
                </label>
                {form.errors[name] && form.touched[name] && <div className={classError}>{form.errors[name]}</div>}
            </div>
        </>

    )
}

MyInput.propTypes = {
    classLabel: PropTypes.string,
    errorClass: PropTypes.string,
    errorClass2: PropTypes.string,
    classError: PropTypes.string,
    field: PropTypes.object,
    form: PropTypes.object,
    label: PropTypes.string,
};

MyInput.defaultProps = {
    className: '',
};

export default MyInput;