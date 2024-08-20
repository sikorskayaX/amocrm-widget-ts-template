import React, { CSSProperties } from "react";
import { TextField } from "reon-ui-lib";

type FormInputProps = {
    name: string,
    type: 'text' | 'tel' | 'email' | 'password' | 'url' | 'search',
    style?: CSSProperties 
}

const FormInput = ({ name, type, style }: FormInputProps): JSX.Element => {
    return (
        <TextField
            label={name}
            placeholder={name}
            type={type}
            variant="outlined"
            style={{ backgroundColor: '#fff', ...style }}
        />
    );
}

export default FormInput;

