import FbImageLibrary from 'react-fb-image-grid'
import {useState} from "react";

function Post(props) {
    const {data} = props
    const [like, setLike] = useState(false)
    const [showComment, setShowComment] = useState(false)

    const onSubmit = () => {
        setLike(!like)
    }

    const commentFunction = () => {
        setShowComment(!showComment)
    }

    return <>
        <div>
            <div id="main_canvas">
                <div id="top_header">
                    <div>
                        <table>
                            <tr>
                                <td rowSpan="2">
                                    <a href="https://www.facebook.com/RIR360">
                                        <div id="header_image"></div>
                                    </a>
                                </td>
                                <td><a href="https://www.facebook.com/RIR360" target="_blank" className="name">{data.name}</a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="https://www.facebook.com/RIR360" target="_blank" className="name_2">{Date()}</a></td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <div id="menu"></div>
                    </div>
                </div>

                <div id="text_area">
			<textarea id="text_box">{data.description}
			</textarea>
                </div>


                <div id="images">
                    {
                        <FbImageLibrary images={data.images}/>
                    }
                </div>

                <div id="likes">
                    <div></div>
                    <div className="name_2">50</div>
                    <div><a href="#" className="name_2">1 Comment</a></div>
                </div>
                <br/>
                <div id="btns">
                    <div style={{margin: "auto"}}>
                        {
                            like ?
                                <span onClick={() => onSubmit()}>Like</span>
                                :
                                <span onClick={() => onSubmit()}>Dislike</span>
                        }
                    </div>
                    <div onClick={() => commentFunction()}>Comment</div>
                    <div><img src="https://image.flaticon.com/icons/png/512/222/222322.png" width="18" align="center" /> Share
                    </div>
                </div>

                {
                    showComment
                        ?
                        <div id="comment">
                            <div></div>

                            <div>
                                <a href="#" className="name_3">Big smoke</a> NICE! :)
                            </div>
                            <div>
                                <span></span>
                                <span>Reply</span>
                                <span>1h</span>
                            </div>
                        </div>
                        :
                        ""
                }



            </div>
        </div>
    </>
}

export default Post