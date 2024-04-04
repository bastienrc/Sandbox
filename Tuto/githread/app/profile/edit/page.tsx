import { getUserEdit } from "@/src/query/user.query";
import { ProfileForm } from "./ProfileForm";
import { editProfile } from "./edit-profile.action";

export default async function EditUser() {
  const user = await getUserEdit();

  return (
    <div className="container flex h-full items-center">
      <div className="flex-1 rounded-md border border-border bg-card p-4">
        <ProfileForm user={user} onSubmit={editProfile} />
      </div>
    </div>
  );
}
