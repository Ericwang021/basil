import React from "react";
import { withBaseIcon } from "react-icons-kit";
import { ic_language } from "react-icons-kit/md/ic_language";
import { ic_view_list } from "react-icons-kit/md/ic_view_list";
import { book } from "react-icons-kit/icomoon/book";
import { ic_feedback } from "react-icons-kit/md/ic_feedback";
import { ic_search } from "react-icons-kit/md/ic_search";
import { ic_close } from "react-icons-kit/md/ic_close";

const IconContainer = withBaseIcon({ size: 24 });
export const IconLan = () => <IconContainer icon={ic_language} />;
export const IconViewList = () => <IconContainer icon={ic_view_list} />;
export const IconBook = () => <IconContainer icon={book} />;
export const IconFeedBack = () => <IconContainer icon={ic_feedback} />;
export const IconSearch = () => <IconContainer icon={ic_search} />;
export const IconClose = () => <IconContainer icon={ic_close} />;
