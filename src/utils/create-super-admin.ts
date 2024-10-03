import { envs } from "./env";

export async function createSuperAdmin() {
  await strapi.admin.services.role.createRolesIfNoneExist();
  const superAdminRole = await strapi.db
    .query("admin::role")
    .findOne({ where: { code: "strapi-super-admin" } });
  const superAdmin = await strapi.db
    .query("admin::user")
    .findOne({ where: { username: envs.SUPER_USER_USERNAME } });

  console.log({superAdmin})
  if (!superAdmin) {
    const params = {
      username: envs.SUPER_USER_USERNAME,
      email: envs.SUPER_USER_EMAIL,
      blocked: false,
      isActive: true,
      confirmed: true,
      password: null,
      roles: null,
    };
    params.password = await strapi.admin.services.auth.hashPassword(
      envs.SUPER_USER_SECRET
    );
    params.roles = [superAdminRole.id];

    await strapi.db.query("admin::user").create({
      data: { ...params },
      populate: ["roles"],
    });
    console.log("Super admin created");
  }
}
