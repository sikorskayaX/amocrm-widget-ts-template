import React, { CSSProperties, ReactNode, useState } from "react";
import { Select } from "reon-ui-lib";
import { CSSFields } from "reon-ui-lib/dist/ui/controls/combobox/lib/types/Combobox.types";

type FormSelectProps = {
    name: string,
    options: Record<string, ReactNode>,
    label: string,
    styles: Partial<Record<CSSFields, CSSProperties>> 
}

const FormSelect = ({name, options, label, styles}:FormSelectProps) : JSX.Element => {
    const [value, setValue] = useState<string>('start');

    return(
        <Select
            ariaIds={{
                comboboxId: `${name}-combobox`,
                labelId: `${name}label1`,
                listboxId: `${name}listbox`,
                optionIdPrefix: `${name}option`,
            }}
            label={label}
            options={options}
            placeholder={label}
            selectionSettings={{
                multiple: false,
                onChange: (e) => setValue(e),
                value: value
            }}
            variant="underlined"
            styles={styles}
        />
    )
}


export default FormSelect;