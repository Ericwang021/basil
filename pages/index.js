import React, { useState } from 'react';
import CommentLayout from '../components/CommentLayout/CommentLayout';
import ClassTitleWrapper from '../components/ClassTitleWrapper/ClassTitleWrapper';
import VideoBox from '../components/VideoBox/VideoBox';
import { defaultDiscussionList, Provider } from '../components/context';

const Index = () => {
    const [discussionList, setDiscussionList] = useState([
        ...defaultDiscussionList,
    ]);
    const commentContext = {
        discussionList,
        setDiscussionList,
    };
    return (
        <Provider value={commentContext}>
            <div className="index">
                <section className="video-box-wrapper">
                    <VideoBox />
                    <CommentLayout />
                </section>
                <section className="video-title-wrapper">
                    <ClassTitleWrapper />
                </section>
            </div>
        </Provider>
    );
};

export default Index;
