export type BranchId = string;

interface GPS {
    latitude: number,
    longitude: number,
}

export interface Branch {
    id: BranchId, 
    name: String,
    startDate: number,
    address: String,
    location: String,
    logo: String,
    phone: String,
    whatsAppPhone: String,
    type: String,
    checkoutSales: boolean,
    aggregateSales: boolean,
    action: String,
    syncInterval: number,
    alwaysSync: boolean,
    forTesting: boolean,
    gps: String,
    latitude: number,
    longitude: number,
    country: String,
    region: String,
    city: String,
    supplierStock: boolean,
    workingDays: String,
    sourcesOfPurchases: String,
    phoneType: String,
    otherServices: String,
    locationType: String,
    storeImage: String,
    serviceType: String,
    buildingStructure:String,
    coolerBrands: String,
    coolerTypes: String,
    electricity: String,
    yearOfEstablishment: number
    appointmentId: String,
    branchUserGroupId: String,
    businessCategoryId: String,
    companyId: String,
    userId: String,
    created_at: number,
    updated_at: number,
    deleted: boolean,
}

export interface BranchIdArgs {
    id: BranchId
}