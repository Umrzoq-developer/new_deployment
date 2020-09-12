import React from "react";
import {Select} from "antd";

const {Option} = Select;

const SelectInputRegion = ({handleChange, values, id, selectedClass, labelText, requiredInput, svgPath, selectInput, placeholderName, value, modeName}) => {
    const randId = 'label' + Math.floor(Math.random() * 10000)
    return(
        <>
            {
                labelText
                &&
                <label htmlFor={randId}>
                    {labelText}
                    {
                        requiredInput && <span className='required' />
                    }
                </label>
            }
            <div className={`selectContainer customDefaultSelect ${selectInput}`}>
                <Select mode={modeName} placeholder={placeholderName} showArrow={false} id={id} className={`selectInputRegion ${selectedClass}`} defaultValue={value} style={{ width: 120 }} onChange={handleChange}>
                    {values.map((value, id) => <Option key={id}>{value}</Option>)}
                </Select>
                { svgPath && <svg><use href={`#${svgPath}`} xlinkHref={`#${svgPath}`}></use></svg> }
            </div>
        </>
    )
};

export default SelectInputRegion;