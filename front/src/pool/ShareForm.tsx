import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import LinkForm from './components/LinkForm'

interface ShareFormProps{
    link: string
}

const ShareForm: React.FC<ShareFormProps> = ({link}) =>{
    return(
        <div className="pool-share-form-container">
            <div className="share-title-container">
                <FontAwesomeIcon icon={faShareAlt} style={{alignSelf:"center"}} fontSize={"18px"} opacity={0.7}/>
                <h1>Share</h1>
            </div>
            <hr />
            <div className="share-input-container">
                <div className="share-input-copy-content">
                    <p>Share the link</p>
                    <LinkForm link={link} />
                </div>
            </div>
        </div>
    )
}

export default ShareForm