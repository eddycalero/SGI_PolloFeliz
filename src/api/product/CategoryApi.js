import axiosConfig from "../axiosConfig"

const categoryApi ={
    getAll: () => axiosConfig.get("Category"),
    create: (data) => axiosConfig.post("Category", data),
    update: (id, data) => axiosConfig.put(`Category/${id}`, data),
}

export {
    categoryApi
}
