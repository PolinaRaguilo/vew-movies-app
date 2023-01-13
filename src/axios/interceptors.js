const returnData = (res) => res.data;

const interceptors = (axiosInstance) => {
  axiosInstance.interceptors.response.use(returnData);
};

export default interceptors;
