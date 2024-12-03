
  import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { deleteUserData } from '../../reducer/createReducer';
import { useSelector, useDispatch } from "react-redux";
const { confirm } = Modal;


export const DeleteUser = ({id}) => {
    const dispatch = useDispatch();

  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      dispatch(deleteUserData(singleUseData.id))
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const showPropsConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true,
    },
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
const DeleteButton = ({id}) => (

  <Space wrap>
   
    <Button onClick={DeleteUser } type="dashed">
      Delete
    </Button>
    {/* <Button onClick={showPropsConfirm} type="dashed">
      With extra props
    </Button> */}
  </Space>
);
export default DeleteButton;


  




