import axiosConfig from "../axiosConfig"

const productApi ={
    getAll: () => axiosConfig.get("Product"),
    create: (data) => axiosConfig.post("Product", data),
    update: (id, data) => axiosConfig.put(`Product/${id}`, data),
}

export {
    productApi
}
