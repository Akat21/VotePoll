import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import CopyToClipboardIcon from './CopyToClipboardIcon'
import { Tooltip } from 'react-tooltip'

interface LinkFormProps{
    link: string
}

const LinkForm: React.FC<LinkFormProps> = ({link}) =>{
    return(
        <label className='share-link-input'>
            <input type="text" value={link} readOnly={true}/>
            <CopyToClipboard text={link}>
                <button data-tooltip-id="my-tooltip" data-tooltip-content={"Copied!"} data-tooltip-delay-hide={2000}>
                    <CopyToClipboardIcon />
                </button>
            </CopyToClipboard>
            <Tooltip id='my-tooltip' openOnClick={true}/>
        </label>
    )
}

export default LinkForm