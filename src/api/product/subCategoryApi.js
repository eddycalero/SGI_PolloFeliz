import axiosConfig from "../axiosConfig"

const subCategoryApi = {
    getAll: () => axiosConfig.get("subCategory"),
    create: (data) => axiosConfig.post("subCategory", data),
    update: (id, data) => axiosConfig.put(`subCategory/${id}`, data),
}

export {
    subCategoryApi
}
