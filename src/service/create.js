

"https://66d1dbc962816af9a4f51602.mockapi.io/crud";

export const putCreateData = () =>{
    const putBankService = async (endpoint, payload) => {
        let url = endpoint;
        url += `/${payload?.id}`;
      
        const response = await authedAxios().put(url, payload);
        return response;
      };
}


export const getAllData =  async () => {
    try{
        const response = await fetch ("https://66d1dbc962816af9a4f51602.mockapi.io/crud");
    }

}


const createhotel = async (payload) => {
    try {
      const response = await authedAxios().post("/hotels", payload);
  
      return response.data;
    } catch (error) {
      return null;
    }
  };
  