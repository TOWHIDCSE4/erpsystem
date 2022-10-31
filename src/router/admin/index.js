const routes = {
  path: "/admin",
  name: "Admin",
  redirect: "/admin/user",
  // component: () => import('@/layout/auth/AuthLayout.vue'),
  children: [
    {
      path: "users",
      name: "UserList",
      component: () => import("@/views/admin/users/UserList.vue"),
    },
    {
      path: "roles/roleslist",
      name: "RoleList",
      component: () => import("@/views/admin/roles/RoleList.vue"),
    },
    {
      path: "roles/create",
      name: "RoleCreate",
      component: () => import("@/views/admin/roles/RoleCreateView.vue"),
    },
    {
      path: "companies/companieslist",
      name: "CompanyList",
      component: () => import("@/views/admin/companies/CompanyIndexView.vue"),
    },
    {
      path: "companies/create",
      name: "CompanyCreate",
      component: () => import("@/views/admin/companies/CompanyCreateView.vue"),
    },
    {
      path: "companies/:id/edit",
      name: "CompanyEdit",
      component: () => import("@/views/admin/companies/CompanyEditView.vue"),
    },
    {
      path: "companies/details/:id",
      name: "CompanyDetails",
      component: () => import("@/views/admin/companies/CompanySingleView.vue"),
    },
  ],
};

export default routes;
