import axiosConfig from "../axiosConfig"

const unitMeasureApi ={
    getAll: () => axiosConfig.get("UnitMeasure"),
    create: (data) => axiosConfig.post("UnitMeasure", data),
    update: (id, data) => axiosConfig.put(`UnitMeasure/${id}`, data),
}

export {
    unitMeasureApi
}
