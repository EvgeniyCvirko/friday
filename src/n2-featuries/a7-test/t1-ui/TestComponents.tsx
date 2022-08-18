import React from 'react'
import {Button} from "../../../n1-main/m1-ui/common/button/Button";
import {InputText} from "../../../n1-main/m1-ui/common/input/InputText";
import {Checkbox} from "../../../n1-main/m1-ui/common/chekbox/Checkbox";
import {Link} from "../../../n1-main/m1-ui/common/link/Link";

export const TestComponents = () => {
    return (
        <div>
            test-components
            <div><Button>button</Button></div>
            <div><Button red>button</Button></div>
            <div><InputText/></div>
            <div><Checkbox >some text</Checkbox></div>
            <div><Link to={''} value={'test-components'}/></div>

        </div>
    )
}