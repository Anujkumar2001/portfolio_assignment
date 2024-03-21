const version = "v1";
console.log(process.env.REACT_APP_USER_BASE_URL, "---->");
export const apiUrl = {
  userBaseUrl: `${process.env.REACT_APP_USER_BASE_URL}/${version}/get/user/${process.env.REACT_APP_USERID}`,
};

// https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae
