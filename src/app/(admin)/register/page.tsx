import {redirect} from "next/navigation";
import {verifyInvitationToken} from "@/lib/actions";
import {RegisterUser} from "@/app/ui/admin/forms/RegisterUser";

export default async function AccountRegisterPage(
  {searchParams}: { searchParams: Promise<{ [_: string]: string | string[] | undefined }> }
) {

  const params = await searchParams;

  const token = params.token as string ?? "";

  // TODO Add manual token input
  if(!token)
    redirect("/");

  const { data, error } = await verifyInvitationToken(token);

  if(error || !data) {
    return <h1>{error}</h1>;
  }

  return <RegisterUser verificationID={data.id} email={data.value}/>;
}