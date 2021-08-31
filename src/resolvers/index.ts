//--------------- App Notifications --------------
import { appNotification, appNotifications } from './appNotifications/queries';
import { createAppNotification, updateAppNotification, deleteAppNotification } from './appNotifications/mutations';
//--------------------- Audit --------------------
import { audit, audits } from './audits/queries';
import { createAudit, updateAudit, deleteAudit } from './audits/mutations';
//------------------- Branches -------------------
import { branch, branches } from './branches/queries';
import { createBranch, updateBranch, deleteBranch } from './branches/mutations';
//------------------- Branch Goals ---------------
import { branchGoal, branchGoals } from './branchGoals/queries';
import { createBranchGoal, updateBranchGoal, deleteBranchGoal } from './branchGoals/mutations';
//-----------------  Branch Supplier -------------
import { createBranchSupplier } from './branchSuppliers/mutations';
//----------  Branch Supplier Salespersons -------
import { findBranchEmployees } from './branchSupplierSalespersons/queries';
import { createBranchSupplierSalesperson } from './branchSupplierSalespersons/mutations';
//---------------- Branch User Goals -------------
import { branchUserGroup, branchUserGroups } from './branchUserGroups/queries';
import { createBranchUserGroup, updateBranchUserGroup, deleteBranchUserGroup } from './branchUserGroups/mutations';
//--------------------- Brands -------------------
import { adminBrand, adminBrands } from './brands/admin/queries';
import { adminCreateBrand, adminUpdateBrand, adminDeleteBrand } from './brands/admin/mutations';
//-------------- Business Category ---------------
import { businessCategory, businessCategories } from './businessCategories/queries';
import { createBusinessCategory, updateBusinessCategory, deleteBusinessCategory } from './businessCategories/mutations';
//------------------ Client ----------------------
import { client, clients } from './clients/queries';
import { createClient, updateClient, deleteClient } from './clients/mutations';
//------------------- Company --------------------
import { company, companies } from './companies/queries';
import { createCompany, updateCompany, deleteCompany } from './companies/mutations';
//------------------ Customer --------------------
import {customer, customers} from './customers/queries';
import {createCustomer, updateCustomer, deleteCustomer} from './customers/mutations';
//------------------- Feature --------------------
import { feature, features } from './features/queries';
import { createFeature, updateFeature, deleteFeature } from './features/mutations';
//-----------Internal Business Category ----------
import { internalBusinessCategory, internalBusinessCategories} from './internalBusinessCategories/queries';
import { createInternalBusinessCategory, updateInternalBusinessCategory, deleteInternalBusinessCategory } from './internalBusinessCategories/mutations';
//--------------- Manufactures --------------------
import { manufacturer, manufacturers } from './manufacturers/queries';
import { createManufacturer, updateManufacturer, deleteManufacturer } from './manufacturers/mutations';
//--------------- Measurement Units ---------------
import { measurementUnit, measurementUnits } from './measurementUnits/queries';
import { createMeasurementUnit, updateMeasurementUnit, deleteMeasurementUnit } from './measurementUnits/mutations';
//--------------- Permissions ---------------------
import { permission, permissions } from './permissions/queries';
import { createPermission, updatePermission, deletePermission } from './permissions/mutations';
//------------------ Products ---------------------
import { product, products } from './products/queries';
import { createProduct, updateProduct, deleteProduct } from './products/mutations';
//--------------- Product Category ----------------
import { productCategory, productCategories } from './productCategories/queries';
import { createProductCategory, updateProductCategory, deleteProductCategory } from './productCategories/mutations';
//------------- Product Descriptions --------------
import { productDescription, productDescriptions } from './productDescriptions/queries';
import { createProductDescription, updateProductDescription, deleteProductDescription } from './productDescriptions/mutations';
//--------------- Product Segment -----------------
import { productSegment, productSegments  } from './productSegments/queries';
import { createProductSegment, updateProductSegment, deleteProductSegment } from './productSegments/mutations';
//------------- Product Segment Entry -------------
import { productSegmentEntry, productSegmentEntries } from './productSegmentEntries/queries';
import { createProductSegmentEntry, updateProductSegmentEntry, deleteProductSegmentEntry } from './productSegmentEntries/mutations';
//------------------- Roles -----------------------
import { role, roles } from './roles/queries';
import { createRole, updateRole, deleteRole } from './roles/mutations';
//-------------------- Subscriptions --------------
import { subscription, subscriptions } from './subscriptions/queries';
import { createSubscription, updateSubscription, deleteSubscription } from './subscriptions/mutations';
//----------------------- Sales -------------------
import { createSale } from './sales/mutations';
//----------------------- User --------------------
import { adminUser, adminUsers } from './users/admin/queries';
import {
    clientLoginUser,
    clientRefreshToken, 
    clientRegisterUser,
    clientResendOtp,
    clientSetUserPassword,
    clientUpdateUser,
    clientUserExists,
    clientVerifyUser
} from './users/client/mutations';
//-------------------  User Branch -----------------
import { findBranchUsers } from './userBranches/queries';



const resolvers = {
    Query: {
        //--------------- App Notifications --------------
        appNotification,
        appNotifications,
        //--------------------- Audit --------------------
        audit,
        audits,
        //------------------- Branches -------------------
        branch,
        branches,
        //------------------- Branch Goals ---------------
        branchGoal,
        branchGoals,
        //----------- Branch Supplier Salespersons --------
        findBranchEmployees,
        //---------------- Branch user Goals -------------
        branchUserGroup,
        branchUserGroups,
        //--------------------- Brands -------------------
        adminBrand,
        adminBrands,
        //-------------- Business Category ---------------
        businessCategory,
        businessCategories,
        //------------------ Client ----------------------
        client,
        clients,
        //------------------- Company --------------------
        company,
        companies,
        //------------------ Customer --------------------
        customer,
        customers,
        //------------------- Feature --------------------
        feature,
        features,
        //-----------Internal Business Category ----------
        internalBusinessCategory,
        internalBusinessCategories,
        //--------------- Manufactures --------------------
        manufacturer,
        manufacturers,
        //--------------- Measurement Units ---------------
        measurementUnit,
        measurementUnits,
        //--------------- Permissions ---------------------
        permission,
        permissions,
        //------------------ Products ---------------------
        product,
        products,
        //--------------- Product Category ----------------
        productCategory,
        productCategories,
        //------------- Product Descriptions --------------
        productDescription,
        productDescriptions,
        //--------------- Product Segment -----------------
        productSegment,
        productSegments,
        //------------- Product Segment Entry -------------
        productSegmentEntry,
        productSegmentEntries,
        //------------------- Roles -----------------------
        role,
        roles,
        //-------------------- Subscriptions --------------
        subscription,
        subscriptions,
        //-------------------- Users ----------------------
        adminUser,
        adminUsers,
        //------------------ User Branch -------------------
        findBranchUsers,
    },

    Mutation: {
        //--------------- App Notifications --------------
        createAppNotification,
        updateAppNotification,
        deleteAppNotification,
        //--------------------- Audit --------------------
        createAudit,
        updateAudit,
        deleteAudit,
        //------------------- Branches -------------------
        createBranch,
        updateBranch,
        deleteBranch,
        //------------------- Branch Goals ---------------
        createBranchGoal,
        updateBranchGoal,
        deleteBranchGoal,
        //------------------- Branch Supplier ------------
        createBranchSupplier,
        //------------ Branch Supplier Salespersons ------
        createBranchSupplierSalesperson,
        //---------------- Branch User Goals -------------
        createBranchUserGroup,
        updateBranchUserGroup,
        deleteBranchUserGroup,
        //--------------------- Brands -------------------
        adminCreateBrand,
        adminUpdateBrand,
        adminDeleteBrand,
        //-------------- Business Category ---------------
        createBusinessCategory,
        updateBusinessCategory,
        deleteBusinessCategory,
        //------------------ Client ----------------------
        createClient,
        updateClient,
        deleteClient,
        //------------------- Company --------------------
        createCompany,
        updateCompany,
        deleteCompany,
        //------------------ Customer --------------------
        createCustomer,
        updateCustomer,
        deleteCustomer,
        //------------------- Feature --------------------
        createFeature,
        updateFeature,
        deleteFeature,
        //-----------Internal Business Category ----------
        createInternalBusinessCategory,
        updateInternalBusinessCategory,
        deleteInternalBusinessCategory,
        //--------------- Manufactures --------------------
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,
        //--------------- Measurement Units ---------------
        createMeasurementUnit,
        updateMeasurementUnit,
        deleteMeasurementUnit,
        //--------------- Permissions ---------------------
        createPermission,
        updatePermission,
        deletePermission,
        //------------------ Products ---------------------
        createProduct,
        updateProduct,
        deleteProduct,
        //--------------- Product Category ----------------
        createProductCategory,
        updateProductCategory,
        deleteProductCategory,
        //------------- Product Descriptions --------------
        createProductDescription,
        updateProductDescription,
        deleteProductDescription,
        //--------------- Product Segment -----------------
        createProductSegment,
        updateProductSegment,
        deleteProductSegment,
        //------------- Product Segment Entry -------------
        createProductSegmentEntry,
        updateProductSegmentEntry,
        deleteProductSegmentEntry,
        //------------------- Roles -----------------------
        createRole,
        updateRole,
        deleteRole,
        //-------------------- Subscriptions --------------
        createSubscription,
        updateSubscription,
        deleteSubscription,
        //----------------------- Sale --------------------
        createSale,
        //----------------------- User --------------------
        clientRefreshToken,
        clientRegisterUser,
        clientResendOtp,
        clientSetUserPassword,
        clientLoginUser,
        clientUpdateUser,
        clientUserExists,
        clientVerifyUser,
    },
};

export default resolvers;
