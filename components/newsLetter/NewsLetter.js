import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FormContainer, Label, Input } from './styled'

const url = "https://gmail.us7.list-manage.com/subscribe/post?u=d4c5dfb731af614907a5cf86e&amp;id=666c1d3857";


export const NewsLetter = () => {
    return (
        <>
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup" style={{ clear:"left", font:"14px", width:"100%"}}>
                    <form action="https://gmail.us7.list-manage.com/subscribe/post?u=d4c5dfb731af614907a5cf86e&amp;id=666c1d3857" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <label style={{color:"white"}}htmlFor="mce-EMAIL">Subscribe To Our NewsLetter</label>
                            <input type="email" name="EMAIL" className ="email" id="mce-EMAIL" placeholder="email address" required />
                            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                <input type="text" name="b_d4c5dfb731af614907a5cf86e_666c1d3857" tabIndex="-1" />
                            </div>
                            <div className="clear" >
                                <input style={{backgroundColor:"#45b3e7"}} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                            </div>
                        </div>
                    </form>
                </div>
        </>
    )
}

