import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShimmerThumbnail } from "react-shimmer-effects";
import {
  createUser,
  actionEditUserDetails,
  actionSingleUseData,
  deleteUserData,
  fetchUserData,
  actionPageNo,
  fetchUserDataByInfinateScroll,
} from "../reducer/createReducer";
import EditUserData from "./Drawer/EditUserData";
import InfiniteScroll from "react-infinite-scroll-component";
import { FiLoader } from "react-icons/fi";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
const { confirm } = Modal;

const Read = () => {
  const data = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const {
    users,
    loading,
    error,
    infinateScroll,
    pageNumber,
    pageSize,
    singleUseData,
    searchingUserData,
  } = data;
  // console.log(users)
  console.log(searchingUserData);
  

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, []);

  useEffect(() => {
    const payload = {
      pageNumber: pageNumber,
      pageSize: pageSize,
      
    };
    dispatch(fetchUserDataByInfinateScroll(payload));
  }, [pageNumber, pageSize]);

  // console.log(singleUseData?.id)

  const DeleteUser = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deleteUserData(id));
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  };

  return (
    <>
      <div className="bg-gray-100 w-full align-center text-center p-4 mx-auto">
        {loading ? (
          <div className="mx-auto">
            {[...new Array(5)].map((_, idx) => (
              <div>
                <ShimmerThumbnail
                  height={200}
                  width={400}
                  rounded
                  center
                  className="bg-white shadow"
                />
              </div>
            ))}
          </div>
        ) : error ? (
          <div>
            <p>Something wrong</p>
          </div>
        ) : Boolean(users) && users?.length > 0 ? (
          <InfiniteScroll
            dataLength={users.length} // The current length of users
            next={() => {
              dispatch(actionPageNo()); // Increment page number
            }}
            hasMore={infinateScroll}
            loader={
              <h4 className=" text-2xl text-blue-500 flex justify-center">
                <FiLoader />
              </h4>
            }
            height={"80vh"}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {users.map((value, index) => {
              return (
                <>
                  <div className="block rounded-lg  p-6 text-surface shadow-secondary-1  bg-center w-[34rem] my-8 justify-center bg-white dark:bg-surface-dark dark:text-white mx-auto">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight"
                      key={index}
                    >
                      Name: {value.name}
                    </h5>
                    <p className="mb-4 text-base">ID: {value.id}</p>
                    <p className="mb-4 text-base">Number: {value.number}</p>
                    <p className="mb-4 text-base capitalize">
                      Email: {value.email}
                    </p>
                    <p className="mb-4 text-base capitalize">
                      Age: {value.age}
                    </p>
                    <p className="mb-4 text-base capitalize">
                      Gender: {value.gender}
                    </p>

                    <div className=" flex justify-center ">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium m-3 bg-gray-100 uppercase leading-normal
                     text-black font-outfit shadow-primary-3 transition duration-150 ease-in-out  hover:shadow-primary-2 
                     focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2
                      dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs  m-3 font-medium bg-blue-600 uppercase leading-normal
                     text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 
                     focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2
                      dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        onClick={(e) => {
                          dispatch(actionEditUserDetails(true));
                          dispatch(actionSingleUseData(value));
                        }}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs m-3 font-medium bg-red-700 uppercase leading-normal
                     text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 
                     focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2
                      dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        onClick={() => {
                          DeleteUser(value.id);
                          dispatch(actionSingleUseData(value));
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </InfiniteScroll>
        ) : (
          <></>
        )}
      </div>

      <EditUserData />
    </>
  );
};

export default Read;
