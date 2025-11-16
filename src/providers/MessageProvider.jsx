/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { message } from 'antd';

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  message.config({
    top: 100,
    duration: 2,
    maxCount: 1,
    rtl: true,
    prefixCls: 'cart-message',
  });

  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageApi = () => useContext(MessageContext);

export default MessageProvider;
